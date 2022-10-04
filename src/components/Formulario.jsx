const Formulario = ({submit})=> {
    return (
        <fieldset className="form-colab">
            <legend><h3> Agregar Colaborador</h3></legend>
            <form onSubmit={(e)=> submit (e)}>
                <input type="text" placeholder="Nombre"/>
                <input type="text" placeholder="Correo" />
                <button>Agregar</button>
            </form>
        </fieldset>
    )

}

export default Formulario