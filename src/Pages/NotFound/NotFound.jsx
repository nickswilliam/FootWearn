import { useNavigate } from "react-router-dom"
import { NotFoundContainer } from "./NotFoundStyles"

const NotFound = () => {
const navigate = useNavigate()
  return (
    <NotFoundContainer>
        <h1>PÁGINA O RUTA ESPECIFICADA NO ENCONTRADA 😔</h1>

        <button onClick={()=> navigate('/')}>Ir a Inicio</button>
    </NotFoundContainer>
  )
}
export default NotFound