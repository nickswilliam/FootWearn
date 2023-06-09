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
        <h3 style={{ fontSize: "22px" }}>{brand.toUpperCase()}</h3>
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
        <SelectSizeProduct size={size}/>

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
