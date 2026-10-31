// Shared case-study behaviour: dot grids, swipe dots, reveals, chapter nav.
// Dot grids: one <i> per step; the first data-on are filled.
document.querySelectorAll('[data-dots]').forEach(el => {
  const n = +el.dataset.dots, on = +el.dataset.on;
  el.innerHTML = Array.from({ length: n }, (_, i) => `<i class="${i < on ? 'on' : ''}" style="--d:${i}"></i>`).join('');
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', `${on} of ${n} steps`);
});

// Swipeable boards on phones: one dot per card, synced to scroll position.
document.querySelectorAll('.tiles, [data-swipe]').forEach(track => {
  const cards = track.matches('.tiles') ? [...track.querySelectorAll('img')] : [...track.children];
  const nav = document.createElement('div');
  nav.className = 'tiles-dots';
  nav.setAttribute('aria-label', 'Cards');
  const dots = cards.map((card, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', `Card ${i + 1} of ${cards.length}`);
    b.addEventListener('click', () => track.scrollTo({ left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2, behavior: 'smooth' }));
    nav.append(b);
    return b;
  });
  track.after(nav);
  const sync = () => {
    const mid = track.getBoundingClientRect().left + track.clientWidth / 2;
    let best = 0, dist = Infinity;
    cards.forEach((c, i) => { const r = c.getBoundingClientRect(), d = Math.abs(r.left + r.width / 2 - mid); if (d < dist) { dist = d; best = i; } });
    dots.forEach((b, i) => b.setAttribute('aria-current', i === best));
  };
  let raf = 0;
  track.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(sync); }, { passive: true });
  sync();
});

// Reveal on entry; dots fill once their grid is on screen.
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { rootMargin: '0px 0px -12% 0px' });
document.querySelectorAll('[data-reveal], .dots').forEach(el => io.observe(el));
// The hero is on screen at load: reveal all of it, down to the credits at its foot.
requestAnimationFrame(() => requestAnimationFrame(() =>
  document.querySelectorAll('.hero [data-reveal]').forEach(el => { el.classList.add('in'); io.unobserve(el); })));

// Nav shows the chapter you're in, and how far through the page you are.
const num = document.getElementById('now-num'), name = document.getElementById('now-name'), bar = document.getElementById('progress');
const chapters = [...document.querySelectorAll('[data-chapter]')];
const onScroll = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  const line = innerHeight * 0.4;
  let cur = chapters[0];
  for (const c of chapters) if (c.getBoundingClientRect().top <= line) cur = c;
  num.textContent = cur.dataset.chapter; name.textContent = cur.dataset.name;
};
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// Pinned strings: a sagging thread from each [data-end] pin to the next, in
// document order, with an optional [data-tag] hung where the first one bottoms
// out. Measured live, so it follows the tilted cards at any size.
document.querySelectorAll('[data-thread]').forEach(board => {
  const svg = board.querySelector('svg');
  const ends = [...board.querySelectorAll('[data-end]')];
  const tag = board.querySelector('[data-tag]');
  if (!svg || ends.length < 2) return;
  const paths = ends.slice(1).map(() => svg.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'path')));
  svg.querySelectorAll('path').forEach(p => { if (!paths.includes(p)) p.remove(); });
  const draw = () => {
    const r = board.getBoundingClientRect();
    const at = el => { const d = el.getBoundingClientRect(); return { x: d.left + d.width / 2 - r.left, y: d.top + d.height / 2 - r.top }; };
    const pts = ends.map(at);
    paths.forEach((path, i) => {
      const p = pts[i], q = pts[i + 1];
      const c = { x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 + Math.hypot(q.x - p.x, q.y - p.y) * 0.18 };   // gravity on the thread
      path.setAttribute('d', `M ${p.x},${p.y} Q ${c.x},${c.y} ${q.x},${q.y}`);
      if (tag && i === 0) { tag.style.left = `${(p.x + 2 * c.x + q.x) / 4}px`; tag.style.top = `${(p.y + 2 * c.y + q.y) / 4}px`; }
    });
  };
  draw();
  new ResizeObserver(draw).observe(board);
  if (document.fonts) document.fonts.ready.then(draw);
});
