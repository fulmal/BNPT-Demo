// ============================================================
//  Profile Detail Page – Aimana Ilman Aulia
// ============================================================

// ── SUB-TAB SWITCHING ────────────────────────────────────────
function initSubTabs() {
  const tabs = document.querySelectorAll('.sub-tab');
  const panels = document.querySelectorAll('.sub-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.panel;

      // Deactivate all
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      // Activate clicked
      tab.classList.add('active');
      const targetPanel = document.getElementById('panel-' + target);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
}

// ── ADD TO MISSION BUTTON ─────────────────────────────────────
function initMissionBtn() {
  const btn = document.getElementById('btn-add-mission');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const missionStatus = document.querySelector('.mission-status');

    // Show confirmation toast
    showToast('Aimana Ilman Aulia added to mission watchlist', 'success');

    // Update mission status
    if (missionStatus && missionStatus.textContent === 'Not registered') {
      missionStatus.textContent = 'Active – Watchlist';
      missionStatus.style.color = '#00c8a0';
      missionStatus.style.fontStyle = 'normal';
      missionStatus.style.fontWeight = '600';
      btn.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M2 7l3 3 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        ADDED TO MISSION
      `;
      btn.style.background = 'rgba(0,200,160,0.1)';
    }
  });
}

// ── SIDEBAR ICONS ─────────────────────────────────────────────
function initSidebar() {
  document.querySelectorAll('.sidebar-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      document.querySelectorAll('.sidebar-icon').forEach(i => i.classList.remove('active'));
      icon.classList.add('active');
    });
  });
}

// ── MAIN TABS ─────────────────────────────────────────────────
function initMainTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// ── TOAST NOTIFICATION ────────────────────────────────────────
function showToast(message, type = 'success') {
  const existing = document.getElementById('toast-msg');
  if (existing) existing.remove();

  const colors = {
    success: { bg: 'rgba(0,200,160,0.12)', border: 'rgba(0,200,160,0.3)', text: '#00c8a0' },
    error:   { bg: 'rgba(255,77,99,0.12)', border: 'rgba(255,77,99,0.3)', text: '#ff4d63' },
    info:    { bg: 'rgba(77,166,255,0.12)', border: 'rgba(77,166,255,0.3)', text: '#4da6ff' },
  };
  const c = colors[type] || colors.info;

  const toast = document.createElement('div');
  toast.id = 'toast-msg';
  toast.style.cssText = `
    position: fixed; bottom: 28px; right: 28px; z-index: 9999;
    display: flex; align-items: center; gap: 10px;
    background: ${c.bg}; border: 1px solid ${c.border}; border-radius: 8px;
    padding: 12px 18px; color: ${c.text};
    font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 500;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    animation: toastIn 0.3s ease;
  `;

  const style = document.createElement('style');
  style.textContent = `
    @keyframes toastIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
    @keyframes toastOut { from { opacity:1; transform:translateY(0); } to { opacity:0; transform:translateY(12px); } }
  `;
  document.head.appendChild(style);

  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
      <path d="M5 8l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    ${message}
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ── RETRIEVAL DATE ────────────────────────────────────────────
function updateDate() {
  const el = document.getElementById('retrieval-date');
  if (!el) return;
  const now = new Date();
  const opts = { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
  el.textContent = now.toLocaleDateString('en-US', opts);
}

// ── SEARCH TYPE SELECT HANDLER ─────────────────────────────
function initSearchTypeSelect() {
  const select = document.getElementById('search-type-select');
  const input = document.getElementById('search-input');
  if (!select || !input) return;

  const placeholders = {
    name: 'Search name...',
    phone: 'Search phone number...',
    kk: 'Search KK number...'
  };
  const defaultValues = {
    name: 'Aimana Ilman Aulia',
    phone: '+6281297228579',
    kk: '3273092008106277'
  };

  select.addEventListener('change', (e) => {
    const val = e.target.value;
    input.placeholder = placeholders[val] || 'Search...';
    if (defaultValues[val]) {
      input.value = defaultValues[val];
    }
  });

  const searchBtn = document.getElementById('btn-search');
  if (searchBtn) {
    const doTopbarSearch = () => {
      if (select.value === 'kk') {
        window.location.href = 'index.html';
      } else {
        window.location.href = 'profile_aimana.html';
      }
    };
    searchBtn.addEventListener('click', doTopbarSearch);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') doTopbarSearch(); });
  }
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSubTabs();
  initMissionBtn();
  initSidebar();
  initMainTabs();
  updateDate();
  initSearchTypeSelect();
  if (typeof setupDynamicSearch === 'function') {
    setupDynamicSearch('.search-group', '#search-input', '#search-type-select', '#btn-search');
  }
});
