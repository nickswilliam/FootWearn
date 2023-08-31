import { useNavigate } from "react-router-dom"
import { NotFoundContainer } from "./NotFoundStyles"
import { useSelector } from "react-redux"

const NotFound = () => {
const navigate = useNavigate()
const {currentUser} = useSelector(state=> state.user)
  return (
    <NotFoundContainer mt={currentUser}>
        <h1>PÁGINA O RUTA ESPECIFICADA NO ENCONTRADA 😔</h1>

        <button onClick={()=> navigate('/')}>Ir a Inicio</button>
    </NotFoundContainer>
  )
}
export default NotFound