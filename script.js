document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function checkScroll() {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Para verificar secciones visibles al cargar la página
});
document.addEventListener("DOMContentLoaded", function() {
    const proyectos = document.querySelectorAll(".proyecto");

    function mostrarProyectos() {
        proyectos.forEach(proyecto => {
            const rect = proyecto.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                proyecto.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", mostrarProyectos);
    mostrarProyectos();
});

document.addEventListener("DOMContentLoaded", function() {
    const secciones = document.querySelectorAll(".seccion");

    function mostrarSecciones() {
        secciones.forEach(seccion => {
            const rect = seccion.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                seccion.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", mostrarSecciones);
    mostrarSecciones();
});

document.addEventListener("DOMContentLoaded", function() {
    const texto = "¡Hola! Soy Santiago Figueroa";
    let index = 0;
    const elemento = document.getElementById("typing");

    // Borra el texto antes de empezar (IMPORTANTE)
    elemento.innerHTML = "";

    function escribirTexto() {
        if (index < texto.length) {
            elemento.innerHTML += texto.charAt(index);
            index++;
            setTimeout(escribirTexto, 100);
        }
    }

    // 🔥 Previene que se ejecute más de una vez
    if (!elemento.dataset.animado) {
        elemento.dataset.animado = "true"; // Marcamos que ya se animó
        escribirTexto();
    }
});
particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        shape: { type: "circle" },
        size: { value: 3 },
        move: { speed: 2 },
        line_linked: { enable: true, distance: 100, color: "#ffffff" }
    }
});
function copiarEmail(event) {
    event.preventDefault(); // Evita que abra mailto:
    const email = "ssfigueroacc@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      const mensaje = document.getElementById("copiado");
      mensaje.style.display = "inline";
      setTimeout(() => {
        mensaje.style.display = "none";
      }, 1500);
    });
  }

