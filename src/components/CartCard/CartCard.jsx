import { FaTrash } from "react-icons/fa";
import {
  BtnsQuant,
  CartCardItem,
  ImgItemCart,
  LeftCartInfo,
  MidTopText,
  PriceDiv,
  PriceText,
  PriceTextOff,
  Quantity,
  RightCartInfo,
  RightMid,
  TitleItemCart,
  PriceContains,
  DiscountOff,
  RightSizeText,
} from "./CartCardStyles";
import { useState } from "react";
import { discountOff } from "../../utils/percentaje";
import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../../redux/cartSlice/cartSice";

export const CartCard = ({
  id,
  title,
  imgs,
  price,
  quantity,
  sizeSelect,
  discount,
  description,
}) => {
  const dispatch = useDispatch();

  return (
    <CartCardItem>
      <LeftCartInfo>
        <TitleItemCart>{title}</TitleItemCart>
        <ImgItemCart src={imgs[0].img} alt={title} />
      </LeftCartInfo>

      <RightCartInfo>
        <MidTopText>Cantidad: </MidTopText>
        <RightMid>
          <BtnsQuant onClick={() => dispatch(removeToCart({id, sizeSelect}))}>
            {quantity > 1 ? (
              "-"
            ) : (
              <FaTrash color="var(--black)" pointerEvents="none" />
            )}
          </BtnsQuant>

          <Quantity>X{quantity}</Quantity>

          <BtnsQuant
            adder
            onClick={() =>
              dispatch(
                addToCart({
                  id,
                  title,
                  imgs,
                  price,
                  quantity,
                  sizeSelect,
                  discount,
                  description,
                })
              )
            }
          >
            +
          </BtnsQuant>
        </RightMid>

        <RightSizeText>Talle: {sizeSelect}</RightSizeText>
      </RightCartInfo>

      <PriceDiv>
        <p style={{color: 'var(--dark-violet)', textAlign: 'center'}}>Precio</p>

        {discount > 0 ? (
          <PriceContains>
            <PriceTextOff>${price * quantity}</PriceTextOff>
            <PriceText>${discountOff(price * quantity, discount)}</PriceText>
          </PriceContains>
        ) : (
          <PriceText>${quantity * price}</PriceText>
        )}
        {discount > 0 && <DiscountOff>{discount}% OFF</DiscountOff>}
      </PriceDiv>
    </CartCardItem>
  );
};
