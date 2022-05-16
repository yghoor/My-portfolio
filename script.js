function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.height = '0%';
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