const Header = ({ reset,referencia, buscar })=> {
  return (
    <header>
      <h2>Buscador de colaboradores</h2>
      <input 
      ref={referencia}
      type="text" 
      placeholder="Buscar Colaborador" 
      onChange={()=> reset()}
      onKeyDown={(e)=> buscar (e)} />
    </header>
  )
}

export default Header