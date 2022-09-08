(function(){
  const burger = document?.querySelector('.burger');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');
    overlay?.classList.toggle('overlay--active');
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Open menu');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    overlay.classList.remove('overlay--active');

  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Open menu');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');

    });
  });
})();
