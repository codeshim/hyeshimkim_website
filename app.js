// Renders News + Publications from data.js and wires the Selected / All toggle.
(function () {
  var ME = 'Hyeshim Kim';
  var el = function (tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  function renderNews() {
    var host = document.getElementById('news');
    host.textContent = '';
    window.SITE.news.forEach(function (n) {
      var row = el('div', 'news-item');
      row.appendChild(el('span', 'news-date', n.date));
      row.appendChild(el('span', null, n.text));
      host.appendChild(row);
    });
  }

  function thumb(p) {
    if (p.thumb) {
      var img = el('img', 'pub-thumb');
      img.src = p.thumb;
      img.alt = p.title + ' teaser';
      return img;
    }
    var ph = el('div', 'pub-thumb pub-thumb--placeholder');
    ph.appendChild(el('span', null, 'teaser 16:10'));
    return ph;
  }

  function card(p) {
    var wrap = el('article', 'pub');
    wrap.appendChild(thumb(p));

    var body = el('div', 'pub-body');
    body.appendChild(el('h3', 'pub-title', p.title));

    var authors = el('div', 'pub-authors');
    p.authors.forEach(function (a, i) {
      var isMe = a.replace(/\*$/, '') === ME;
      var s = el('span', isMe ? 'me' : null, i < p.authors.length - 1 ? a + ',' : a);
      authors.appendChild(s);
    });
    body.appendChild(authors);

    var meta = el('div', 'pub-meta');
    meta.appendChild(el('span', 'venue', p.venue));
    meta.appendChild(el('span', 'year', String(p.year)));
    if (p.award) meta.appendChild(el('span', 'award', '\u00b7 ' + p.award));
    body.appendChild(meta);

    body.appendChild(el('p', 'pub-desc', p.desc));

    var links = el('div', 'pub-links');
    p.links.forEach(function (l) {
      var a = el('a', null, l[0]);
      a.href = l[1];
      links.appendChild(a);
    });
    body.appendChild(links);

    wrap.appendChild(body);
    return wrap;
  }

  function renderPubs(mode) {
    var host = document.getElementById('pubs');
    host.textContent = '';
    window.SITE.publications
      .filter(function (p) { return mode === 'all' || p.selected; })
      .forEach(function (p) { host.appendChild(card(p)); });

    document.querySelectorAll('.toggle button').forEach(function (b) {
      b.setAttribute('aria-selected', String(b.dataset.mode === mode));
    });
    history.replaceState(null, '', mode === 'all' ? '#all' : '#selected');
  }

  document.querySelectorAll('.toggle button').forEach(function (b) {
    b.addEventListener('click', function () { renderPubs(b.dataset.mode); });
  });

  renderNews();
  renderPubs(location.hash === '#all' ? 'all' : 'selected');
})();
