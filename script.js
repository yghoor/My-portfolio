/* eslint-disable no-unused-vars */

// Initialize form inputs object for local storage

const formInputs = {
  userName: '',
  emailInput: '',
  message: '',
};

// Create functions for mobile nav functionality

function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

// Initialize projects array

const allProjects = [
  {
    projectImg: 'images/project-image.png',
    modalImg: 'images/modal-image.jpg',
    imgAlt: 'Project Screenshot',
    projectTitle: 'Multi-Post Stories Gain+Glory',
    technologies: ['Codekit', 'GitHub', 'JS', 'HTML', 'Bootstrap', 'Terminal', 'Codepen'],
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    liveLink: '#',
    sourceLink: '#',
  },

  {
    projectImg: 'images/project-image.png',
    modalImg: 'images/modal-image.jpg',
    imgAlt: 'Project Screenshot',
    projectTitle: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JS', 'HTML'],
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    liveLink: '#',
    sourceLink: '#',
  },

  {
    projectImg: 'images/project-image.png',
    modalImg: 'images/modal-image.jpg',
    imgAlt: 'Project Screenshot',
    projectTitle: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JS', 'HTML', 'React'],
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    liveLink: '#',
    sourceLink: '#',
  },

  {
    projectImg: 'images/project-image.png',
    modalImg: 'images/modal-image.jpg',
    imgAlt: 'Project Screenshot',
    projectTitle: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JS', 'HTML'],
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    liveLink: '#',
    sourceLink: '#',
  },

  {
    projectImg: 'images/project-image.png',
    modalImg: 'images/modal-image.jpg',
    imgAlt: 'Project Screenshot',
    projectTitle: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JS', 'HTML'],
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    liveLink: '#',
    sourceLink: '#',
  },

  {
    projectImg: 'images/project-image.png',
    modalImg: 'images/modal-image.jpg',
    imgAlt: 'Project Screenshot',
    projectTitle: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JS', 'HTML'],
    modalDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    liveLink: '#',
    sourceLink: '#',
  },
];

// Create projects on page

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

allProjects.forEach((project, projectNum) => {
  const projectX = document.createElement('div');
  projectX.className = 'project';

  const projectImage = document.createElement('img');
  projectImage.setAttribute('src', `${project.projectImg}`);
  projectImage.setAttribute('alt', `${project.imgAlt}`);
  projectX.appendChild(projectImage);

  const title = document.createElement('h3');
  title.textContent = `${project.projectTitle}`;
  projectX.appendChild(title);

  const tags = document.createElement('ul');
  tags.className = 'tags';

  for (let i = 0; i < 4; i += 1) {
    const tag = document.createElement('li');
    tag.className = 'tag';
    tag.textContent = `${project.technologies[i]}`;
    tags.appendChild(tag);
  }
  projectX.appendChild(tags);

  const seeProject = document.createElement('button');
  seeProject.className = 'see-project button';
  seeProject.setAttribute('onclick', `openModal(${projectNum})`);
  seeProject.textContent = 'See Project';
  projectX.appendChild(seeProject);

  projectsGrid.appendChild(projectX);
});

projectsList.appendChild(projectsGrid);

// Validate contact form email address

const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const errorMsg = document.querySelector('.error-msg');

const emailValidity = /^[a-z0-9@.]+$/;

form.addEventListener('submit', (event) => {
  if (!emailValidity.test(emailInput.value)) {
    event.preventDefault();
    errorMsg.textContent = 'Your email address needs to be in lower case';
  }
});

// Create modal function

function createModal(projectNum) {
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
  modalProjectImg.setAttribute('src', `${allProjects[projectNum].modalImg}`);
  modalProjectImg.setAttribute('alt', `${allProjects[projectNum].imgAlt}`);
  modalProjectImg.className = 'modal-project-img';
  modal.appendChild(modalProjectImg);

  const modalDesktopHeader = document.createElement('section');
  modalDesktopHeader.className = 'modal-desktop-header';

  const modalHeader = document.createElement('h2');
  modalHeader.className = 'modal-header';
  modalHeader.textContent = `${allProjects[projectNum].projectTitle}`;
  modalDesktopHeader.appendChild(modalHeader);

  const modalLinksDesktop = document.createElement('div');
  modalLinksDesktop.className = 'modal-links-desktop';

  const modalButtonLive1 = document.createElement('a');
  modalButtonLive1.setAttribute('href', `${allProjects[projectNum].liveLink}`);
  modalButtonLive1.className = 'modal-button';

  const seeLive = document.createElement('p');
  seeLive.textContent = 'See Live';
  modalButtonLive1.appendChild(seeLive);

  const seeLiveIcon = document.createElement('img');
  seeLiveIcon.setAttribute('src', 'images/icons/export-icon.svg');
  seeLiveIcon.setAttribute('alt', '');
  modalButtonLive1.appendChild(seeLiveIcon);

  const modalButtonSource1 = document.createElement('a');
  modalButtonSource1.setAttribute('href', `${allProjects[projectNum].sourceLink}`);
  modalButtonSource1.className = 'modal-button';

  const seeSource = document.createElement('p');
  seeSource.textContent = 'See Source';
  modalButtonSource1.appendChild(seeSource);

  const seeSourceIcon = document.createElement('img');
  seeSourceIcon.setAttribute('src', 'images/icons/light-github-icon.svg');
  seeSourceIcon.setAttribute('alt', 'GitHub Icon');
  modalButtonSource1.appendChild(seeSourceIcon);

  modalLinksDesktop.append(modalButtonSource1, modalButtonLive1);

  modalDesktopHeader.appendChild(modalLinksDesktop);

  modal.appendChild(modalDesktopHeader);

  const tags = document.createElement('ul');
  tags.className = 'tags';
  for (let i = 0; i < allProjects[projectNum].technologies.length; i += 1) {
    const tag = document.createElement('li');
    tag.className = 'tag';
    tag.textContent = `${allProjects[projectNum].technologies[i]}`;
    tags.appendChild(tag);
  }

  modal.appendChild(tags);

  const modalText = document.createElement('p');
  modalText.className = 'modal-text';
  modalText.textContent = `${allProjects[projectNum].modalDescription}`;
  modal.appendChild(modalText);

  const modalLinksMobile = document.createElement('div');
  modalLinksMobile.className = 'modal-links-mobile';

  const modalButtonLive2 = modalButtonLive1.cloneNode(true);

  const modalButtonSource2 = modalButtonSource1.cloneNode(true);

  modalLinksMobile.append(modalButtonSource2, modalButtonLive2);

  modal.appendChild(modalLinksMobile);
}

function openModal(projectNum) {
  createModal(projectNum);
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('main-page').style.filter = 'blur(10px)';

  const pageBody = document.body;
  pageBody.style.height = '100vh';
  pageBody.style.overflowY = 'hidden';
}

function closeModal() {
  document.getElementById('main-page').style.filter = 'none';
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  modal.remove();

  const pageBody = document.body;
  pageBody.style.height = '';
  pageBody.style.overflowY = '';
}

// Implement local storage

const userName = document.getElementById('user-name');
const message = document.getElementById('message');

function populateStorage() {
  formInputs.userName = userName.value;
  formInputs.emailInput = emailInput.value;
  formInputs.message = message.value;
  localStorage.setItem('form', JSON.stringify(formInputs));
}

function populateForm() {
  const storedForm = JSON.parse(localStorage.getItem('form'));
  userName.value = storedForm.userName;
  emailInput.value = storedForm.emailInput;
  message.value = storedForm.message;
}

if (!localStorage.getItem('form')) {
  populateStorage();
} else {
  populateForm();
}

userName.addEventListener('input', (event) => {
  populateStorage();
});

emailInput.addEventListener('input', (event) => {
  populateStorage();
});

message.addEventListener('input', (event) => {
  populateStorage();
});
