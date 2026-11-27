const fondo_tarjeta = document.getElementById('tarjeta');
const seleccion_color = document.getElementById('select_color');

seleccion_color.addEventListener('change',function(){
    const color = this.options[this.selectedIndex].getAttribute("datacolor");
    fondo_tarjeta.style.backgroundColor = color;
})