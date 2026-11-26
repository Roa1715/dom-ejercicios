const nombre = document.getElementById('name');
const boton = document.getElementById('send');
const message = document.getElementById('mensage');

boton.addEventListener('click', () =>{
    const name = nombre.value.trim();

    message.textContent = ` hola ${name}, bienvenido`
    nombre.value="";

});


