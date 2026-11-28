

const write_task = document.getElementById('task');
const task = document.getElementById('tarea');
const formule = document.getElementById('formulario');

formule.addEventListener('submit',function(evento){
    evento.preventDefault();

    const texto = write_task.value.trim();

    if(texto !== ''){
        const nuevalista = document.createElement('li')
        nuevalista.textContent = texto;
        task.appendChild(nuevalista);

    }
    write_task.value ='';
    write_task.focus();
})