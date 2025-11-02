function verificarPrimo() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
    if (numero === 1) {
        resultado.textContent = "1 não é primo.";
        return;
    }
    let Primo = true;
    let i = 2;
    while (i < numero) {
        if (numero % i === 0) {
            Primo = false;
            break;
        }
        i++;
    }
    if (Primo) {
        resultado.textContent = numero + " é um número primo.";
    } else {
        resultado.textContent = numero + " não é um número primo.";
    }
}