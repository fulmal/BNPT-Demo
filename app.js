// ============================================================
//  Intelligence Platform – Family Card Viewer
// ============================================================

const KK_PHONE_DATA = {
  kkNumber: '3175060703160026',
  members: '3 Registered',
  subtitle: 'NATIONAL CIVIL REGISTRY',
  persons: [
    {
      id: 'regan',
      name: 'REGAN OKTORIANSYAH',
      nik: '3175061010131012',
      gender: 'Laki-laki',
      dob: 'JAKARTA, Thu, 10 Oct 2013 00:00:00 GMT',
      religion: 'Islam',
      education: 'Tdk/blm sekolah',
      occupation: 'Belum/Tidak Bekerja',
      maritalStatus: 'Belum Menikah',
      address: 'Penggilingan, Cakung, KOTA ADM. JAKARTA TIMUR, DKI JAKARTA',
      father: 'ARRY ADHARIANSYAH',
      mother: 'AYUNDA NURIFITRIASA',
      phones: [],
      image: null
    },
    {
      id: 'raisa',
      name: 'RAISA MARSYA WULANDARI',
      nik: '3175064905900009',
      gender: 'Perempuan',
      dob: 'JAKARTA, Wed, 09 May 1990 00:00:00 GMT',
      religion: 'Islam',
      education: 'Diploma IV/Strata I/Strata II',
      occupation: 'Wiraswasta',
      maritalStatus: 'Belum Menikah',
      address: 'Penggilingan, Cakung, KOTA ADM. JAKARTA TIMUR, DKI JAKARTA',
      father: 'M RONALD SIAHAAN',
      mother: 'AYU INDRA WAHYUNI',
      phones: [
        { number: '6281293949502', carrier: 'Telkomsel' },
        { number: '6281297229579', carrier: 'Telkomsel' }
      ],
      image: null
    },
    {
      id: 'ayu_indra',
      name: 'AYU INDRA WAHYUNI',
      nik: '3175065509610012',
      gender: 'Perempuan',
      dob: 'JAKARTA, Fri, 15 Sep 1961 00:00:00 GMT',
      religion: 'Islam',
      education: 'Diploma IV/Strata I/Strata II',
      occupation: 'Karyawan BUMN',
      maritalStatus: 'Menikah',
      address: 'Penggilingan, Cakung, KOTA ADM. JAKARTA TIMUR, DKI JAKARTA',
      father: 'ACHMAD SYAHREAL',
      mother: 'AYU MIMI ELMINI',
      phones: [],
      image: 'images/ayu_indra.png'
    }
  ]
};

const KK_ISMAIL_DATA = {
  kkNumber: '3273092008106277',
  members: '8',
  subtitle: 'NATIONAL CIVIL REGISTRY',
  persons: [
    {
      id: 'ainaya',
      name: 'AINAYA IRHAM ADIYATAMA',
      nik: '3273091107980001',
      gender: 'Perempuan',
      dob: 'BANDUNG, Sun, 11 Jul 1998 00:00:00 GMT',
      religion: 'Islam',
      education: 'Pelajar/Mahasiswa',
      occupation: 'Pelajar/Mahasiswa',
      maritalStatus: 'Belum Kawin',
      parents: 'F: ISMAIL / M: ILMA NUGRAHANI',
      address: 'Taman Sari, Bandung Wetan, KOTA BANDUNG, JAWA BARAT',
      phones: [{ number: '6281231234595', carrier: 'Telkomsel' }],
      image: 'images/ainaya.png'
    },
    {
      id: 'ismail',
      name: 'ISMAIL',
      nik: '3273091008690003',
      gender: 'Laki-laki',
      dob: 'MAKASSAR, Sun, 10 Aug 1969 00:00:00 GMT',
      religion: 'Islam',
      education: 'Diploma IV/Strata I/Strata II',
      occupation: 'Pegawai Negeri Sipil (PNS)',
      maritalStatus: 'Menikah',
      parents: 'F: ACHMAD NOOR / M: SITI NURBAITI',
      address: 'Taman Sari, Bandung Wetan, KOTA BANDUNG, JAWA BARAT',
      phones: [{ number: '6281312124595', carrier: 'Telkomsel' }],
      image: 'images/ismail.jpg'
    },
    {
      id: 'aimana',
      name: 'AIMANA ILMAN AULIA',
      nik: '3273092510920002',
      gender: 'Laki-laki',
      dob: 'BANDUNG, Sun, 25 Oct 1992 00:00:00 GMT',
      religion: 'Islam',
      education: 'Diploma IV/Strata I/Strata II',
      occupation: 'Pegawai Swasta',
      maritalStatus: 'Menikah',
      parents: 'F: ISMAIL / M: ILMA NUGRAHANI',
      address: 'Taman Sari, Bandung Wetan, KOTA BANDUNG, JAWA BARAT',
      phones: [
        { number: '6287781085549', carrier: 'XL Axiata' },
        { number: '6287781085557', carrier: 'XL Axiata' }
      ],
      image: 'images/aimana.png',
      highlighted: true
    },
    {
      id: 'fakhrisya',
      name: 'FAKHRISYA AYUTIA ZAHRA',
      nik: '3273094403020001',
      gender: 'Perempuan',
      dob: 'BANDUNG, Mon, 04 Mar 2002 00:00:00 GMT',
      religion: 'Islam',
      education: 'Pelajar/Mahasiswa',
      occupation: 'Pelajar/Mahasiswa',
      maritalStatus: 'Belum Kawin',
      parents: 'F: ISMAIL / M: ILMA NUGRAHANI',
      address: 'Taman Sari, Bandung Wetan, KOTA BANDUNG, JAWA BARAT',
      phones: [{ number: '6285712398212', carrier: 'Indosat' }],
      image: 'images/fakhrisya.png'
    },
    {
      id: 'ilma',
      name: 'ILMA NUGRAHANI',
      nik: '3273095104690004',
      gender: 'Perempuan',
      dob: 'SEMARANG, Sat, 11 Apr 1969 00:00:00 GMT',
      religion: 'Islam',
      education: 'Diploma IV/Strata I/Strata II',
      occupation: 'Ibu Rumah Tangga',
      maritalStatus: 'Menikah',
      parents: 'F: SOEPARMAN / M: SITI AMINAH',
      address: 'Taman Sari, Bandung Wetan, KOTA BANDUNG, JAWA BARAT',
      phones: [{ number: '6281298412841', carrier: 'Telkomsel' }],
      image: 'images/ilma.png'
    },
    {
      id: 'amila',
      name: 'AMILA SAFIRA ARAFANI',
      nik: '3273095608020001',
      gender: 'Perempuan',
      dob: 'BANDUNG, Fri, 16 Aug 2002 00:00:00 GMT',
      religion: 'Islam',
      education: 'Pelajar/Mahasiswa',
      occupation: 'Pelajar/Mahasiswa',
      maritalStatus: 'Belum Kawin',
      parents: 'F: ISMAIL / M: ILMA NUGRAHANI',
      address: 'Taman Sari, Bandung Wetan, KOTA BANDUNG, JAWA BARAT',
      phones: [],
      image: 'images/amila.png'
    }
  ]
};

// Select dataset based on search input
function getActiveKKData() {
  const searchInput = document.getElementById('search-input');
  const searchSelect = document.getElementById('search-type-select');

  const val = (searchInput ? searchInput.value : '').toLowerCase();
  const type = searchSelect ? searchSelect.value : 'phone';

  if (val.includes('ismail') || val.includes('3273092008106277') || val.includes('aimana') || val.includes('ainaya') || val.includes('fakhrisya') || val.includes('ilma') || val.includes('amila')) {
    return KK_ISMAIL_DATA;
  }
  return KK_PHONE_DATA;
}

// Build card HTML
function buildCard(person) {
  const isFemale = person.gender === 'Perempuan';
  const badgeStyle = isFemale
    ? 'background:rgba(168,85,247,0.15); color:#c084fc; border:1px solid rgba(168,85,247,0.3);'
    : 'background:rgba(0,200,160,0.15); color:#00c8a0; border:1px solid rgba(0,200,160,0.3);';

  const avatarHTML = person.image
    ? `<img src="${person.image}" alt="${person.name}" style="width:42px;height:42px;object-fit:cover;border-radius:50%;border:1px solid rgba(255,255,255,0.15);" />`
    : `<div style="width:42px;height:42px;border-radius:50%;background:#242b3d;display:flex;align-items:center;justify-content:center;color:#8b93a8;flex-shrink:0;">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
       </div>`;

  let phonesHTML = '';
  if (person.phones && person.phones.length > 0) {
    phonesHTML = `
      <div style="margin-top: 12px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.06);">
        <div style="font-size: 9.5px; font-weight: 700; color: var(--text-muted); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 6px;">
          DISCOVERED PHONES
        </div>
        <div style="display:flex; flex-direction:column; gap:4px;">
          ${person.phones.map(p => `
            <div style="display:flex; align-items:center; gap:8px; font-family:var(--mono); font-size:12px;">
              <span style="color:var(--text-primary); font-weight:700;">${p.number}</span>
              <span style="font-size:10px; font-family:var(--font); color:var(--text-muted); background:rgba(255,255,255,0.05); padding:1px 6px; border-radius:3px; border:1px solid rgba(255,255,255,0.08);">${p.carrier}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else {
    phonesHTML = `
      <div style="margin-top: 12px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.06);">
        <div style="font-size: 9.5px; font-weight: 700; color: var(--text-muted); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 4px;">
          DISCOVERED PHONES
        </div>
        <div style="font-size: 11.5px; color: var(--text-muted);">No phones detected</div>
      </div>
    `;
  }

  return `
    <div class="member-card" id="card-${person.id}" data-id="${person.id}">
      <div class="card-header" style="display:flex; align-items:flex-start; gap:12px; padding-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.06);">
        ${avatarHTML}
        <div class="card-id-info" style="overflow:hidden; flex:1;">
          <div class="card-name" style="font-size:13.5px; font-weight:700; color:var(--text-primary); text-overflow:ellipsis; overflow:hidden; white-space:nowrap;" title="${person.name}">${person.name}</div>
          <div class="card-nik" style="font-size:11px; font-family:var(--mono); color:var(--text-muted); margin-top:2px;">
            ${person.nik}
          </div>
          <div style="margin-top:4px;">
            <span style="display:inline-flex; align-items:center; padding:2px 8px; border-radius:20px; font-size:10px; font-weight:600; ${badgeStyle}">
              ${person.gender}
            </span>
          </div>
        </div>
      </div>

      <div class="card-fields" style="display:grid; grid-template-columns:1fr 1fr; gap:8px 12px; margin-top:12px;">
        <div class="field-item">
          <div class="field-label">DATE OF BIRTH</div>
          <div class="field-value">${person.dob}</div>
        </div>
        <div class="field-item">
          <div class="field-label">RELIGION</div>
          <div class="field-value">${person.religion}</div>
        </div>
        <div class="field-item">
          <div class="field-label">EDUCATION</div>
          <div class="field-value">${person.education}</div>
        </div>
        <div class="field-item">
          <div class="field-label">OCCUPATION</div>
          <div class="field-value">${person.occupation}</div>
        </div>
        <div class="field-item">
          <div class="field-label">MARITAL STATUS</div>
          <div class="field-value">${person.maritalStatus}</div>
        </div>
        <div class="field-item">
          <div class="field-label">PARENTS</div>
          <div class="field-value">${person.parents || 'F: ISMAIL / M: ILMA NUGRAHANI'}</div>
        </div>
        <div class="field-item" style="grid-column: 1 / -1;">
          <div class="field-label">ADDRESS</div>
          <div class="field-value">${person.address}</div>
        </div>
      </div>

      ${phonesHTML}

      <div class="card-footer" style="margin-top:auto; padding-top:12px; display:flex; align-items:center; justify-content:space-between;">
        <button class="btn-view-ktp" data-id="${person.id}" style="display:inline-flex; align-items:center; gap:6px; background:none; border:none; color:var(--accent); font-size:11.5px; font-weight:600; cursor:pointer; padding:0;">
          View Full KTP
        </button>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="color:var(--accent);">
          <path d="M4.5 2.5L8 6l-3.5 3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  `;
}

// Render grid
function renderGrid() {
  const data = getActiveKKData();
  const grid = document.getElementById('members-grid');

  const kkNumEl = document.getElementById('kk-number');
  const kkMemEl = document.getElementById('kk-members');
  const kkSubEl = document.getElementById('kk-subtitle');

  if (kkNumEl) kkNumEl.textContent = data.kkNumber;
  if (kkMemEl) kkMemEl.textContent = data.members;
  if (kkSubEl) kkSubEl.textContent = data.subtitle || 'NATIONAL CIVIL REGISTRY';

  if (grid) {
    grid.innerHTML = data.persons.map(p => buildCard(p)).join('');

    // KTP Button Listeners
    grid.querySelectorAll('.btn-view-ktp').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        showKTPModal(id, data);
      });
    });
  }
}

// Modal KTP Viewer
function showKTPModal(id, data) {
  const currentData = data || getActiveKKData();
  const person = currentData.persons.find(p => p.id === id);
  if (!person) return;

  document.getElementById('ktp-modal')?.remove();

  const overlay = document.createElement('div');
  overlay.id = 'ktp-modal';
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 999;
    background: rgba(0,0,0,0.75); backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    animation: fadeIn 0.2s ease;
  `;

  const avatarContent = person.image
    ? `<img src="${person.image}" alt="${person.name}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;" />`
    : `<div style="width:100%;height:100%;background:#242b3d;display:flex;align-items:center;justify-content:center;color:#8b93a8;">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
       </div>`;

  overlay.innerHTML = `
    <style>
      @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
      @keyframes slideUp { from { transform:translateY(20px); opacity:0; } to { transform:translateY(0); opacity:1; } }
    </style>
    <div style="
      background: #1e2330;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 14px;
      width: 520px;
      max-width: 95vw;
      max-height: 90vh;
      overflow-y: auto;
      animation: slideUp 0.25s ease;
      position: relative;
    ">
      <div style="background:linear-gradient(135deg,#0d1a2e,#1a2440); padding:20px 20px 16px; border-radius:14px 14px 0 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 14px;">
          <div style="font-size:10px; font-weight:700; letter-spacing:0.12em; color:var(--accent); text-transform:uppercase;">
            KARTU TANDA PENDUDUK (KTP)
          </div>
          <button id="modal-close" style="background:none;border:none;color:#8b93a8;cursor:pointer;font-size:20px;line-height:1;padding:2px 6px;" title="Close">&times;</button>
        </div>
        <div style="display:flex; align-items:center; gap:14px;">
          <div style="width:68px;height:84px;border-radius:6px;overflow:hidden;flex-shrink:0;border:1px solid rgba(255,255,255,0.15);">
            ${avatarContent}
          </div>
          <div>
            <div style="font-size:16px;font-weight:800;color:#e4e8f0;margin-bottom:4px;">${person.name}</div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#8b93a8;letter-spacing:0.06em;margin-bottom:6px;">NIK: ${person.nik}</div>
            <span style="display:inline-flex;align-items:center;padding:2px 10px;border-radius:20px;font-size:10.5px;font-weight:600;background:rgba(0,200,160,0.15);color:var(--accent);border:1px solid rgba(0,200,160,0.3);">${person.gender}</span>
          </div>
        </div>
      </div>

      <div style="padding:18px 20px;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px 20px;">
          <div>
            <div style="font-size:9.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5a6278;margin-bottom:3px;">Tanggal Lahir</div>
            <div style="font-size:12px;color:#adb5c8;line-height:1.4;">${person.dob}</div>
          </div>
          <div>
            <div style="font-size:9.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5a6278;margin-bottom:3px;">Agama</div>
            <div style="font-size:12px;color:#adb5c8;line-height:1.4;">${person.religion}</div>
          </div>
          <div>
            <div style="font-size:9.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5a6278;margin-bottom:3px;">Pendidikan</div>
            <div style="font-size:12px;color:#adb5c8;line-height:1.4;">${person.education}</div>
          </div>
          <div>
            <div style="font-size:9.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5a6278;margin-bottom:3px;">Pekerjaan</div>
            <div style="font-size:12px;color:#adb5c8;line-height:1.4;">${person.occupation}</div>
          </div>
          <div>
            <div style="font-size:9.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5a6278;margin-bottom:3px;">Status Perkawinan</div>
            <div style="font-size:12px;color:#adb5c8;line-height:1.4;">${person.maritalStatus}</div>
          </div>
          ${person.father ? `
            <div>
              <div style="font-size:9.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5a6278;margin-bottom:3px;">Ayah</div>
              <div style="font-size:12px;color:#adb5c8;line-height:1.4;">${person.father}</div>
            </div>
            <div>
              <div style="font-size:9.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5a6278;margin-bottom:3px;">Ibu</div>
              <div style="font-size:12px;color:#adb5c8;line-height:1.4;">${person.mother}</div>
            </div>
          ` : ''}
        </div>

        <div style="margin-top:14px;">
          <div style="font-size:9.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5a6278;margin-bottom:3px;">Alamat</div>
          <div style="font-size:12px;color:#adb5c8;line-height:1.4;">${person.address}</div>
        </div>

        ${(person.phones && person.phones.length > 0) ? `
          <div style="margin-top:16px; padding-top:14px; border-top:1px solid rgba(255,255,255,0.07);">
            <div style="font-size:9.5px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--accent);margin-bottom:8px;">Discovered Phones (${person.phones.length})</div>
            ${person.phones.map(p => `
              <div style="display:flex; justify-content:space-between; align-items:center; font-family:var(--mono); font-size:12px; margin-bottom:4px;">
                <span style="color:var(--accent);">${p.number}</span>
                <span style="color:var(--text-muted); font-size:11px; font-family:var(--font);">${p.carrier}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <div style="padding:12px 20px;border-top:1px solid rgba(255,255,255,0.07);display:flex;justify-content:flex-end;gap:8px;">
        <button id="modal-close-btn" style="background:none;border:1px solid rgba(255,255,255,0.12);color:#8b93a8;font-family:'Inter',sans-serif;font-size:12px;padding:6px 16px;border-radius:6px;cursor:pointer;">Close</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
  overlay.querySelector('#modal-close')?.addEventListener('click', () => overlay.remove());
  overlay.querySelector('#modal-close-btn')?.addEventListener('click', () => overlay.remove());
}

// Init logic
document.addEventListener('DOMContentLoaded', () => {
  renderGrid();

  const searchBtn = document.getElementById('btn-search');
  const searchInput = document.getElementById('search-input');
  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      renderGrid();
    });
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') renderGrid();
    });
  }

  if (typeof setupDynamicSearch === 'function') {
    setupDynamicSearch('.search-group', '#search-input', '#search-type-select', '#btn-search');
  }
});
