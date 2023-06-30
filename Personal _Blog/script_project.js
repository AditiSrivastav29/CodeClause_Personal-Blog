document.addEventListener('DOMContentLoaded', function() {

    var headerText = document.querySelector('header h1');
    headerText.textContent = 'Dynamic Portfolio Website';
  
    var projectContainer = document.querySelector('.project-container');
    var newProject = document.createElement('div');
    newProject.className = 'project';
    newProject.innerHTML = '<h4>Project 3</h4><hr><p>New Project</p>';
    projectContainer.appendChild(newProject);
  });
  