// ---------- Mobile nav toggle ----------
(function(){
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('primary-nav');
  if(!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
})();

// ---------- Certificate filter (certificates.html only) ----------
(function(){
  const filterBar = document.getElementById('certFilters');
  const grid = document.getElementById('certGrid');
  if(!filterBar || !grid) return;

  const buttons = filterBar.querySelectorAll('button');
  const cards = grid.querySelectorAll('.cert-card');

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if(!btn) return;

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? '' : 'none';
    });
  });
})();
