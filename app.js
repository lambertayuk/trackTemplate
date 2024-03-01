document.addEventListener('DOMContentLoaded', ()=>{
   const SLIDETIME = 10000;
   const slides = [...document.querySelectorAll('.image-slider')];
   let i = 0;
     

   setInterval(() => {
    slides.forEach((slide,i) =>{
     slide.style.display="none";
    });

    if( i == slides.length) {
        i = 0; 
      }


    slides[i].style.display = "block";
    i++;
   },SLIDETIME);

   const activePage = window.location.pathname;
   const navLinks = [...document.querySelectorAll('ul#navMenu li a')];
      navLinks.forEach(link => {
        if(link.href.includes(`${activePage}`)){
          // console.log(`${activePage}`);
          link.classList.add('current');
        }
      });

});