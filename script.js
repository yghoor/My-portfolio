function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

const projectModal1 = {
  imgLink: 'images/modal-image.jpg',
  imgAlt: 'Project Screenshot',
  projectTitle: 'Keeping track of hundreds of components',
  technologies: ['Codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry \'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
  liveLink: '#',
  sourceLink: '#',
};

const projectModal2 = {
  imgLink: 'images/modal-image.jpg',
  imgAlt: 'Project Screenshot',
  projectTitle: 'Keeping track of hundreds of components',
  technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
  projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry \'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
  liveLink: '#',
  sourceLink: '#',
};

const projectModal3 = {
  imgLink: 'images/modal-image.jpg',
  imgAlt: 'Project Screenshot',
  projectTitle: 'Keeping track of hundreds of components',
  technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
  projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry \'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
  liveLink: '#',
  sourceLink: '#',
};

const projectModal4 = {
  imgLink: 'images/modal-image.jpg',
  imgAlt: 'Project Screenshot',
  projectTitle: 'Keeping track of hundreds of components',
  technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
  projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry \'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
  liveLink: '#',
  sourceLink: '#',
};

const projectModal5 = {
  imgLink: 'images/modal-image.jpg',
  imgAlt: 'Project Screenshot',
  projectTitle: 'Keeping track of hundreds of components',
  technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
  projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry \'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
  liveLink: '#',
  sourceLink: '#',
};

const projectModal6 = {
  imgLink: 'images/modal-image.jpg',
  imgAlt: 'Project Screenshot',
  projectTitle: 'Keeping track of hundreds of components',
  technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
  projectDiscription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry \'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
  liveLink: '#',
  sourceLink: '#',
};

function createModal(projectModalObj) {
  const modal = document.createElement('div');
  modal.id = 'modal';

  document.body.prepend(modal);

  const closeBtn = document.createElement('button');
  closeBtn.className = 'closebtn';
  closeBtn.setAttribute('onclick', 'closeModal()');
  closeBtn.setAttribute('aria-hidden', 'true');
  closeBtn.textContent = 'X';
  modal.appendChild(closeBtn);

  const modalProjectImg = document.createElement('img');
  modalProjectImg.setAttribute('src', `${projectModalObj.imgLink}`);
  modalProjectImg.setAttribute('alt', `${projectModalObj.imgAlt}`);
  modalProjectImg.className = 'modal-project-img';
  modal.appendChild(modalProjectImg);

  const modalDesktopHeader = document.createElement('section');
  modalDesktopHeader.className = 'modal-desktop-header';

  const modalHeader = document.createElement('h2');
  modalHeader.className = 'modal-header';
  modalHeader.textContent = `${projectModalObj.projectTitle}`;
  modalDesktopHeader.appendChild(modalHeader);

  const modalLinksDesktop = document.createElement('div');
  modalLinksDesktop.className = 'modal-links-desktop';

  const modalButtonLive1 = document.createElement('a');
  modalButtonLive1.setAttribute('href', `${projectModalObj.liveLink}`);
  modalButtonLive1.className = 'modal-button';

  const seeLive = document.createElement('p');
  seeLive.textContent = 'See Live';
  modalButtonLive1.appendChild(seeLive);

  const seeLiveIcon = document.createElement('img');
  seeLiveIcon.setAttribute('src', 'images/icons/export-icon.svg');
  seeLiveIcon.setAttribute('alt', '');
  modalButtonLive1.appendChild(seeLiveIcon);

  modalLinksDesktop.appendChild(modalButtonLive1);

  const modalButtonSource1 = document.createElement('a');
  modalButtonSource1.setAttribute('href', `${projectModalObj.sourceLink}`);
  modalButtonSource1.className = 'modal-button';

  const seeSource = document.createElement('p');
  seeSource.textContent = 'See Source';
  modalButtonSource1.appendChild(seeSource);

  const seeSourceIcon = document.createElement('img');
  seeSourceIcon.setAttribute('src', 'images/icons/light-github-icon.svg');
  seeSourceIcon.setAttribute('alt', 'GitHub Icon');
  modalButtonSource1.appendChild(seeSourceIcon);

  modalLinksDesktop.appendChild(modalButtonSource1);

  modalDesktopHeader.appendChild(modalLinksDesktop);

  modal.appendChild(modalDesktopHeader);

  const tags = document.createElement('ul');
  tags.className = 'tags';
  for (let i = 0; i < projectModalObj.technologies.length; i += 1) {
    const tag = document.createElement('li');
    tag.className = 'tag';
    tag.textContent = `${projectModalObj.technologies[i]}`;
    tags.appendChild(tag);
  }

  modal.appendChild(tags);

  const modalText = document.createElement('p');
  modalText.className = 'modal-text';
  modalText.textContent = `${projectModalObj.projectDiscription}`;
  modal.appendChild(modalText);

  const modalLinksMobile = document.createElement('div');
  modalLinksMobile.className = 'modal-links-mobile';

  const modalButtonLive2 = modalButtonLive1.cloneNode(true);

  const modalButtonSource2 = modalButtonSource1.cloneNode(true);

  modalLinksMobile.appendChild(modalButtonLive2);

  modalLinksMobile.appendChild(modalButtonSource2);

  modal.appendChild(modalLinksMobile);
}
const allProjects = {
  project1: {
    projectImg: 'images/project-image.jpg',
    imgAlt: 'Project Screenshot',
    projectTitle: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    modalNum: '1',
  },

  project2: {
    projectImg: 'images/project-image.jpg',
    imgAlt: 'Project Screenshot',
    projectTitle: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    modalNum: '2',
  },

  project3: {
    projectImg: 'images/project-image.jpg',
    imgAlt: 'Project Screenshot',
    projectTitle: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    modalNum: '3',
  },

  project4: {
    projectImg: 'images/project-image.jpg',
    imgAlt: 'Project Screenshot',
    projectTitle: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    modalNum: '4',
  },

  project5: {
    projectImg: 'images/project-image.jpg',
    imgAlt: 'Project Screenshot',
    projectTitle: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    modalNum: '5',
  },

  project6: {
    projectImg: 'images/project-image.jpg',
    imgAlt: 'Project Screenshot',
    projectTitle: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    modalNum: '6',
  },
};

const projectsList = document.getElementById('project-list');

const projectsHeader = document.createElement('div');
projectsHeader.className = 'projects-header';

const headerText = document.createElement('h2');
headerText.className = 'header-text';
headerText.textContent = 'My Recent Works';
projectsHeader.appendChild(headerText);

const indicator = document.createElement('div');
indicator.className = 'indicator-icon';

const indicatorIcon = document.createElement('img');
indicatorIcon.setAttribute('src', 'images/icons/indicator-icon.svg');
indicatorIcon.setAttribute('alt', '');
indicator.appendChild(indicatorIcon);
projectsHeader.appendChild(indicator);

projectsList.appendChild(projectsHeader);

const projectsGrid = document.createElement('div');
projectsGrid.className = 'projects';

const projectsArray = Object.keys(allProjects);

projectsArray.forEach((project) => {
  const projectX = document.createElement('div');
  projectX.className = 'project';

  const projectImage = document.createElement('img');
  projectImage.setAttribute('src', `${allProjects[project].projectImg}`);
  projectImage.setAttribute('alt', `${allProjects[project].imgAlt}`);
  projectX.appendChild(projectImage);

  const title = document.createElement('h3');
  title.textContent = `${allProjects[project].projectTitle}`;
  projectX.appendChild(title);

  const tags = document.createElement('ul');
  tags.className = 'tags';

  for (let i = 0; i < allProjects[project].technologies.length; i += 1) {
    const tag = document.createElement('li');
    tag.className = 'tag';
    tag.textContent = `${allProjects[project].technologies[i]}`;
    tags.appendChild(tag);
  }
  projectX.appendChild(tags);

  const seeProject = document.createElement('button');
  seeProject.className = 'see-project button';
  seeProject.setAttribute('onclick', `openModal(projectModal${allProjects[project].modalNum})`);
  seeProject.textContent = 'See Project';
  projectX.appendChild(seeProject);

  projectsGrid.appendChild(projectX);
});

projectsList.appendChild(projectsGrid);