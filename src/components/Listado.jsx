const Listado = ({listado})=> {
    return (
        <ul className="lista-colab">
            {
                listado.map((colab)=> {
                    return (
                        <li key={colab.id}> {colab.nombre} - {colab.correo} </li>
                   
                    )
                }
                )
            }
        </ul>
    )
}

export default Listado