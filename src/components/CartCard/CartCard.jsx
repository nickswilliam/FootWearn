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
  RightBottom,
  RightCartInfo,
  RightMid,
  TitleItemCart,
  TopRightInfo,
  PriceContains,
  DiscountOff,
  RightDiv,
  RightSizeText,
  RightSelect,
  RightOption,
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
  size,
  discount,
  description,
}) => {
  const dispatch = useDispatch();

  return (
    <CartCardItem>
      <LeftCartInfo>
        <ImgItemCart src={imgs[0].img} alt={title} />
        <TitleItemCart>{title}</TitleItemCart>
      </LeftCartInfo>

      <RightCartInfo>
        <TopRightInfo>{description}</TopRightInfo>

        <MidTopText>Cantidad: </MidTopText>
        <RightMid>
          <BtnsQuant onClick={() => dispatch(removeToCart(id))}>
            {quantity > 1 ? (
              "-"
            ) : (
              <FaTrash color="var(--white)" pointerEvents="none" />
            )}
          </BtnsQuant>

          <Quantity>{quantity}</Quantity>

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
                  size,
                  discount,
                  description,
                })
              )
            }
          >
            +
          </BtnsQuant>
        </RightMid>

        <RightBottom>
          <PriceDiv>
            Precio: $
            {discount > 0 ? (
              <PriceContains>
                <PriceTextOff>${price * quantity}</PriceTextOff>
                <PriceText>{discountOff(price * quantity, discount)}</PriceText>
              </PriceContains>
            ) : (
              <PriceText>{quantity * price}</PriceText>
            )}
            {discount > 0 && <DiscountOff>{discount}% OFF</DiscountOff>}
          </PriceDiv>
        </RightBottom>
      </RightCartInfo>

      <RightDiv>
        <RightSizeText>Talle: </RightSizeText>

        <RightSelect>
          {size.map((item) => (
            <RightOption key={id} value={item.value} disabled={!item.available}>
              {item.value}
            </RightOption>
          ))}
        </RightSelect>
      </RightDiv>
    </CartCardItem>
  );
};
