import { Link, useNavigate } from "react-router-dom";
import {
  ModalUserContainer,
  ModalUserTitle,
  ModalAnchors,
  ModalDivAnchor,
} from "./ModalUserStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUser,
  toggleHiddenMenu,
} from "../../../redux/user/userSlice";

const ModalUser = ({toggleMenu, setToggleMenu}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { hiddenMenu, currentUser } = useSelector((state) => state.user);
  return (
    !hiddenMenu && currentUser && (
      <ModalUserContainer>
        <ModalUserTitle>
          Bienvenida/o: {currentUser?.name}
          <ModalDivAnchor>
            <Link to='/orders'>
              Mis Ordenes
            </Link>
            <ModalAnchors
              onClick={() => {
                dispatch(toggleHiddenMenu());
                setToggleMenu(!toggleMenu)
                dispatch(setCurrentUser(null));
                navigate('/')
              }}
            >
              Cerrar Sesión
            </ModalAnchors>
          </ModalDivAnchor>
        </ModalUserTitle>
      </ModalUserContainer>
    )
  );
};
export default ModalUser;
