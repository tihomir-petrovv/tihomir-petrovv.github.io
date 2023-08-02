const nav = document.getElementById('navigation');
const navOffset = nav.offsetTop;
function handleScroll() {
  if (window.scrollY >= navOffset) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}
window.addEventListener('scroll', handleScroll);