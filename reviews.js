// Renders reviews-data.js, topic filter, and click-to-load YouTube players.
(function () {
  var el = function (tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  var topic = 'All';

  function player(r) {
    var btn = el('button', 'video');
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Play review of ' + r.title);
    if (r.youtube) {
      btn.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + r.youtube + '/maxresdefault.jpg)';
    }
    var overlay = el('div', 'video-play');
    overlay.appendChild(el('span', null, '\u25b6'));
    btn.appendChild(overlay);
    btn.addEventListener('click', function () {
      if (!r.youtube) return;
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + r.youtube + '?autoplay=1&rel=0';
      f.title = r.title;
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture';
      f.allowFullscreen = true;
      btn.textContent = '';
      btn.style.cursor = 'default';
      btn.appendChild(f);
    }, { once: true });
    return btn;
  }

  function card(r) {
    var wrap = el('article', 'review');

    var head = el('div', 'review-head');
    var meta = el('div', 'pub-meta');
    meta.appendChild(el('span', 'venue', r.venue));
    meta.appendChild(el('span', 'year', String(r.year)));
    if (r.award) meta.appendChild(el('span', 'award', '\u00b7 ' + r.award));
    meta.appendChild(el('span', 'spacer'));
    if (r.length) meta.appendChild(el('span', 'length', r.length));
    head.appendChild(meta);
    head.appendChild(el('h3', 'pub-title', r.title));
    var authors = el('div', 'pub-authors');
    r.authors.forEach(function (a, i) {
      authors.appendChild(el('span', null, i < r.authors.length - 1 ? a + ',' : a));
    });
    head.appendChild(authors);
    wrap.appendChild(head);

    wrap.appendChild(player(r));

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
      items.length + (items.length === 1 ? ' recorded review' : ' recorded reviews');
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
