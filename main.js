// Click-to-play YouTube: loads the video only when someone presses play (keeps the site fast).
document.querySelectorAll('.yt').forEach(function (el) {
  el.addEventListener('click', function () {
    var id = el.getAttribute('data-id');
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
    iframe.title = el.getAttribute('aria-label') || 'Gameplay video';
    iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    el.innerHTML = '';
    el.appendChild(iframe);
  }, { once: true });
});

// Hide any screenshot you haven't added yet, so the page never shows a broken image.
document.querySelectorAll('img[data-optional]').forEach(function (img) {
  function hide() { var box = img.closest('figure') || img; box.remove(); }
  if (img.complete && img.naturalWidth === 0) hide();
  img.addEventListener('error', hide);
});

// Current year in the footer.
document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
