import {
  ButtonCart,
  Cart,
  CartBubble,
  HeaderContainer,
  Overlay,
  UserNavLink,
  ImgLogo,
  ToggleMenuBtn,
  NavWrapper,
  SearchWrapper,
  SearchBtn,
} from "./HeaderStyles";
import Logo from "../../assets/imgs/logo/logo.png";
import LogoMobile from "../../assets/imgs/footer/footw-logo.png";
import SearchBar from "../UI/SearchBar";
import NavBar from "../NavBar/NavBar";
import { FaBars, FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import CartMenu from "../NavBar/CartMenu/CartMenu";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartMenu } from "../../redux/cartSlice/cartSice";
import { toggleHiddenMenu } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { cartMenu, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  const totalCartItemsQuantity = cartItems.reduce(
    (acc, item) => (acc += item.quantity),
    0
  );
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearchMenu, setToggleSearchMenu] = useState(false);

  const inputRef = useRef(null);
  const handleCart = () => {
    dispatch(toggleCartMenu());
  };

  return (
    <HeaderContainer>
      {isMobile ? (
        <ImgLogo src={LogoMobile} alt="logo-mobile" onClick={() => navigate("/")} />
      ) : (
        <ImgLogo src={Logo} alt="logo" onClick={() => navigate("/")} />
      )}

      <SearchBar
        setToggleSearchMenu={setToggleSearchMenu}
        toggleSearchMenu={toggleSearchMenu}
        ref={inputRef}
      />

      <NavWrapper>
        <SearchBtn
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
            setToggleSearchMenu(!toggleSearchMenu);
          }}
        >
          <FaSearch pointerEvents="none" size="25px" />
        </SearchBtn>

        <ToggleMenuBtn
          className="menu_toggle"
          onClick={(e) => setToggleMenu(!toggleMenu)}
        >
          <FaBars size="25px" pointerEvents="none" />
        </ToggleMenuBtn>

        <ButtonCart onClick={handleCart} title={cartMenu && "Abrir carrito"}>
          <CartBubble>{totalCartItemsQuantity}</CartBubble>
          <Cart />
        </ButtonCart>
      </NavWrapper>
      <NavBar toggleMenu={toggleMenu} />
      <CartMenu />
      {cartMenu && <Overlay onClick={handleCart} />}
    </HeaderContainer>
  );
};
export default Header;
