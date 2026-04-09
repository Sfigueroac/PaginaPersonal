// ======= SISTEMA DE IDIOMAS =======
const translations = {
  es: {
    "header-subtitle": "Desarrollador FullStack · Ingeniero de Sistemas en formación",
    "copiado": "¡Copiado!",
    "perfil-title": "Perfil Profesional",
    "perfil-text": "Soy estudiante de Ingeniería de Sistemas, con un fuerte interés en inteligencia artificial, programación y desarrollo de software. Tengo experiencia en investigación académica, especialmente en la intersección entre inteligencia artificial y áreas como la salud o el derecho. Cuento con habilidades en lenguajes de programación como JAVA, Python, JavaScript y TypeScript, al igual que en tecnologías como NestJS, React, FLASK y Django. Tengo un portafolio amplio en diversos campos tanto FrontEnd como BackEnd y tengo conocimiento de técnicas de desarrollo ágiles como SCRUM. Además, me mantengo actualizado sobre avances tecnológicos y científicos. Me caracterizo por mi capacidad de aprendizaje autónomo, pensamiento analítico, habilidades de comunicación efectiva y liderazgo.",
    "edu-title": "Educación",
    "edu-degree": "Ingeniería de Sistemas",
    "edu-scholarship": "Beca a la excelencia",
    "proyectos-title": "Proyectos Universitarios",
    "p1-title": "Web App para Base de Datos Cámaras de Comercio",
    "p1-role": "Programador e Ingeniero Líder de Proyecto (Nov 2023 – Jun 2024)",
    "p1-li1": "Fundador de prestigiosa firma de abogados como evaluador",
    "p1-li2": "Base de Datos SQL con más de 300 registros",
    "p1-li3": "Backend en Python con Flask",
    "p2-title": "Aplicativo para sistema de cobro de posible IPS",
    "p2-role": "Programador (Ene 2023 – May 2023)",
    "p2-li1": "Backend realizado en JAVA",
    "p2-li2": "Uso de Programación Orientada a Objetos (POO)",
    "p3-title": "Sistema de colección de cartas Pokemon",
    "p3-role": "Programador",
    "p3-li1": "Programación Orientada a Objetos",
    "p3-li2": "Control de arreglos",
    "p4-title": "Juego de astucia naval BATTLESHIP",
    "p4-role": "Programador",
    "p4-li1": "Programación Orientada a Objetos",
    "p4-li2": "Control de arreglos",
    "exp-title": "Experiencia Profesional",
    "exp1-title": "Programador de Soluciones Web y Digitalización Legal",
    "exp1-date": "Hurtado Gandini Dávalos SAS — mayo de 2025 a septiembre de 2025",
    "exp1-li1": "Programador de Sistema de Diagnóstico Legal aumentando la productividad y reduciendo el contacto necesario entre cliente y abogado.",
    "exp1-li2": "Uso de NestJS, PostgreSQL y React.",
    "exp1-li3": "Se realizó todo el proceso del Software: levantamiento de requerimientos, modelado del sistema, uso de sprints y metodologías ágiles de desarrollo.",
    "skills-title": "Habilidades",
    "skills-h3-tech": "Técnicas",
    "skills-h3-lang": "Idiomas",
    "skills-lang-p": "Inglés B2 | Aprendiendo Portugués",
    "logros-title": "Logros y Certificaciones",
    "logros-li1": "🏆 Beca de Excelencia en la Universidad Icesi",
    "logros-li2": "🎓 Certificación en Introducción a la Ciberseguridad - Platzi",
    "logros-li3": "🎓 Certificación en Desarrollo BackEnd - Platzi",
    "logros-li4": "🏅 Diplomado en Ciberseguridad - Universidad Autónoma de Occidente",
    "footer-text": "© 2026 Santiago Figueroa. Todos los derechos reservados."
  },
  en: {
    "header-subtitle": "Full Stack Developer · Systems Engineering Student",
    "copiado": "Copied!",
    "perfil-title": "About Me",
    "perfil-text": "I'm a Systems Engineering student passionate about building software that solves real problems. I've worked on projects ranging from legal tech platforms to web apps for public registries, always combining clean code with an eye for impact. I'm big on agile methodologies, autonomous learning, and staying on top of what's next in tech and AI. I love the intersection of AI with real-world fields like law & healthcare.",
    "edu-title": "Education",
    "edu-degree": "Systems Engineering",
    "edu-scholarship": "Merit-based Excellence Scholarship",
    "proyectos-title": "University Projects",
    "p1-title": "Chamber of Commerce Database Web App",
    "p1-role": "Programmer & Lead Engineer (Nov 2023 – Jun 2024)",
    "p1-li1": "Evaluated by the founding partner of a prestigious law firm",
    "p1-li2": "SQL database with 300+ records",
    "p1-li3": "Backend powered by Python + Flask",
    "p2-title": "IPS Billing System",
    "p2-role": "Programmer (Jan 2023 – May 2023)",
    "p2-li1": "Backend built in Java",
    "p2-li2": "Object-Oriented Programming (OOP) architecture",
    "p3-title": "Pokémon Card Collection System",
    "p3-role": "Programmer",
    "p3-li1": "Object-Oriented Programming",
    "p3-li2": "Array management",
    "p4-title": "BATTLESHIP Naval Strategy Game",
    "p4-role": "Programmer",
    "p4-li1": "Object-Oriented Programming",
    "p4-li2": "Array management",
    "exp-title": "Professional Experience",
    "exp1-title": "Web Solutions Programmer & Legal Digitalization",
    "exp1-date": "Hurtado Gandini Dávalos SAS — May 2025 to September 2025",
    "exp1-li1": "Built a Legal Diagnosis System improving firm productivity and reducing client-lawyer friction.",
    "exp1-li2": "Stack: NestJS, PostgreSQL, and React.",
    "exp1-li3": "Full software lifecycle: requirements gathering, system modeling, sprint planning with SCRUM methodology.",
    "skills-title": "Skills",
    "skills-h3-tech": "Technical",
    "skills-h3-lang": "Languages",
    "skills-lang-p": "English B2 | Learning Portuguese",
    "logros-title": "Achievements & Certifications",
    "logros-li1": "🏆 Excellence Scholarship — Universidad Icesi",
    "logros-li2": "🎓 Introduction to Cybersecurity — Platzi",
    "logros-li3": "🎓 Backend Development Certification — Platzi",
    "logros-li4": "🏅 Cybersecurity Diploma — Universidad Autónoma de Occidente",
    "footer-text": "© 2026 Santiago Figueroa. All rights reserved."
  }
};

let currentLang = "es";

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
  const btn = document.getElementById("lang-btn");
  btn.textContent = lang === "es" ? "🇺🇸 EN" : "🇨🇴 ES";
}

function toggleLang() {
  setLang(currentLang === "es" ? "en" : "es");
}
// ======= FIN SISTEMA DE IDIOMAS =======

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

document.addEventListener("DOMContentLoaded", function() {
    const experiencias = document.querySelectorAll(".experiencia");

    function mostrarExperiencias() {
        experiencias.forEach(exp => {
            const rect = exp.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                exp.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", mostrarExperiencias);
    mostrarExperiencias();
});
