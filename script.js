const REPORTS = {
  os: {
    title: 'OS Patching',
    url: 'https://app.powerbi.com/reportEmbed?reportId=4f056a09-d7b8-4287-855e-51d3c85c5866&pageName=748a3440c5f14d03f83c&autoAuth=true&ctid=8ac76c91-e7f1-41ff-a89c-3553b2da2c17',
    isUpcoming: false
  },
  db: {
    title: 'DB Patching',
    url: 'https://app.powerbi.com/reportEmbed?reportId=4f056a09-d7b8-4287-855e-51d3c85c5866&pageName=ecd9992ee78250a1d070&autoAuth=true&ctid=8ac76c91-e7f1-41ff-a89c-3553b2da2c17',
    isUpcoming: false
  },
  mw: {
    title: 'Middleware Patching',
    url: '',
    isUpcoming: true
  },
  onprem: {
    title: 'OnPrem Patching',
    url: 'https://app.powerbi.com/reportEmbed?reportId=addc07f0-7de7-4f10-9cae-2bf1f2bb3359&groupId=c623c66e-42ab-4f26-b309-507acf733cb8&autoAuth=true&ctid=8ac76c91-e7f1-41ff-a89c-3553b2da2c17',
    isUpcoming: false
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
