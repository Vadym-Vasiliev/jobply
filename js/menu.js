const menuBtn = document.querySelector('[data-menu-button]');
const menuBox = document.querySelector('[data-menu]');

menuBtn.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
  menuBtn.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', !expanded);

  menuBox.classList.toggle('is-open');
  document.body.classList.toggle('menu-open');
});
