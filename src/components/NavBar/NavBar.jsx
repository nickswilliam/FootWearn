import { useState } from "react";
import {
  LiMenu,
  MenuItem,
  MenuItemText,
  NavLi,
  NavUl,
  Navbar,
  StyledNavLink,
} from "./NavBarStyles";
import {
  FaPhone,
  FaPhotoVideo,
  FaQuestion,
  FaSortDown,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartMenu } from "../../redux/cartSlice/cartSice";
import { toggleHiddenMenu } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import ModalUser from "./ModalUser/ModalUser";

const NavBar = () => {
  const cartMenu = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [toggleSection, setToggleSection] = useState(false);
  const navigate = useNavigate();

  const handleSection = () => {
    setToggleSection(!toggleSection);
  };

  return (
    <Navbar>
      <NavUl>
        <NavLi>
          <StyledNavLink activeClassName="active" to="/">
            Inicio
          </StyledNavLink>
        </NavLi>
        <NavLi onClick={handleSection}>
          Secciones
          <FaSortDown className={!toggleSection ? "normal" : "rotateUp"} />
          {toggleSection && (
            <LiMenu
              className={toggleSection ? "openedSection" : "closedSection"}
            >
              <MenuItem>
                <MenuItemText to="/#hero">
                  <FaPhotoVideo />
                  Galeria
                </MenuItemText>
              </MenuItem>
              <MenuItem>
                <MenuItemText to="/#products">
                  <FaStore />
                  Productos
                </MenuItemText>
              </MenuItem>
              <MenuItem>
                <MenuItemText to="/#about">
                  <FaQuestion />
                  Acerca
                </MenuItemText>
              </MenuItem>
              <MenuItem>
                <MenuItemText to="/#contact">
                  <FaPhone />
                  Contacto
                </MenuItemText>
              </MenuItem>
            </LiMenu>
          )}
        </NavLi>
        <NavLi onClick={()=>currentUser ? dispatch(toggleHiddenMenu()) : navigate('/register')}>
          <ModalUser />
          <StyledNavLink
            activeClassName="active"
            to={currentUser? dispatch(toggleHiddenMenu()): '/register'}
          >
            <FaUser />
            {currentUser
              ? `${
                  currentUser.name.charAt(0).toUpperCase() + currentUser.lastname.charAt(0).toUpperCase()
                }`
              : "Registro"}
          </StyledNavLink>
        </NavLi>
      </NavUl>
    </Navbar>
  );
};
export default NavBar;
