import './styles/styles.scss';

console.log('Gradiweb is online!!!');

document.addEventListener("DOMContentLoaded", () => {
    // Selección de todos los elementos con la clase para animación
    const animatedElements = document.querySelectorAll(".scroll-animate");
  
    // Configuración del IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view"); // Clase para elementos visibles
            observer.unobserve(entry.target); // Dejar de observar tras la animación
          }
        });
      },
      { threshold: 0.1 } // Configuración para detectar cuando el 10% del elemento es visible
    );
  
    // Observar elementos con animación
    animatedElements.forEach((el) => observer.observe(el));
  
    // Comprobar visibilidad inicial de los elementos animados
    animatedElements.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("in-view"); // Clase aplicada al elemento visible desde el principio
      }
    });
});

// Loader inicial
window.addEventListener('load', () => {
    const loader = document.getElementById('loader'); // Selector para el loader
    if (loader) {
      loader.style.opacity = '0'; // Ocultar visualmente el loader
      setTimeout(() => {
        loader.style.display = 'none'; // Remover el loader tras la transición
      }, 2000); // Duración para ocultar completamente el loader
    }
});
