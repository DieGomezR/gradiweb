import './styles/styles.scss';

console.log('Gradiweb is online!!!');

document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todos los elementos animados
    console.log('Se esta ejecutando el script');
    const animatedElements = document.querySelectorAll(".scroll-animate");
  
    // Configurar el IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view"); // Agregar clase cuando el elemento entra en vista
            observer.unobserve(entry.target); // Dejar de observar después de la animación
          }
        });
      },
      { threshold: 0.1 } // Detectar cuando el 10% del elemento es visible
    );
  
    // Observar cada elemento animado
    animatedElements.forEach((el) => observer.observe(el));
  
    // Asegurar que los elementos visibles desde el principio se muestren
    animatedElements.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("in-view");
      }
    });
  });

  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 2000); // Espera 500ms para ocultar completamente
    }
  });
  
  
  