// script.js

const menuToggle = document.querySelector(".btn_menu");
const navLinks = document.querySelector(".nav_links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Close menu when a link is clicked (for better UX on mobile)
navLinks.querySelectorAll("li").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});
// Form submission handling
document.getElementById("form_inscripcion").addEventListener("submit", async (e) => {
  e.preventDefault();

  const datos = {
    nombre: document.getElementById("nombre").value.trim(),
    correo: document.getElementById("correo").value.trim(),
    telefono: document.getElementById("telefono").value.trim(),
    curso: document.getElementById("curso").value
  };

  const res = await fetch("http://localhost:3000/inscripciones", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos)
  });

  const data = await res.json();
  alert(data.mensaje || data.error);
});


