import { useSelector } from "react-redux";
import { UserLoggedContainer } from "./UserLoggedStyles";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle} from 'react-icons/fa'

const UserLogged = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    currentUser && (
      <UserLoggedContainer>
        <span>{`Bienvenid@ al E-Shop ${currentUser.name} ${currentUser.lastname}`}</span>
        {!currentUser.verified ? <button onClick={()=> navigate('/verify')}>Verificar cuenta</button> : <FaCheckCircle style={{cursor: "pointer"}} title="Usuario verificado"/>}
      </UserLoggedContainer>
    )
  );
};
export default UserLogged;
