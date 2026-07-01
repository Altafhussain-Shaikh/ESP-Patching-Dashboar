const REPORTS = {
  os: {
    title: 'OS Patching',
    url: 'https://app.powerbi.com/groups/me/apps/f80c0f16-07c7-4751-a873-b4110472bff5/reports/4f056a09-d7b8-4287-855e-51d3c85c5866/748a3440c5f14d03f83c?experience=power-bi',
    isUpcoming: false
  },
  db: {
    title: 'DB Patching',
    url: 'https://app.powerbi.com/groups/me/apps/f80c0f16-07c7-4751-a873-b4110472bff5/reports/4f056a09-d7b8-4287-855e-51d3c85c5866/ecd9992ee78250a1d070?experience=power-bi',
    isUpcoming: false
  },
  mw: {
    title: 'Middleware Patching',
    url: '',
    isUpcoming: true
  },
  onprem: {
    title: 'OnPrem Patching',
    url: '',
    isUpcoming: true
  }
};

const home = document.getElementById('home');
const optionGrid = document.getElementById('optionGrid');
const viewer = document.getElementById('viewer');
const viewerTitle = document.getElementById('viewerTitle');
const reportFrame = document.getElementById('reportFrame');
const openExternal = document.getElementById('openExternal');
const upcomingNotice = document.getElementById('upcomingNotice');
const backHome = document.getElementById('backHome');
const options = optionGrid.querySelectorAll('.option');

function activateOption(targetKey) {
  const section = REPORTS[targetKey];
  if (!section) {
    return;
  }

  options.forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.target === targetKey);
  });

  home.classList.add('is-launched');
  viewer.hidden = false;
  viewerTitle.textContent = section.title;

  if (section.isUpcoming) {
    reportFrame.hidden = true;
    reportFrame.src = '';
    openExternal.hidden = true;
    upcomingNotice.hidden = false;
    return;
  }

  reportFrame.hidden = false;
  reportFrame.src = section.url;
  openExternal.hidden = false;
  openExternal.href = section.url;
  upcomingNotice.hidden = true;
}

options.forEach((btn) => {
  btn.addEventListener('click', () => {
    activateOption(btn.dataset.target);
  });
});

backHome.addEventListener('click', () => {
  home.classList.remove('is-launched');
  viewer.hidden = true;
  reportFrame.src = '';
  options.forEach((btn) => btn.classList.remove('is-active'));
});
