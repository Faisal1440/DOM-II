// Your code goes here

// FIRST EVENT! BOX around LOGO IN HEADING : 


const logo = document.querySelector(".logo-heading");

logo.addEventListener('mouseover', (event) => {
    
    logo.style.border ="pink dotted 4px";
      event.stopPropagation();

  })