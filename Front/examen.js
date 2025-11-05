// Elemento donde se mostrarán las preguntas
const contenedor = document.getElementById('contenedor-preguntas');

// Variables de control
var bandera = false;
var segunda = false;

pagar();

function pagar() {
  const sections = document.querySelectorAll(".exam-section");

  if (bandera) {
    // Muestra sección del examen
    const exa = document.getElementById("exa");
    sections.forEach((obj) => obj.classList.remove("active"));
    exa.classList.add("active");

    async function cargarPreguntas() {
      try {
        const res = await fetch('http://localhost:8080/api/certificado');
        const data = await res.json();

        if (res.ok) {
          mostrarPreguntas(data.preguntas);
          console.log("Preguntas cargadas correctamente");
        } else {
          contenedor.innerHTML = '<p>Error al obtener las preguntas (no data success).</p>';
        }
      } catch (error) {
        console.error('Error al conectar con el servidor:', error);
        contenedor.innerHTML = '<p>No se pudo conectar con el servidor.</p>';
      }
    }

    function mostrarPreguntas(preguntas) {
      contenedor.innerHTML = ''; 

      preguntas.forEach((p, index) => {
        const div = document.createElement('div');
        div.classList.add('pregunta');

        let opcionesHTML = '';
        p.opciones.forEach((opcion) => {
          opcionesHTML += `
            <label class="classpre">
              <input class="inputpre" type="radio" name="pregunta-${index}" value="${opcion}">
              ${opcion}
            </label><br>
          `;
        });

        div.innerHTML = `
          <h3 class="h3p">${index + 1}. ${p.texto}</h3>
          ${opcionesHTML}
          <hr>
        `;
        contenedor.appendChild(div);
      });

      // Botón para finalizar examen
      const btnFinalizar = document.createElement('button');
      btnFinalizar.textContent = "Finalizar Examen";
      btnFinalizar.classList.add('btn-finalizar');
      contenedor.appendChild(btnFinalizar);

      btnFinalizar.addEventListener('click', () => {
        // Ejemplo: calculamos puntaje (aquí solo simulamos aprobado)
        const aprobado = true; 

        if (aprobado) {
          Swal.fire({
            title: '¡Felicidades!',
            text: 'Has aprobado el examen.',
            icon: 'success',
            confirmButtonText: 'Descargar Certificado'
          }).then(() => {
            // Aquí llamas a tu backend para generar el PDF
            console.log('Llamar a la función para generar PDF');
          });
        } else {
          Swal.fire('No aprobado', 'No alcanzaste el puntaje necesario. Intenta de nuevo.', 'error');
        }
      });
    }

    cargarPreguntas();
    bandera = false;
    segunda = true;

  } else {
    // Mostrar sección de pago
    const logstatus = localStorage.getItem('logeado') === 'true';
    if(logstatus){
      const pago = document.getElementById("pago");
      sections.forEach((obj) => obj.classList.remove("active"));
      pago.classList.add("active");

      const formP = document.getElementById('form-pago');

      formP.addEventListener('submit', (e) => {
        e.preventDefault();

          Swal.fire({
            title: 'Procesando pago...',
            text: 'Espere un momento',
            timer: 2000,
            didOpen: () => Swal.showLoading()
          }).then(() => {
            Swal.fire('✅ Pago exitoso', '¡Gracias por tu compra!', 'success');
            formP.reset();
            bandera = true;
            segunda = false;
            pagar();
          });
      });
    }else{
        Swal.fire({
        title: '⚠️ No estás logueado',
        text: 'Necesitas iniciar sesión para continuar',
        icon: 'warning',
        confirmButtonText: 'Ir al Login',
        allowOutsideClick: false // evita que cierren la alerta haciendo clic fuera
        }).then((result) => {
        if (result.isConfirmed) {
            // Redirige al login
            window.location.href = window.location.href = 'index.html#login'; // cambia esta ruta a tu página de login
          }
      });
    }
    

  }
}


