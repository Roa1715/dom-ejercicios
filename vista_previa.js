const texto = document.getElementById('parrafo');
const parrafodeltexto = document.getElementById('textparrafo');

texto.addEventListener('input',()=>{
    parrafodeltexto.textContent = texto.value;
})