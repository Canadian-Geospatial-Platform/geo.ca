(function () {
  cgpFixThemeIcons();
})();

function cgpFixThemeIcons() {
  var currentURLPath = window.location.pathname;

  // Add focus style to hero banner theme icons for accessibiity
  document.querySelectorAll('.cgp-col-page-hero-banner-themes .elementor-icon').forEach((link) => {
    link.addEventListener('focus', () => link.closest('.elementor-widget-container').classList.toggle('focus-dotted'));
    link.addEventListener('blur', () => link.closest('.elementor-widget-container').classList.toggle('focus-dotted'));
    if (link.href.includes(currentURLPath)) {
      link.classList.add('current-page');
    }
  });
}
