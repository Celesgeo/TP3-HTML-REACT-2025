const boton = document.getElementById("boton")
const operacion = document.getElementById("operacion")
const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")

const condicionesEspeciales = () => {
  const operador = operacion.value
  const num2 = parseFloat(numero2.value)

  if (operador === "division" && num2 === 0) {
    boton.disabled = true
  } else {
    boton.disabled = false
  }
}

numero2.addEventListener("change", condicionesEspeciales)
operacion.addEventListener("change", condicionesEspeciales)
boton.addEventListener("click", (e) => {
  e.preventDefault()
  const num1 = parseFloat(numero1.value)
  const num2 = parseFloat(numero2.value)
  const operador = operacion.value

  let resultado = 0

  if (operador === "suma") {
    resultado = num1 + num2
  } else if (operador === "resta") {
    resultado = num1 - num2
  } else if (operador === "multiplicacion") {
    resultado = num1 * num2
  } else if (operador === "division") {
    resultado = num1 / num2
  }

  document.getElementById("resultado").innerText = resultado
})
