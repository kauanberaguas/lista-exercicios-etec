function verificarNumero() {
  const numero = parseInt(document.getElementById('numero').value);
  const resultado = document.getElementById('resultado');
  if (numero > 0) {
    resultado.textContent = "Positivo";
  } else if (numero < 0) {
    resultado.textContent = "Negativo";
  } else {
    resultado.textContent = "Nulo";
  }
}