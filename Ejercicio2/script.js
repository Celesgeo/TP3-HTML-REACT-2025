const palabra = document.getElementById("palabra")
const boton = document.getElementById("filtrar")
const resultado = document.getElementById("resultado")
const mensaje = document.getElementById("mensaje")

const listaPalabras = [
  "manzana",
  "banana",
  "pera",
  "durazno",
  "frutilla",
  "mango",
]

boton.addEventListener("click", (e) => {
  e.preventDefault()

  const texto = palabra.value.toLowerCase()
  resultado.innerHTML = ""
  mensaje.textContent = ""

  if (texto === "") {
    mensaje.textContent = "Ingresar al menos una letra para filtrar"
    return
  }

  const filtradas = listaPalabras.filter((p) => p.includes(texto))

  if (filtradas.length === 0) {
    mensaje.textContent = "No se encontraron coincidencias."
  } else {
    filtradas.forEach((palabra) => {
      const li = document.createElement("li")
      li.textContent = palabra
      resultado.appendChild(li)
    })
  }
})
