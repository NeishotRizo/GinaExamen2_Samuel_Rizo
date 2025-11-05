// ===== CONFIGURACIÓN =====

localStorage.setItem('logeado', 'false');

const certSection = document.getElementById("certificaciones-section");
const form = document.getElementById("login-form");
const mensaje = document.getElementById("mensaje");
//igualamos loginBox a login-section
const loginBox = document.getElementById("login-section");
const message = document.getElementById('message');
//añadimos un eventlistener a nuestra constante form, que al ocurrir el evento submit de nuestro objeto form especifico,
//hace que se ejecute la callback function(e) para que se ejecute solo si el evento submit ha ocurrido
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita que el formulario recargue la página

  const username = document.getElementById('usuario').value.trim();
  const password = document.getElementById('passwrd').value.trim();
  const logstatus = localStorage.getItem('logeado') === 'true';

  try {
    if(!logstatus){
        const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      
      if (!res.ok) {
        const err = await res.json();
        message.textContent = err.message || 'Error al iniciar sesión';
        message.style.color = 'red';
        return;
      }

      const data = await res.json();
      localStorage.setItem('token', data.token);
      message.textContent = 'Inicio de sesión exitoso';
      message.style.color = 'green';
      loginBox.style.display = "none";
      //Marcamos que estamos logueados
      localStorage.setItem('logeado', 'true');
      setTimeout(() => {
      window.location.reload();
      }, 3500);
    }
    
  } catch (err) {
    console.error(err);
    message.textContent = 'Error de conexión con el servidor';
    message.style.color = 'red';
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }
});




// Navegación a travez de las 4 secciones de inicio certifficaciones contacto y nosotros
// igualamos links a nuestra lista de anclas a,
const links = document.querySelectorAll("nav a");
//igualamos sections a todas las etiquetas con la clase section
const sections = document.querySelectorAll(".section");
// hacemos un for each del "Array" que se formó al hacer la constante links
//link es la la variable que tendra el valor actual de la opcion que estemos recorriendo de el "Array" links
links.forEach((link) => {
  //añadimos el evento click a nuestro objeto actual de link con una funcion flecha
  link.addEventListener("click", (e) => {
    console.log("ausilio");
    //que no se recargue la página
    e.preventDefault();
    //recorremos cada elemento de la lista nav para quitar la clase active de los elementos y que no sean visibles
    links.forEach((l) => l.classList.remove("active"));
    //luego le añadimos el active al elemento actual de la lista al que dimos click para que aparezca visible en la página
    link.classList.add("active");
    //igualamos target a el valor del attributo href del valor actual de nuestro "Array"
    const target = document.querySelector(link.getAttribute("href"));
    //de nuestro "Array" sections hacemos un bucle que recorra y hacemos que s= valor actual
    //esto es para ir eliminando el active de cada una de los sections y no sean visibles
    sections.forEach((s) => s.classList.remove("active"));
    //hacemos que la seccion de certificadoos no se vea
    certSection.style.display = "none";
    //ahora el valor de target que es el valor de href de nuestro link actual
    // que sería en por ejemplo si dimos click en certificaciones; #certificaciones entonces le añadiria la clase de active
    //haciendolo visible
    target.classList.add("active");

    certSection.style.display = "grid";
    const logstatus = localStorage.getItem('logeado') === 'true';
    const logindisplay = document.getElementById('logbtn');
    const logoutdisplay = document.getElementById('logoutbtn')

    if(logstatus){
      logindisplay.classList.remove("log");
      logindisplay.classList.add("out");
      logoutdisplay.classList.add("log");
    }else{
      logindisplay.classList.add("log");
      logindisplay.classList.remove("out");
      logoutdisplay.classList.remove("log");
    }
    

    const logoutbtn = document.getElementById('logoutanch');

    logoutbtn.addEventListener("click", (e) => {
      
      localStorage.setItem('logeado', 'false');
      localStorage.removeItem('token');

    });
    

    
    //Nos reposicionamos hasta el tope de la página por si el usuarioo scrolleó y dió click a una de las secciones le aplicamos
    //behavior smooth, para que no se vea tan golpeado
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});





