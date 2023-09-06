import { useSelector } from "react-redux";
import { UserLoggedContainer } from "./UserLoggedStyles";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle} from 'react-icons/fa'
import { ADMIN } from "../../utils/constants";

const UserLogged = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    currentUser && (
      <UserLoggedContainer>
        <span>{`Bienvenid@ al E-Shop ${currentUser.name} ${currentUser.lastname}`}</span>
        {!currentUser.verified ? <button onClick={()=> navigate('/verify')}>Verificar cuenta</button> : currentUser.verified && currentUser.rol === ADMIN? <button onClick={()=> navigate('/issues')}>Reportar inconvenientes</button>: <FaCheckCircle style={{cursor: "pointer"}} title="Usuario verificado"/>}
      </UserLoggedContainer>
    )
  );
};
export default UserLogged;
