// Efecto de tipeo en la ventana de terminal del hero
document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('typed-output');

  if (target) {
    const fullText = target.dataset.text || '';
    let i = 0;
    target.textContent = '';

    function typeChar() {
      if (i < fullText.length) {
        target.textContent += fullText.charAt(i);
        i++;
        setTimeout(typeChar, 28);
      }
    }
    typeChar();
  }

  // Marca el link activo en la navbar según la página actual
  const links = document.querySelectorAll('.navbar-terminal .nav-link');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach((link) => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === current) link.classList.add('active');
  });

  // Inicializa AOS (animación por scroll, librería externa)
  if (window.AOS) {
    AOS.init({ duration: 700, once: true, offset: 60 });
  }
});
