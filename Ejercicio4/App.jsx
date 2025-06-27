const { useState } = React

const App = () => {
  const [izquierdoHabilitado, setIzquiedoHabilitado] = useState(false)
  const [derechoHabilitado, setDerechoHabilitado] = useState(true)

  const botonIzquierdo = () => {
    setIzquiedoHabilitado(!izquierdoHabilitado)
    setDerechoHabilitado(!derechoHabilitado)
  }

  const botonDerecho = () => {
    setIzquiedoHabilitado(!izquierdoHabilitado)
    setDerechoHabilitado(!derechoHabilitado)
  }

  return (
    <>
      <button disabled={izquierdoHabilitado} onClick={botonIzquierdo}>
        Izquierdo
      </button>
      <button disabled={derechoHabilitado} onClick={botonDerecho}>
        Derecho
      </button>
    </>
  )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(<App />)
