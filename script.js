// Pro Level Interactive Features with Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Functionality
  const themeToggle = document.querySelector('.theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);

  function toggleTheme() {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  if (themeToggle) {
    themeToggle.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
    themeToggle.addEventListener('click', toggleTheme);
  }
  // Hamburger menu toggle for mobile
  // Create hamburger only if not mobile theme toggle
  const nav = document.querySelector('.navbar nav');
  const existingHamburger = document.querySelector('.hamburger');
  if (!existingHamburger && window.innerWidth <= 768) {
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    const logo = document.querySelector('.logo');
    logo.parentNode.insertBefore(hamburger, logo.nextSibling);
    hamburger.addEventListener('click', () => nav.classList.toggle('mobile-open'));
  }

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.navbar nav a[href]');
  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Staggered animations for feature/price/doc cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature, .price-card, .doc-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Sign Up modal functionality
  const signupLinks = document.querySelectorAll('[data-modal="signup"]');
  signupLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('signup-modal').classList.add('open');
    });
  });

  const modal = document.getElementById('signup-modal');
  if (modal) {
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });

    const form = modal.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Signed up successfully! Welcome to SaaS.');
      modal.classList.remove('open');
      form.reset();
    });
  }
});
</xai:function_call >  
<xai:function_call name="read_file">
<parameter name="path">c:/TASKS/Clone/TODO.md
