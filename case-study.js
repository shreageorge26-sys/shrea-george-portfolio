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
