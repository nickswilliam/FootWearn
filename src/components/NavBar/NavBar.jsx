import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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

const MenuSection = ({ toggleSection, handleMenu }) => (
  <LiMenu className={toggleSection ? "openedSection" : "closedSection"}>
    <MenuItem onClick={handleMenu}>
      <MenuItemText to="/#hero">
        <FaPhotoVideo />
        Galeria
      </MenuItemText>
    </MenuItem>
    <MenuItem onClick={handleMenu}>
      <MenuItemText to="/#products">
        <FaStore />
        Productos
      </MenuItemText>
    </MenuItem>
    <MenuItem onClick={handleMenu}>
      <MenuItemText to="/#about">
        <FaQuestion />
        Acerca
      </MenuItemText>
    </MenuItem>
    <MenuItem onClick={handleMenu}>
      <MenuItemText to="/#contact">
        <FaPhone />
        Contacto
      </MenuItemText>
    </MenuItem>
  </LiMenu>
);

const NavBar = ({ toggleMenu, setToggleMenu, toggleSearchMenu }) => {
  const { cartMenu } = useSelector((state) => state.cart);
  const { currentUser, hiddenMenu } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [toggleSection, setToggleSection] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSection = () => {
    if (!hiddenMenu) {
      dispatch(toggleHiddenMenu());
    }
    setToggleSection(!toggleSection);
  };

  const handleMenuClick = () => {
    if (currentUser) {
      if (toggleSection) {
        setToggleSection(!toggleSection);
      }
      dispatch(toggleHiddenMenu());
    } else {
      navigate("/register");
    }
  };

  useEffect(() => {
    if (toggleSection) {
      setToggleSection(!toggleSection);
    }
  }, [pathname, toggleSearchMenu, !cartMenu]);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <Navbar toggleMenu={toggleMenu} toggleSearchMenu={toggleSearchMenu}>
      <NavUl>
        <NavLi onClick={handleMenu}>
          <StyledNavLink to="/">Inicio</StyledNavLink>
        </NavLi>
        <NavLi onClick={handleSection}>
          Secciones
          <FaSortDown className={!toggleSection ? "normal" : "rotateUp"} />
          {toggleSection && (
            <MenuSection
              toggleSection={toggleSection}
              handleMenu={handleMenu}
              toggleSearchMenu={toggleSearchMenu}
            />
          )}
        </NavLi>
        <NavLi onClick={handleMenuClick}>
          <ModalUser toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

          <FaUser
            size="18px"
            color={currentUser ? "var(--blue-light)" : "var(--black)"}
          />
          {currentUser ? (
            <p style={{ color: "var(--blue-light)" }}>
              {currentUser.name.toUpperCase().charAt(0) +
                currentUser.lastname.toUpperCase().charAt(0)}
            </p>
          ) : (
            "Registro"
          )}
        </NavLi>
      </NavUl>
    </Navbar>
  );
};

export default NavBar;
