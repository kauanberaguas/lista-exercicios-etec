function tabuada(numero) {
    let resultado = [];
    for (let i = 1; i <= 10; i++) {
        resultado.push(numero * i);
    }
    return resultado;
}
function mostrarTabuada() {
    const numero = parseFloat(document.getElementById('numero').value);
    if (isNaN(numero)) return alert("Digite um número válido!");
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    document.getElementById('resultado').innerText = resultado;
}