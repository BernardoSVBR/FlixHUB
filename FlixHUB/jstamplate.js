var scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 750) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}