let saldo = 0

function atualizarSaldo() {
  document.getElementById("saldo").innerText = saldo
}

function depositar() {
  let valor = Number(document.getElementById("valor").value)

  if (valor > 0) {
    saldo += valor
    atualizarSaldo()
  } else {
    alert("Digite um valor válido!")
  }
}

function sacar() {
  let valor = Number(document.getElementById("valor").value)

  if (valor > 0 && valor <= saldo) {
    saldo -= valor
    atualizarSaldo()
  } else {
    alert("Saldo insuficiente ou valor inválido!")
  }
}