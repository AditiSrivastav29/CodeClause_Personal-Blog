document.addEventListener('DOMContentLoaded', function() {
    
    function handleResponsiveLayout() {
      
      var windowWidth = window.innerWidth;
  
      
      if (windowWidth < 768) {
        
        var header = document.querySelector('header');
        header.style.height = '100px';
  
        
        var navMenu = document.querySelector('nav ul');
        navMenu.style.flexDirection = 'column';
        navMenu.style.justifyContent = 'center';
        navMenu.style.alignItems = 'center';
      } else {
        
        var header = document.querySelector('header');
        header.style.height = '65px';
  
        
        var navMenu = document.querySelector('nav ul');
        navMenu.style.flexDirection = 'row';
        navMenu.style.justifyContent = 'flex-end';
        navMenu.style.alignItems = 'center';
      }
    }
  
    handleResponsiveLayout();
  
    window.addEventListener('resize', handleResponsiveLayout);
  });
  