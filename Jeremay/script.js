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
});
