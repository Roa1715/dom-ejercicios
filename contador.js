const boton = document.getElementById('button');
const numIncr = document.getElementById('contador');
const reinicio = document.getElementById('reiniciador');

boton.addEventListener('click',()=>{
    let valor = Number(numIncr.textContent);
    numIncr.textContent = valor+1;

})


reinicio.addEventListener('click', ()=>{
    numIncr.textContent = "0";
})