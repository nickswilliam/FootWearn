import CardProductSlide from "./CardProductSlide/CardProductSlide";
import {
  BtnAddToCart,
  CardProductBottomContainer,
  CardProductContainer,
  CardProductMidContainer,
  CardProductPrices,
} from "./CardProductStyles";
import { discountOff } from "../../../utils/percentaje";
import SelectSizeProduct from "./SelectSizeProduct/SelectSizeProduct";
import { addToCart } from "../../../redux/cartSlice/cartSice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ButtonTransparent } from "../../UI/UIStyles";

const CardProduct = ({
  id,
  title,
  imgs,
  price,
  size,
  brand,
  quantity,
  discount,
  description,
}) => {
  const dispatch = useDispatch();

  return (
    <CardProductContainer>
      <CardProductSlide imgs={imgs} title={title} />

      <CardProductMidContainer>
        <ButtonTransparent
          style={{ alignSelf: "flex-start" }}
          onClick={() =>
            console.log({
              id,
              title,
              imgs,
              price,
              size,
              brand,
              quantity,
              discount,
              description,
            })
          }
        >
          <h3 style={{ fontSize: "22px", pointerEvents: "none" }}>
            {brand.toUpperCase()}
          </h3>
        </ButtonTransparent>
        <p>{description}</p>

        <CardProductPrices>
          {discount === 0 ? (
            <h3>${price}</h3>
          ) : (
            <CardProductPrices>
              <h3>${discountOff(price, discount)}</h3>
              <span>${price}</span>
              <p>{discount}% OFF</p>
            </CardProductPrices>
          )}
        </CardProductPrices>
      </CardProductMidContainer>

      <CardProductBottomContainer>
        <p>Talles disponibles:</p>
        <SelectSizeProduct size={size} />

        <BtnAddToCart
          onClick={() => {
            dispatch(
              addToCart({
                id,
                title,
                imgs,
                price,
                size,
                brand,
                quantity,
                discount,
                description,
              })
            );
          }}
        >
          Agregar al carrito
        </BtnAddToCart>
      </CardProductBottomContainer>
    </CardProductContainer>
  );
};
export default CardProduct;
