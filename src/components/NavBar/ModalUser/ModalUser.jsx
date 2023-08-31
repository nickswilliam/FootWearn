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
import {FaShopify, FaUserAlt} from "react-icons/fa";
import {AiOutlineLogout} from 'react-icons/ai'
import { setOrders } from "../../../redux/ordersSlice/ordersSlice";

const ModalUser = ({ toggleMenu, setToggleMenu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { hiddenMenu, currentUser } = useSelector((state) => state.user);
  return (
    !hiddenMenu &&
    currentUser && (
      <ModalUserContainer
        className={!hiddenMenu ? "openedModal" : "closedModal"}
      >
        <ModalUserTitle>Bienvenid@: {currentUser?.name} <FaUserAlt size='16px'/> </ModalUserTitle>
        <ModalDivAnchor>
          <Link to="/orders"><FaShopify/> Mis Ordenes</Link>
          <ModalAnchors
            onClick={() => {
              setToggleMenu(!toggleMenu);
              dispatch(toggleHiddenMenu());
              dispatch(setCurrentUser(null));
              dispatch(setOrders(null))
              navigate("/");
            }}
          >
            <AiOutlineLogout/>Cerrar Sesión
          </ModalAnchors>
        </ModalDivAnchor>
      </ModalUserContainer>
    )
  );
};
export default ModalUser;
