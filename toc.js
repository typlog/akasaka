(function () {
  const els = document.querySelectorAll('.e-content h2, .e-content h3');
  if (!els.length) {
    return
  }

  const items = [];
  els.forEach(function (el) {
    items.push('<li data-toc="' + el.id + '" data-level="' + el.tagName + '"><a href="#' + el.id + '">' + el.textContent + '</a></li>');
  });
  const tocHTML = '<div class="side_box"><div class="section-title">Table of contents</div><ul>' + items.join('') + '</ul></div>';
  document.querySelector('.side').innerHTML = tocHTML;
})();
