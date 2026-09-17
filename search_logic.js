// ============================================================
//  BNPT Intelligence Platform – Dynamic Search & History Modal Engine
// ============================================================

const DEFAULT_SEARCH_DATASET = [
  { text: '+6281293949502', type: 'phone', label: 'Telkomsel - Ayu Indra Wahyuni', target: 'profile_phone.html' },
  { text: '6281293949502', type: 'phone', label: 'Telkomsel - Ayu Indra Wahyuni', target: 'profile_phone.html' },
  { text: '+6281297228579', type: 'phone', label: 'Telkomsel - Ayu Indria', target: 'profile_phone.html' },
  { text: '6281297228579', type: 'phone', label: 'Telkomsel - Ayu Indria', target: 'profile_phone.html' },
  { text: 'AIMANA ILMAN AULIA', type: 'name', nik: '3273092510920002', label: 'NIK: 3273092510920002', target: 'profile_aimana.html' },
  { text: 'ISMAIL', type: 'name', nik: '3273691085690003', label: 'NIK: 3273691085690003 (Kepala Keluarga)', target: 'index.html' },
  { text: 'AINAYA IRHAM ADIYATAMA', type: 'name', nik: '3273091107980001', label: 'NIK: 3273091107980001', target: 'index.html' },
  { text: 'FAKHRISYA AYUTIA ZAHRA', type: 'name', nik: '3273094403020001', label: 'NIK: 3273094403020001', target: 'index.html' },
  { text: 'ILMA NUGRAHANI', type: 'name', nik: '3273695104690004', label: 'NIK: 3273695104690004', target: 'index.html' },
  { text: 'AMILA SAFIRA ARAFANI', type: 'name', nik: '3273895600020001', label: 'NIK: 3273895600020001', target: 'index.html' },
  { text: '6287781085549', type: 'phone', label: 'Aimana - XL Axiata', target: 'profile_aimana.html' },
  { text: '6281312124695', type: 'phone', label: 'Ismail - Telkomsel', target: 'index.html' },
  { text: '3273092008106277', type: 'kk', label: 'Kartu Keluarga Ismail', target: 'index.html' }
];

const INITIAL_HISTORY = [
  { text: '+6281293949502', type: 'phone', label: 'Telkomsel - Ayu Indra Wahyuni', time: 'Just now', target: 'profile_phone.html' },
  { text: '+6281297228579', type: 'phone', label: 'Telkomsel - Ayu Indria', time: '5m ago', target: 'profile_phone.html' },
  { text: 'Aimana Ilman Aulia', type: 'name', label: 'NIK: 3273092510920002', time: '10m ago', target: 'profile_aimana.html' },
  { text: '3273092008106277', type: 'kk', label: 'Kartu Keluarga Ismail', time: '1h ago', target: 'index.html' },
  { text: '6287781085549', type: 'phone', label: 'Aimana - XL Axiata', time: '3h ago', target: 'profile_aimana.html' },
  { text: 'ISMAIL', type: 'name', label: 'Kepala Keluarga', time: 'Yesterday', target: 'index.html' }
];

// LocalStorage helpers
function getSearchHistory() {
  const saved = localStorage.getItem('bnpt_search_history');
  if (saved) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  return INITIAL_HISTORY;
}

function saveSearchHistory(history) {
  localStorage.setItem('bnpt_search_history', JSON.stringify(history));
}

function getTargetForQuery(query, type) {
  const q = (query || '').trim().toLowerCase();
  if (q.includes('aimana') || q.includes('3273092510920002') || q.includes('8778108')) {
    return 'profile_aimana.html';
  }
  if (q.includes('ismail') || q.includes('3273092008106277') || q.includes('3273691085690003') || q.includes('6281312124695')) {
    return 'index.html';
  }
  if (q.includes('6281297228579') || q.includes('+62812') || q.includes('62812') || q.includes('ayu') || (type === 'phone' && q.includes('812'))) {
    return 'profile_phone.html';
  }
  return 'profile_aimana.html';
}

// Active Query State Persistence & Target Identification
function getActiveQuery() {
  return localStorage.getItem('bnpt_active_query') || '+6281293949502';
}

function getActiveType() {
  return localStorage.getItem('bnpt_active_type') || 'phone';
}

function setActiveQuery(query, type) {
  if (query) localStorage.setItem('bnpt_active_query', query);
  if (type) localStorage.setItem('bnpt_active_type', type);
}

function getActiveTargetId() {
  const query = getActiveQuery().toLowerCase();
  if (query.includes('aimana') || query.includes('3273092510920002') || query.includes('8778108')) {
    return 'aimana';
  }
  if (query.includes('ismail') || query.includes('3273092008106277') || query.includes('3273691085690003') || query.includes('6281312124695')) {
    return 'ismail';
  }
  return 'ayu';
}

function syncPageDataToActiveTarget() {
  const targetId = getActiveTargetId();
  const activeQuery = getActiveQuery();

  // 1. Sync Profile Overview Tab Link
  const profileTab = document.getElementById('tab-profile') || document.querySelector('.tab-nav .tab-btn:nth-child(1)');
  if (profileTab) {
    profileTab.onclick = () => {
      if (targetId === 'aimana') {
        window.location.href = 'profile_aimana.html';
      } else {
        window.location.href = 'profile_phone.html';
      }
    };
  }

  // 2. Sync AI Analysis Page (`ai_analysis.html`)
  if (window.location.pathname.endsWith('ai_analysis.html')) {
    const repTitle = document.getElementById('rep-title');
    const blufText = document.getElementById('bluf-text');
    const keyKontak = document.getElementById('key-kontak');
    const keyLokasi = document.getElementById('key-lokasi');

    if (targetId === 'aimana') {
      if (repTitle) repTitle.textContent = 'LAPORAN ANALISIS AKTIVITAS TARGET AIMANA ILMAN AULIA';
      if (blufText) blufText.innerHTML = '<strong>BLUF</strong> — Selama 25 Juli – 11 Agustus 2026, target AIMANA ILMAN AULIA (6287781085549) tercatat berkomunikasi aktif di wilayah Taman Sari & Bandung Wetan. Riwayat perangkat menunjukkan penggunaan Xiaomi 13 Ultra. Data Usage Activities menampilkan Tokopedia 4.2 MB dan Gojek 2.1 MB sebagai penggunaan data aplikasi tertinggi.';
      if (keyKontak) keyKontak.textContent = '6281312124595';
      if (keyLokasi) keyLokasi.textContent = 'Bandung Wetan, Bandung';
    } else if (targetId === 'ismail') {
      if (repTitle) repTitle.textContent = 'LAPORAN ANALISIS AKTIVITAS TARGET ISMAIL';
      if (blufText) blufText.innerHTML = '<strong>BLUF</strong> — Selama 25 Juli – 11 Agustus 2026, target ISMAIL (6281312124595) tercatat berkomunikasi dengan 8 anggota keluarga KK 3273092008106277. Lokasi dominan di Taman Sari, Bandung Wetan & Makassar.';
      if (keyKontak) keyKontak.textContent = '6287781085549';
      if (keyLokasi) keyLokasi.textContent = 'Taman Sari, Bandung Wetan';
    }
  }

  // 3. Sync Phone Detail Page (`phone_detail.html`)
  if (window.location.pathname.endsWith('phone_detail.html')) {
    const phoneHeader = document.querySelector('.phone-num-title') || document.querySelector('h1');
    const ownerVal = document.querySelector('.owner-name-val');
    if (targetId === 'aimana') {
      if (phoneHeader) phoneHeader.textContent = '+6287781085549';
      if (ownerVal) ownerVal.textContent = 'AIMANA ILMAN AULIA';
    } else if (targetId === 'ismail') {
      if (phoneHeader) phoneHeader.textContent = '+6281312124595';
      if (ownerVal) ownerVal.textContent = 'ISMAIL';
    }
  }

  // 4. Sync WhatsApp Detail Page (`whatsapp_detail.html`)
  if (window.location.pathname.endsWith('whatsapp_detail.html')) {
    const waTitle = document.querySelector('.wa-profile-name') || document.querySelector('h1');
    if (targetId === 'aimana') {
      if (waTitle) waTitle.textContent = 'Aimana Ilman Aulia (+6287781085549)';
    } else if (targetId === 'ismail') {
      if (waTitle) waTitle.textContent = 'Ismail (+6281312124595)';
    }
  }
}

function addQueryToHistory(query, type) {
  if (!query || !query.trim()) return;
  const q = query.trim();
  setActiveQuery(q, type || 'phone');
  let history = getSearchHistory();
  history = history.filter(item => item.text.toLowerCase() !== q.toLowerCase());
  let target = getTargetForQuery(q, type);
  history.unshift({ text: q, type: type || 'name', time: 'Just now', target: target });
  if (history.length > 10) history = history.slice(0, 10);
  saveSearchHistory(history);
}

function clearSearchHistory() {
  localStorage.removeItem('bnpt_search_history');
}

// Global Modal Element Singleton
let searchModalOverlay = null;

function ensureSearchModal() {
  if (searchModalOverlay) return searchModalOverlay;

  searchModalOverlay = document.createElement('div');
  searchModalOverlay.className = 'search-modal-overlay';
  searchModalOverlay.id = 'bnpt-search-modal';
  searchModalOverlay.innerHTML = `
    <div class="search-modal-dialog">
      <div class="shm-header">
        <div class="shm-title-group">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" stroke-width="1.4"/><path d="M7.5 4v3.5l2.5 2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
          <span id="shm-title-text">RIWAYAT PENCARIAN TERAKHIR</span>
        </div>
        <div class="shm-actions">
          <button type="button" class="shm-btn-clear" id="shm-btn-clear">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 3h9M4.5 3V1.5h3V3M3 3v7.5a1 1 0 001 1h4a1 1 0 001-1V3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
            Hapus Riwayat
          </button>
          <button type="button" class="shm-btn-close" id="shm-btn-close" title="Tutup (ESC)">&times;</button>
        </div>
      </div>
      <div class="shm-input-row">
        <div class="shm-input-wrap">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style="color:var(--accent); flex-shrink:0;"><circle cx="6" cy="6" r="4.5" stroke="currentColor" stroke-width="1.5"/><path d="M9.5 9.5l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          <input type="text" class="shm-input" id="shm-input" placeholder="Cari nama, nomor telepon, atau nomor KK..." />
        </div>
      </div>
      <div class="shm-body" id="shm-body">
        <!-- Dynamic list -->
      </div>
      <div class="shm-footer">
        <span>Gunakan <kbd>&uarr;</kbd> <kbd>&darr;</kbd> memilih &bull; <kbd>ENTER</kbd> cari &bull; <kbd>ESC</kbd> tutup</span>
      </div>
    </div>
  `;
  document.body.appendChild(searchModalOverlay);

  // Close handlers
  const closeBtn = searchModalOverlay.querySelector('#shm-btn-close');
  closeBtn.addEventListener('click', closeSearchModal);

  searchModalOverlay.addEventListener('click', (e) => {
    if (e.target === searchModalOverlay) closeSearchModal();
  });

  return searchModalOverlay;
}

let activeInputRef = null;
let activeSelectRef = null;
let selectedIndex = -1;

function closeSearchModal() {
  if (searchModalOverlay) {
    searchModalOverlay.classList.remove('open');
  }
  selectedIndex = -1;
}

function renderModalContent(filterText = '', forceHistory = false) {
  const modal = ensureSearchModal();
  const body = modal.querySelector('#shm-body');
  const titleText = modal.querySelector('#shm-title-text');
  const clearBtn = modal.querySelector('#shm-btn-clear');

  const history = getSearchHistory();
  const query = filterText.trim().toLowerCase();
  let isFiltering = !forceHistory && query.length > 0;
  let displayList = [];

  if (!isFiltering) {
    titleText.textContent = 'RIWAYAT PENCARIAN TERAKHIR';
    clearBtn.style.display = history.length > 0 ? 'flex' : 'none';
    displayList = history.map(h => ({ ...h, isHistory: true }));
  } else {
    titleText.textContent = 'HASIL PENCARIAN / SARAN';
    clearBtn.style.display = 'none';

    const matchedDataset = DEFAULT_SEARCH_DATASET.filter(d =>
      d.text.toLowerCase().includes(query) || (d.label && d.label.toLowerCase().includes(query))
    );
    const matchedHistory = history.filter(h =>
      h.text.toLowerCase().includes(query) && !matchedDataset.some(d => d.text.toLowerCase() === h.text.toLowerCase())
    ).map(h => ({ ...h, isHistory: true }));

    displayList = [...matchedDataset, ...matchedHistory];
  }

  if (displayList.length === 0) {
    body.innerHTML = `
      <div class="shm-empty">
        Tidak ditemukan riwayat atau hasil pencarian untuk "${filterText}"
      </div>
    `;
  } else {
    const itemsHtml = displayList.map((item, idx) => {
      const iconSvg = item.isHistory
        ? `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.3"/><path d="M7 4v3l2 2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`
        : `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="5.5" cy="5.5" r="4" stroke="currentColor" stroke-width="1.3"/><path d="M8.5 8.5l3 3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`;

      let displayText = item.text;
      if (isFiltering) {
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        displayText = item.text.replace(regex, `<span class="highlight">$1</span>`);
      }

      const subText = item.label || item.time || '';

      return `
        <div class="shm-item ${idx === selectedIndex ? 'selected' : ''}" data-index="${idx}" data-text="${item.text}" data-type="${item.type || 'name'}" data-target="${item.target || 'profile_aimana.html'}">
          <div class="shm-item-left">
            <div class="shm-item-icon">${iconSvg}</div>
            <div class="shm-item-details">
              <span class="shm-item-text">${displayText}</span>
              ${subText ? `<span class="shm-item-sub">${subText}</span>` : ''}
            </div>
          </div>
          <span class="shm-item-badge">${item.type ? item.type.toUpperCase() : 'NAME'}</span>
        </div>
      `;
    }).join('');

    body.innerHTML = itemsHtml;
  }

  // Attach item click listener
  body.querySelectorAll('.shm-item').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const text = el.dataset.text;
      const type = el.dataset.type;
      const target = el.dataset.target;
      if (activeInputRef) activeInputRef.value = text;
      if (activeSelectRef) activeSelectRef.value = type;
      addQueryToHistory(text, type);
      closeSearchModal();
      window.location.href = target || getTargetForQuery(text, type);
    });
  });

  // Attach clear history
  clearBtn.onclick = (e) => {
    e.stopPropagation();
    clearSearchHistory();
    renderModalContent('', true);
  };
}

function openSearchModal(inputRef, selectRef) {
  activeInputRef = inputRef;
  activeSelectRef = selectRef;
  const modal = ensureSearchModal();
  const modalInput = modal.querySelector('#shm-input');

  modalInput.value = inputRef ? inputRef.value : '';
  selectedIndex = -1;
  renderModalContent(modalInput.value, false);

  modal.classList.add('open');
  setTimeout(() => modalInput.focus(), 50);

  // Sync keyboard events on modalInput
  modalInput.oninput = () => {
    if (activeInputRef) activeInputRef.value = modalInput.value;
    selectedIndex = -1;
    renderModalContent(modalInput.value, false);
  };

  modalInput.onkeydown = (e) => {
    const items = modal.querySelectorAll('.shm-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (items.length === 0) return;
      selectedIndex = (selectedIndex + 1) % items.length;
      updateModalSelection(items, modalInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (items.length === 0) return;
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
      updateModalSelection(items, modalInput);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].click();
      } else {
        const val = modalInput.value.trim();
        if (val) {
          if (activeInputRef) activeInputRef.value = val;
          const type = activeSelectRef ? activeSelectRef.value : 'name';
          addQueryToHistory(val, type);
          closeSearchModal();
          window.location.href = getTargetForQuery(val, type);
        }
      }
    } else if (e.key === 'Escape') {
      closeSearchModal();
    }
  };
}

function updateModalSelection(items, modalInput) {
  items.forEach((item, i) => {
    if (i === selectedIndex) {
      item.classList.add('selected');
      modalInput.value = item.dataset.text;
      if (activeInputRef) activeInputRef.value = item.dataset.text;
      if (activeSelectRef) activeSelectRef.value = item.dataset.type;
      item.scrollIntoView({ block: 'nearest' });
    } else {
      item.classList.remove('selected');
    }
  });
}

// Global escape key listener
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSearchModal();
});

// Setup function for search components
function setupDynamicSearch(boxSelector, inputSelector, selectSelector, btnSelector) {
  const box = document.querySelector(boxSelector);
  const input = document.querySelector(inputSelector);
  const select = document.querySelector(selectSelector);
  const btn = document.querySelector(btnSelector);

  if (!box || !input) return;

  // Auto-sync search input to persisted active query across all detail tab pages
  const isSearchLandingPage = window.location.pathname.endsWith('search.html');
  if (!isSearchLandingPage) {
    const activeQuery = getActiveQuery();
    const activeType = getActiveType();
    if (activeQuery) input.value = activeQuery;
    if (select && activeType) select.value = activeType;
    syncPageDataToActiveTarget();
  }

  input.addEventListener('focus', () => {
    openSearchModal(input, select);
  });

  input.addEventListener('click', (e) => {
    e.stopPropagation();
    openSearchModal(input, select);
  });

  box.addEventListener('click', (e) => {
    if (!e.target.closest('#btn-search') && !e.target.closest('.search-type-select') && !e.target.closest('.search-type')) {
      e.stopPropagation();
      openSearchModal(input, select);
    }
  });

  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      const type = select ? select.value : 'name';
      if (text) {
        addQueryToHistory(text, type);
        window.location.href = getTargetForQuery(text, type);
      }
    });
  }
}

// Global Fullscreen Engine
function toggleFullScreen() {
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
window.toggleFullScreen = toggleFullScreen;

function updateFullScreenBtnUI() {
  const isFS = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
  document.querySelectorAll('.btn-fullscreen').forEach(btn => {
    const textSpan = btn.querySelector('.fs-text');
    if (isFS) {
      btn.classList.add('active');
      if (textSpan) textSpan.textContent = 'Exit Fullscreen';
      btn.title = 'Exit Fullscreen (ESC / F11)';
    } else {
      btn.classList.remove('active');
      if (textSpan) textSpan.textContent = 'Fullscreen';
      btn.title = 'Fullscreen Mode (F11)';
    }
  });
  if (isFS) {
    document.body.classList.add('is-fullscreen-mode');
  } else {
    document.body.classList.remove('is-fullscreen-mode');
  }
}

document.addEventListener('fullscreenchange', updateFullScreenBtnUI);
document.addEventListener('webkitfullscreenchange', updateFullScreenBtnUI);
document.addEventListener('mozfullscreenchange', updateFullScreenBtnUI);
document.addEventListener('MSFullscreenChange', updateFullScreenBtnUI);

// Keyboard shortcut F11 for fullscreen
document.addEventListener('keydown', (e) => {
  if (e.key === 'F11') {
    e.preventDefault();
    toggleFullScreen();
  }
});
