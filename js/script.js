// ===== MENÚ HAMBURGUESA =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Cambiar icono
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// ===== DESTACAR ENLACE ACTIVO AL HACER SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

function activeLinkOnScroll() {
    let current = '';
    const scrollPosition = window.scrollY + 200;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    navItems.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').substring(1);
        if (href === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activeLinkOnScroll);
window.addEventListener('load', activeLinkOnScroll);

// ===== FORMULARIO DE CONTACTO (DEMO) =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        if (!nombre || !email || !mensaje) {
            alert('Por favor, completa todos los campos requeridos.');
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            alert('Ingresa un correo electrónico válido.');
            return;
        }
        alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje. Un asesor se comunicará contigo a la brevedad.`);
        contactForm.reset();
    });
}

// ===== NEWSLETTER SIMULACIÓN =====
const newsBtn = document.getElementById('newsBtn');
if (newsBtn) {
    newsBtn.addEventListener('click', () => {
        const newsEmail = document.getElementById('newsEmail');
        if (newsEmail && newsEmail.value.trim() && newsEmail.value.includes('@')) {
            alert('¡Suscripción exitosa! Recibirás nuestras novedades.');
            newsEmail.value = '';
        } else {
            alert('Por favor, ingresa un correo válido.');
        }
    });
}

// ===== ANIMACIONES SUAVES AL CARGAR =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});