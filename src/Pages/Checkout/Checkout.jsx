import { useDispatch, useSelector } from "react-redux";
import {
  BottomPriceDiv,
  CheckoutContainer,
  ContainerVertical,
  InputContainer,
  InputSubmit,
  ItemsCartContainer,
  LeftContainer,
  RightContainer,
  SubtotalDiv,
  TotalPriceDiv,
  RightTitleText,
  LoadIcon,
  CheckoutContainBG,
} from "./CheckoutStyles";

import { CartCard } from "../../components/CartCard/CartCard";
import { useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaLeaf, FaTrash } from "react-icons/fa";
import { clearCart, toggleCartMenu } from "../../redux/cartSlice/cartSice";
import { ButtonTransparent } from "../../components/UI/UIStyles";
import { useNavigate } from "react-router-dom";
import { orderStart, orderSuccess } from "../../redux/ordersSlice/ordersSlice";
import { CartBtnConfirm } from "../../components/NavBar/CartMenu/CartMenuStyles";

const Checkout = () => {
  const checkoutRef = useRef();
  const loading = useSelector((state) => state.orders.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartMenu = useSelector((state) => state.cart.cartMenu);

  const { shippingCost, cartItems } = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(4, "*Debe contener al menos 4 caracteres")
      .required("*Campo obligatorio"),
    phone: Yup.string()
      .min(10, "*Teléfono erroneo")
      .max(10, "*Teléfono incorrecto")
      .matches(/^[0-9]+$/, "*Teléfono incorrecto")
      .required("*Campo obligatorio"),
    location: Yup.string().required("*Campo obligatorio"),
    adress: Yup.string()
      .matches(/^[a-zA-Z0-9\s]*$/, "*Dirección incorrecta")
      .required("*Campo Obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      location: "",
      adress: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(orderStart());

      setTimeout(() => {
        navigate("/success");
        dispatch(orderSuccess({users: values, cartItems, shippingCost ,date: Date.now()}));
        dispatch(clearCart());
      }, 2500);
      
    },
  });

  const clearItemsToCart = () => {
    window.confirm("¿Vaciar carrito de compra?") && dispatch(clearCart());
  };

  useEffect(() => {
    document.title = "Confirmar compra";
    checkoutRef.current.scrollIntoView();
    
  });
  return (
    <CheckoutContainBG>
      <CheckoutContainer ref={checkoutRef}>
        <ContainerVertical>
          <h1>INGRESA TUS DATOS</h1>

          <LeftContainer>
            <form onSubmit={formik.handleSubmit}>
              <InputContainer>
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  placeholder="Ingrese su nombre"
                  id="name"
                  {...formik.getFieldProps("name")}
                />

                {formik.touched.name && formik.errors.name ? (
                  <p>{formik.errors.name}</p>
                ) : null}
              </InputContainer>

              <InputContainer>
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="text"
                  placeholder="Ingrese su teléfono"
                  id="phone"
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <p>{formik.errors.phone}</p>
                ) : null}
              </InputContainer>

              <InputContainer>
                <label htmlFor="location">Localidad</label>
                <input
                  type="text"
                  placeholder="Ingrese localidad"
                  id="location"
                  {...formik.getFieldProps("location")}
                />
                {formik.touched.location && formik.errors.location ? (
                  <p>{formik.errors.location}</p>
                ) : null}
              </InputContainer>

              <InputContainer>
                <label htmlFor="adress">Dirección:</label>
                <input
                  type="text"
                  placeholder="Ingrese su dirección"
                  id="adress"
                  {...formik.getFieldProps("adress")}
                />
                {formik.touched.adress && formik.errors.adress ? (
                  <p>{formik.errors.adress}</p>
                ) : null}
              </InputContainer>

              <InputSubmit>
                <button type="submit" disabled={!cartItems.length || loading}>
                  {!loading ? "Confirmar pedido" : <LoadIcon />}
                </button>
              </InputSubmit>
            </form>
          </LeftContainer>
        </ContainerVertical>

        <ContainerVertical>
          <RightTitleText>TU PEDIDO ACTUAL: </RightTitleText>
          <RightContainer>
            {!cartItems.length ? null : (
              <CartBtnConfirm
                style={{ alignSelf: "center", width: '95%'}}
                onClick={clearItemsToCart}
                title="Vaciar carrito"
              >
                <FaTrash pointerEvents="none" color="var(--black)" size="22px" />
                Vaciar carrito
              </CartBtnConfirm>
            )}
            <ItemsCartContainer>
              {!cartItems.length ? (
                <h4>*Realizá un pedido*</h4>
              ) : (
                cartItems.map((item) => <CartCard key={item.id} {...item} />)
              )}
            </ItemsCartContainer>

            <BottomPriceDiv>
              <SubtotalDiv>
                <p>Subtotal:</p>
                <span>${totalPrice}</span>
              </SubtotalDiv>

              <SubtotalDiv>
                <p>Envío:</p>
                <span>${shippingCost}</span>
              </SubtotalDiv>

              <TotalPriceDiv>
                <h4>Total:</h4>
                <span>${totalPrice + shippingCost}</span>
              </TotalPriceDiv>
            </BottomPriceDiv>
          </RightContainer>
        </ContainerVertical>
      </CheckoutContainer>
    </CheckoutContainBG>
  );
};
export default Checkout;
