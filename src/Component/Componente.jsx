import { useRef ,useState} from "react"

export const Componente =({componente})=> {
const inputRef = useRef()

return <>
<input ref={inputRef}type="text" />
<button onClick={() => {componente(inputRef.current.value)}}>Agregar</button>
</>
}