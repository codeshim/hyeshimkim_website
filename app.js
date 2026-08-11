// Renders News + Publications from data.js and wires the Selected / All toggle.
(function () {
  var ME = 'Hyeshim Kim';
  var el = function (tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  var NEWS_LIMIT = 5;
  var newsExpanded = false;

  function renderNews() {
    var host = document.getElementById('news');
    host.textContent = '';
    var newsToShow = newsExpanded ? window.SITE.news : window.SITE.news.slice(0, NEWS_LIMIT);

    newsToShow.forEach(function (n, i) {
      var row = el('div', 'news-item');
      row.style.animationDelay = (i * 0.04) + 's';
      row.appendChild(el('span', 'news-date', n.date));
      var textSpan = el('span');
      textSpan.innerHTML = n.text;
      row.appendChild(textSpan);
      host.appendChild(row);
    });

    // Add More/Less button if there are more than NEWS_LIMIT items
    if (window.SITE.news.length > NEWS_LIMIT) {
      var btn = el('button', 'news-toggle', newsExpanded ? 'Show less' : 'More');
      btn.addEventListener('click', function () {
        newsExpanded = !newsExpanded;
        renderNews();
      });
      host.appendChild(btn);
    }
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
    // Add BibTeX button if bibtex exists
    if (p.bibtex) {
      var bibBtn = el('button', 'bib-btn', 'BibTeX');
      bibBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(p.bibtex).then(function () {
          bibBtn.textContent = 'Copied!';
          setTimeout(function () { bibBtn.textContent = 'BibTeX'; }, 1500);
        });
      });
      links.appendChild(bibBtn);
    }
    body.appendChild(links);

    wrap.appendChild(body);
    return wrap;
  }

  function renderPubs(mode) {
    var host = document.getElementById('pubs');
    host.textContent = '';
    var pubs = window.SITE.publications
      .filter(function (p) { return mode === 'all' || p.selected; });

    // Sort by 'order' property in Selected mode (lower number = higher priority)
    if (mode === 'selected') {
      pubs.sort(function (a, b) {
        return (a.order || 999) - (b.order || 999);
      });
    }

    pubs.forEach(function (p, i) {
        var c = card(p);
        c.style.animationDelay = (i * 0.06) + 's';
        host.appendChild(c);
      });

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
