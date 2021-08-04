const navbarItems = document.getElementById('main-nav--items');
const button = document.getElementById('main-navbar--button');

const navbarLinks = document.getElementsByClassName('main-nav--link');

let navState = false;

function closeNavbar() {
  navbarItems.classList.add('hidden');
  navbarItems.classList.remove('block');
  navState = false;
}

function openNavbar() {
  navbarItems.classList.add('block');
  navbarItems.classList.remove('hidden');
  navState = true;
}

if (window.innerWidth < 769) {
  for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener('click', closeNavbar);
  }
}

button.addEventListener('click', () => {
  if (navState) {
    closeNavbar();
    return;
  }
  openNavbar();
  return;
});
