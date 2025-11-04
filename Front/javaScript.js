// ===== CONFIGURACIÓN =====
const API_URL = 'http://localhost:3000/api';

// ===== UTILIDADES =====
// Guardar token en localStorage
function saveToken(token) {
  localStorage.setItem('authToken', token);
}

// Obtener token
function getToken() {
  return localStorage.getItem('authToken');
}

// Eliminar token
function removeToken() {
  localStorage.removeItem('authToken');
}


//Parte de validacion de usuario en la forma login
//igualamos la constante form a el elemento que tomamos por id que es en este caso login-form

//#igualamos la constante mensaje a el elemento mensaje que no hace nada por ahora#

const form = document.getElementById('login-form');
  const mensaje = document.getElementById('mensaje');
//añadimos un eventlistener a nuestra constante form, que al ocurrir el evento submit de nuestro objeto form especifico, 
//hace que se ejecute la callback function(e) para que se ejecute solo si el evento submit ha ocurrido
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario recargue la página

    //constante usuario toma el valor que metimos en el field usuario
    const usuario = document.getElementById('usuario').value;
    // constantte contraseña toma el valor que metimos en el field contraseña
    const contraseña = document.getElementById('contraseña').value;

    // así se debería de validar cuando ya metamos ahora si el arreglo de usuarios preregistrados con sus respectivas contraseñas
/*
    if(usuario === "admin" && contraseña === "1234") {
      mensaje.style.color = "green";
      mensaje.textContent = "¡Bienvenido, " + usuario + "!";
    } else {
      mensaje.style.color = "red";
      mensaje.textContent = "Usuario o contraseña incorrectos.";
    }
*/
  });


    // Navegación a travez de las 4 secciones de inicio certifficaciones contacto y nosotros
    // igualamos links a nuestra lista de anclas a, 
    const links = document.querySelectorAll('nav a');
    //igualamos sections a todas las etiquetas con la clase section
    const sections = document.querySelectorAll('.section');
    // hacemos un for each del "Array" que se formó al hacer la constante links
    //link es la la variable que tendra el valor actual de la opcion que estemos recorriendo de el "Array" links
    links.forEach(link => {
        //añadimos el evento click a nuestro objeto actual de link con una funcion flecha 
      link.addEventListener('click', e => {
        //que no se recargue la página
        e.preventDefault();
        //recorremos cada elemento de la lista nav para quitar la clase active de los elementos y que no sean visibles
        links.forEach(l => l.classList.remove('active'));
        //luego le añadimos el active al elemento actual de la lista al que dimos click para que aparezca visible en la página
        link.classList.add('active');
        //igualamos target a el valor del attributo href del valor actual de nuestro "Array"
        const target = document.querySelector(link.getAttribute('href'));
        //de nuestro "Array" sections hacemos un bucle que recorra y hacemos que s= valor actual
        //esto es para ir eliminando el active de cada una de los sections y no sean visibles
        sections.forEach(s => s.classList.remove('active'));
        //hacemos que la seccion de certificadoos no se vea
        certSection.style.display = 'none';
        //ahora el valor de target que es el valor de href de nuestro link actual
        // que sería en por ejemplo si dimos click en certificaciones; #certificaciones entonces le añadiria la clase de active
        //haciendolo visible
        target.classList.add('active');
        
        certSection.style.display = 'grid';
        //Nos reposicionamos hasta el tope de la página por si el usuarioo scrolleó y dió click a una de las secciones le aplicamos 
        //behavior smooth, para que no se vea tan golpeado
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });


        // #posible codigo duplicado#
    // Login funcional 
    //igualamos loginForma nuestra login-form
    const loginForm = document.getElementById('login-form');
    //igualamos loginBox a login-section
    const loginBox = document.getElementById('login-section');
    //igualamos cerSection a certificaciones-section
    const certSection = document.getElementById('certificaciones-section');
    //añadimos un evento a nuestro formulario login cuando ocurra el evento submit del formulario va a pasar la funcion flecha e
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      //a nuestra loginbox le cambiamos el atributo de estilos display a none para que desaparezca y de espacio a que aparezcan las 
      //certificaciones disponibles
      loginBox.style.display = 'none';
      //a nuestra section de certificaciones le cambiamos el display a grid para que aparezcan disponibles las certificaciones
      
    });
 