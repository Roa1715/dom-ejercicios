const inputPeso = document.getElementById('peso');
const inputEstatura = document.getElementById('estatura');
const boton = document.getElementById('button');

boton.addEventListener('click', function() {
    // 1. Leer .value dentro del clic y convertir a número (aceptando coma o punto)
    const peso = parseFloat(inputPeso.value.replace(',', '.'));
    let estatura = parseFloat(inputEstatura.value.replace(',', '.'));

    // 2. Validar
    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
        document.getElementById('resultado').textContent = "Ingrese valores válidos";
        return;
    }

    // (Opcional) Si escriben estatura en cm (ej. 170), pasar a metros (1.70)
    if (estatura > 3) {
        estatura = estatura / 100;
    }

    // 3. Calcular y mostrar con paréntesis en toFixed(2)
    const imc = peso / (estatura * estatura);
    document.getElementById('resultado').textContent = imc.toFixed(2);
});