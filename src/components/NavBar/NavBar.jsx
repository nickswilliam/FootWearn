import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaPhone,
  FaPhotoVideo,
  FaQuestion,
  FaSortDown,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { toggleHiddenMenu } from "../../redux/user/userSlice";
import ModalUser from "./ModalUser/ModalUser";
import {
  LiMenu,
  MenuItem,
  MenuItemText,
  NavLi,
  NavUl,
  Navbar,
  StyledNavLink,
} from "./NavBarStyles";

const MenuSection = ({ toggleSection }) => (
  <LiMenu className={toggleSection ? "openedSection" : "closedSection"}>
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
);

const UserLink = ({ currentUser, dispatch }) => (
  <StyledNavLink activeClassName="active" to={currentUser ? "/" : "/register"}>
    <FaUser />
    {currentUser
      ? `${currentUser.name.toUpperCase().charAt(0) + currentUser.lastname.toUpperCase().charAt(0)}`
      : "Registro"}
  </StyledNavLink>
);

const NavBar = () => {
  const { cartMenu, hiddenMenu } = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [toggleSection, setToggleSection] = useState(false);
  const navigate = useNavigate();

  const handleSection = useCallback(() => {
    setToggleSection((prev) => !prev);
  }, []);

  const handleMenuClick = () => {
  if (currentUser) {
      dispatch(toggleHiddenMenu());
    } else {
      navigate("/register");
    }
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
          {toggleSection && <MenuSection toggleSection={toggleSection} />}
        </NavLi>
        <NavLi onClick={handleMenuClick}>
          <ModalUser />
          <UserLink currentUser={currentUser} dispatch={dispatch} />
        </NavLi>
      </NavUl>
    </Navbar>
  );
};

export default NavBar;
