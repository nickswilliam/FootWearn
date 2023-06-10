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
} from "./HeaderStyles";
import Logo from "../../assets/imgs/logo/logo.png";
import SearchBar from "../UI/SearchBar";
import NavBar from "../NavBar/NavBar";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import CartMenu from "../NavBar/CartMenu/CartMenu";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartMenu } from "../../redux/cartSlice/cartSice";
import { toggleHiddenMenu } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { cartMenu, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  const totalCartItemsQuantity = cartItems.reduce(
    (acc, item) => (acc += item.quantity),
    0
  );
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleCart = () => {
    dispatch(toggleCartMenu());
  };

  return (
    <HeaderContainer>
      <ImgLogo src={Logo} alt="logo" onClick={() => navigate("/")} />

      <SearchBar />

      <NavWrapper>
        <ToggleMenuBtn onClick={() => setToggleMenu(!toggleMenu)}>
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
