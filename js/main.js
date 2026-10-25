// Año actual en el pie de página
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('.menu-acordeon .toggle-checkbox').forEach((checkbox) => {
  checkbox.addEventListener('change', function() {
    // Si acabas de activar este checkbox, apaga los demás
    if (this.checked) {
      document.querySelectorAll('.menu-acordeon .toggle-checkbox').forEach((otherCheckbox) => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});

function copiarCorreo(email) {
  // Copia el texto al portapapeles
  navigator.clipboard.writeText(email).then(() => {
    alert("Se ha copiado el correo al portapapeles");
  }).catch(err => {
    console.error("Se ha producido un error al copiar: ", err);
  });
}