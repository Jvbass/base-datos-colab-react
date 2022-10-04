import "./App.css";
import { useRef,useState } from "react";
import data from "./data/data.js";

import Header from "./components/Header.jsx";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado.jsx";
import BaseColaboradores from "./data/data.js";

function App() {
  //lista con toda la data
  const [colabs, setColabs] = useState(data);
  //lsita para mostrar data filtrada, para resetear se iguala a colabs 
  const [showColabs, setShowColabs] = useState(data)

  const buscador = useRef(null)

  const handleSubmit = (e)=> {
    e.preventDefault()// con preventDefault evitamos que la pagina se recarge al ser un formulario

    if (!e.target[0].value || !e.target[1].value) return alert("Debes Ingresar nombre y correo")

    const newColab = {
      id: colabs.length + 1,
      nombre: e.target[0].value,
      correo: e.target[1].value
    }

    //array de colabs actualizado con data agregada por formulario
    const colabActualizado = [...colabs, newColab]

    //actualizamos ambas copias de la lista de colabs
    setColabs(colabActualizado)
    setShowColabs(colabActualizado)

    e.target[0].value = ""
    e.target[1].value = ""
  }

  const handleKeyDown = (e) => {
    if ( e.key !== 'Enter') return

    const valor = buscador.current.value.toLowerCase()
    const filtrado = colabs.filter((colab)=> {
    return colab.nombre.toLowerCase().includes(valor) || colab.correo.toLowerCase().includes(valor) 
    })

    // console.log (filtrado)
    setShowColabs(filtrado)
  }

  const  reset = ()=> {
    if (!buscador.current.value){
    setShowcolabs(colabs)
  }
  }

  return (
    <div className="App">
      <Header 
      reset = {reset}
      referencia = {buscador}
      buscar = {handleKeyDown}/>
      <main>
        <div className="inputs">
          <Formulario submit={handleSubmit}/>
        </div>
        <div className="lista-colab">
          <h3>Lista de colaboradores</h3>
          <Listado listado={showColabs} />
        </div>
      </main>
    </div>
  );
}

export default App;
