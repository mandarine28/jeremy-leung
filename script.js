document.addEventListener('DOMContentLoaded', function () {
  const calendlyButtons = document.querySelectorAll('.calendly-btn');

  calendlyButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      Calendly.initPopupWidget({
        url: 'https://calendly.com/votre-lien', // REMPLACER 'votre-lien' PAR VOTRE IDENTIFIANT CALENDLY
      });
      return false;
    });
  });

  // Burger Menu Logic
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.nav-menu');

  if (burgerMenu && navMenu) {
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
});
