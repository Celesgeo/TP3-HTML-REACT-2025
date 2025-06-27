const tareas = async () =>
  await fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  )
const resultado = document.getElementById("resultado")

tareas().then((tarea) => {
  tarea.filter((t) => {
    if (t.completed) {
      const li = document.createElement("li")
      li.className = "terminado"
      li.textContent = t.title
      resultado.appendChild(li)
    }
  })
})
