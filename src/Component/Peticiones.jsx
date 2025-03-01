import{ useState }from "react"

export const Peticiones = (count) =>{
    const[personaje,setPersonaje] = useState ([])}

    const obtenerDatos = async () =>{
        let response= await fetch ( `https://rickandmortyapi.com/api/character/?name=${count} `)
        let Datos= await response.json()}
        console.log (datos)
        setPersonaje(datos.user)
        {
            setError()
            return(
            <div>
                <p></p>
                <p></p>
                <p></p>


            </div> )
            
        
        }