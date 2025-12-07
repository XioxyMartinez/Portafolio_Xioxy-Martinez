// Navegación móvil
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('menu');

navToggle.addEventListener('click', () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !isExpanded);
  navMenu.classList.toggle('is-open');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-btn').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-open');
  });
});

// Formulario de contacto
const contactForm = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Validación básica
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  
  if (!nombre || !email || !mensaje) {
    showFormMessage('Por favor, completa todos los campos requeridos.', 'error');
    return;
  }
  
  if (!isValidEmail(email)) {
    showFormMessage('Por favor, ingresa un correo electrónico válido.', 'error');
    return;
  }
  
  // Simular envío (reemplazar con tu backend)
  showFormMessage('Enviando mensaje...', 'success');
  
  // Aquí iría la lógica real de envío
  setTimeout(() => {
    showFormMessage('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.', 'success');
    contactForm.reset();
    
    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
      formMsg.style.display = 'none';
    }, 5000);
  }, 1500);
});

function showFormMessage(text, type) {
  formMsg.textContent = text;
  formMsg.className = `form-msg ${type}`;
  formMsg.style.display = 'block';
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Efecto de scroll para header
let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    return;
  }
  
  if (currentScroll > lastScroll) {
    // Scrolling down
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    header.style.transform = 'translateY(0)';
    header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  }
  
  lastScroll = currentScroll;
});

// Animación de elementos al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.project-card, .skill-category, .contact-item').forEach(el => {
  observer.observe(el);
});

// Añadir clase inicial para animaciones
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});