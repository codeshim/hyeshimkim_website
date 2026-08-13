// Renders reviews-data.js, topic filter, and click-to-load PDF viewers.
(function () {
  var el = function (tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  var topic = 'All';

  // The viewer starts as a compact button. On click, it expands to show the PDF.
  // Browsers without an inline PDF plugin fall back to the "Open in new tab" link.
  function viewer(r) {
    var wrap = el('div', 'slides-wrap');

    var cover = el('button', 'slides-cover');
    cover.type = 'button';
    cover.setAttribute('aria-label', 'Open slides for ' + r.title);
    cover.appendChild(el('span', null, 'View slides'));
    if (r.pages) cover.appendChild(el('small', null, r.pages));
    wrap.appendChild(cover);

    function showViewer() {
      if (!r.pdf) return;
      // Replace button with expanded viewer
      var frame = el('div', 'slides');
      var f = document.createElement('iframe');
      f.src = r.pdf + '#view=FitH&toolbar=1';
      f.title = 'Slides — ' + r.title;
      frame.appendChild(f);

      var bar = el('div', 'slides-bar');
      var open = el('a', null, 'Open in new tab \u2197');
      open.href = r.pdf; open.target = '_blank'; open.rel = 'noopener';
      var hide = el('button', 'slides-hide', 'Hide slides');
      hide.type = 'button';
      hide.addEventListener('click', showButton);
      bar.appendChild(open);
      bar.appendChild(el('span', null, '\u00b7'));
      bar.appendChild(hide);

      wrap.textContent = '';
      wrap.appendChild(frame);
      wrap.appendChild(bar);
    }

    function showButton() {
      wrap.textContent = '';
      var btn = el('button', 'slides-cover');
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Open slides for ' + r.title);
      btn.appendChild(el('span', null, 'View slides'));
      if (r.pages) btn.appendChild(el('small', null, r.pages));
      btn.addEventListener('click', showViewer);
      wrap.appendChild(btn);
    }

    cover.addEventListener('click', showViewer);

    return wrap;
  }

  function card(r) {
    var wrap = el('article', 'review');

    var head = el('div', 'review-head');
    var meta = el('div', 'pub-meta');
    meta.appendChild(el('span', 'venue', r.venue));
    meta.appendChild(el('span', 'year', String(r.year)));
    if (r.award) meta.appendChild(el('span', 'award', '\u00b7 ' + r.award));
    meta.appendChild(el('span', 'spacer'));
    if (r.pages) meta.appendChild(el('span', 'pages', r.pages));
    head.appendChild(meta);
    head.appendChild(el('h3', 'pub-title', r.title));
    var authors = el('div', 'pub-authors');
    r.authors.forEach(function (a, i) {
      authors.appendChild(el('span', null, i < r.authors.length - 1 ? a + ',' : a));
    });
    head.appendChild(authors);
    if (r.keywords && r.keywords.length) {
      var kw = el('div', 'keywords');
      r.keywords.forEach(function (k) {
        kw.appendChild(el('span', 'keyword', k));
      });
      head.appendChild(kw);
    }
    wrap.appendChild(head);

    wrap.appendChild(viewer(r));

    var foot = el('div', 'review-foot');
    foot.appendChild(el('span', 'review-date', 'Reviewed ' + r.date));
    foot.appendChild(el('span', 'spacer'));
    var links = el('div', 'pub-links');
    r.links.forEach(function (l) {
      var a = el('a', null, l[0]);
      a.href = l[1];
      links.appendChild(a);
    });
    foot.appendChild(links);
    wrap.appendChild(foot);

    return wrap;
  }

  // Parse date string like "Jun. 2026" to sortable value
  function parseDate(dateStr) {
    var months = { 'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
                   'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11 };
    var parts = dateStr.split('. ');
    var month = months[parts[0]] || 0;
    var year = parseInt(parts[1]) || 2000;
    return year * 12 + month;
  }

  function render() {
    var items = window.REVIEWS.items
      .filter(function (r) { return topic === 'All' || r.topic === topic; })
      .sort(function (a, b) { return parseDate(b.date) - parseDate(a.date); }); // Recent first
    var host = document.getElementById('reviews');
    host.textContent = '';
    items.forEach(function (r, i) {
      var c = card(r);
      c.style.animationDelay = (i * 0.06) + 's';
      host.appendChild(c);
    });
    document.getElementById('count').textContent =
      items.length + (items.length === 1 ? ' paper review' : ' paper reviews');
    document.querySelectorAll('#topics button').forEach(function (b) {
      b.setAttribute('aria-selected', String(b.dataset.topic === topic));
    });
  }

  var topics = document.getElementById('topics');
  window.REVIEWS.topics.forEach(function (t) {
    var b = el('button', null, t);
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.dataset.topic = t;
    b.addEventListener('click', function () { topic = t; render(); });
    topics.appendChild(b);
  });

  render();
})();
