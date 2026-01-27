// Small helper: set year, smooth scrolling, simple form UX
document.addEventListener('DOMContentLoaded', function(){
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const targetId = this.getAttribute('href').slice(1);
      const el = document.getElementById(targetId);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Basic form submit feedback (no SPA)
  document.querySelectorAll('form').forEach(form=>{
    form.addEventListener('submit', function(){
      const btn = form.querySelector('button[type="submit"]');
      if(btn){
        btn.disabled = true;
        btn.textContent = 'Sending…';
      }
    });
  });
});
