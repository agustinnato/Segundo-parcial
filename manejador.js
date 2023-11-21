function validateForm() {
    let password = document.getElementById('passwordLogin1').value;
    let usuario = document.getElementById('emailLogin1').value;

    if (password !== "Contra123" || usuario !== "agusnato@gmail.com") {
        alert("Usuario o contraseña incorrectos. Por favor, verifique sus credenciales.");
        return false;
    }
    window.location.href = "Home.html";
    return false;
}



function validateForm2() {
    let password = document.getElementById('passwordLogin2').value;
    let usuario = document.getElementById('emailLogin2').value;

    if (password !== "Contra123" || usuario !== "jorgerial@gmail.com") {
        alert("Usuario o contraseña incorrectos. Por favor, verifique sus credenciales.");
        return false;
    }

    
    window.location.href = "Profesionales.html";
    return false;
}



function validateForm3() {
    let password = document.getElementById('passwordLogin3').value;
    let usuario = document.getElementById('emailLogin3').value;

    if (password !== "Contra123" || usuario !== "mirandarios@gmail.com") {
        alert("Usuario o contraseña incorrectos. Por favor, verifique sus credenciales.");
        return false;
    }  
        window.location.href = "administrador.html"; 
        return false;
    
}
//simulador de converr
let chatData = [
    { remitente: 'Cliente ', mensaje: 'Hola, ¿puedes ayudarme con mi situación?' },
    { remitente: 'YO (ESPECIALISTA)', mensaje: '¡Claro! Estoy aquí para ayudarte.' },
    { remitente: 'Cliente ', mensaje: 'Genial, estoy buscando un especialista para mi hija de 10 años y me intereso tu perfil.' },
    { remitente: 'YO (ESPECIALISTA)', mensaje: 'Me alegro que te haya interesado, te cuento que cuesta 5000$ la hora.' },
  ];
  

  // Función para mostrar mensajes en el chat
  function mostrarMensajes() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.innerHTML = '';
  
    chatData.forEach((mensaje) => {
      const divMensaje = document.createElement('div');
      divMensaje.innerHTML = `<strong>${mensaje.remitente}:</strong> ${mensaje.mensaje}`;
      chatContainer.appendChild(divMensaje);
    });
  }
  
  // Función para enviar un nuevo mensaje
  function enviarMensaje() {
    const mensajeInput = document.getElementById('mensaje');
    const nuevoMensaje = { remitente: 'Profesional', mensaje: mensajeInput.value };
    chatData.push(nuevoMensaje);
    mostrarMensajes();
    mensajeInput.value = ''; 
  } 
  mostrarMensajes();
  
 
function toggleTheme() {
    var body = document.body;
    body.classList.toggle('modo-claro');
    body.classList.toggle('modo-oscuro');
  }

  var editingProfile = false;

  function editarPerfil() {
      // Cambia el estado de la edición del perfil
      editingProfile = !editingProfile;
  
      // Obtiene los elementos del DOM
      var nombreSpan = document.getElementById("nombre");
      var especialidadSpan = document.getElementById("especialidad");
      var informacionSpan = document.getElementById("informacion");
      var nombreInput = document.getElementById("nombreInput");
      var especialidadInput = document.getElementById("especialidadInput");
      var informacionInput = document.getElementById("informacionInput");
  
      // Si estamos editando el perfil, muestra los campos de entrada y oculta los spans
      if (editingProfile) {
          nombreInput.value = nombreSpan.innerText;
          especialidadInput.value = especialidadSpan.innerText;
          informacionInput.value = informacionSpan.innerText;
  
          nombreSpan.style.display = "none";
          especialidadSpan.style.display = "none";
          informacionSpan.style.display = "none";
  
          nombreInput.style.display = "inline";
          especialidadInput.style.display = "inline";
          informacionInput.style.display = "inline";
      } else {
          // Si no estamos editando el perfil, muestra los spans y oculta los campos de entrada
          nombreSpan.innerText = nombreInput.value;
          especialidadSpan.innerText = especialidadInput.value;
          informacionSpan.innerText = informacionInput.value;
  
          nombreSpan.style.display = "inline";
          especialidadSpan.style.display = "inline";
          informacionSpan.style.display = "inline";
  
          nombreInput.style.display = "none";
          especialidadInput.style.display = "none";
          informacionInput.style.display = "none";
      }
  }