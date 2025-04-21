// Funcionalidad para el menú móvil
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Animación para mostrar secciones al hacer scroll
window.addEventListener('scroll', revealSections);

function revealSections() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('revealed');
        }
    });
}

// Formulario de contacto
const contactForm = document.querySelector('.contacto-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí puedes agregar código para procesar el formulario
        // Por ahora solo mostraremos un mensaje de éxito
        alert('¡Mensaje enviado con éxito!');
        this.reset();
    });
}