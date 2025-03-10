document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down - hide header
        header.classList.add('hidden');
      } else {
        // Scrolling up - show header
        header.classList.remove('hidden');
      }
      lastScrollY = window.scrollY;
    });
  });
