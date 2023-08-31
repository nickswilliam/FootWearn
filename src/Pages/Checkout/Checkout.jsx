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
import { FaTrash } from "react-icons/fa";
import { clearCart } from "../../redux/cartSlice/cartSice";
import { useNavigate } from "react-router-dom";
import { CartBtnConfirm } from "../../components/NavBar/CartMenu/CartMenuStyles";
import { createOrders } from "../../axios/axiosOrders";

const Checkout = () => {
  const checkoutRef = useRef();
  const loading = useSelector((state) => state.orders.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const { shippingCost, cartItems } = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );
  const totalCartItemsQuantity = cartItems.reduce(
    (acc, item) => (acc += item.quantity),
    0
  );
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(4, "*Debe contener al menos 4 caracteres")
      .required("*Campo obligatorio"),
    cellphone: Yup.string()
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
      cellphone: "",
      location: "",
      adress: "",
    },
    validationSchema,
    onSubmit: async(values) => {
      const orderData = {
        cartItems,
        price: totalPrice,
        shippingCost,
        total: (totalPrice + shippingCost),
        shippingDetails: {...values}
      }
      try {
        await createOrders(orderData, dispatch, currentUser)
        navigate("/success")
        dispatch(clearCart())
      } catch (error) {
        alert('Algo salió mal al crear la orden')
      }
    },
  });

  const clearItemsToCart = () => {
    window.confirm("¿Vaciar carrito de compra?") && dispatch(clearCart());
  };

  useEffect(() => {
    document.title =
      `${totalCartItemsQuantity >= 1 ? `(${totalCartItemsQuantity}) ` : ""}` +
      "Confirmar compra";
    checkoutRef.current.scrollIntoView();
  }, []);
  return (
    <CheckoutContainBG ref={checkoutRef}>
      <CheckoutContainer>
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
                  id="cellphone"
                  {...formik.getFieldProps("cellphone")}
                />
                {formik.touched.cellphone && formik.errors.cellphone ? (
                  <p>{formik.errors.cellphone}</p>
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
                style={{ alignSelf: "center", width: "95%" }}
                onClick={clearItemsToCart}
                title="Vaciar carrito"
              >
                <FaTrash
                  pointerEvents="none"
                  color="var(--black)"
                  size="22px"
                />
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
              {cartItems.length >= 1 && (
                <>
                  <SubtotalDiv>
                    <p>Subtotal:</p>
                    <span>${totalPrice}</span>
                  </SubtotalDiv>

                  <SubtotalDiv>
                    <p>Envío:</p>
                    <span>${shippingCost}</span>
                  </SubtotalDiv>
                </>
              )}

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
