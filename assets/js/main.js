document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('nav-open');
    });
  }
});
