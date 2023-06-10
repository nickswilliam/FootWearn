import {
  LeftBottomContainer,
  LeftCardOrderContainer,
  OrderItemCardContainer,
  OrderItemMid,
} from "./OrdersCardDetailStyles";
import { discountOff } from "../../utils/percentaje";

const OrderItemCard = ({
  id,
  title,
  price,
  imgs,
  discount,
  sizeSelect,
  description,
  quantity,
}) => {
  return (
    <OrderItemCardContainer>
      <LeftCardOrderContainer>
        <h3>{title}</h3>

        <LeftBottomContainer>
          <img src={imgs[0].img} alt={title} />
          <p>
            Talle: <b>{sizeSelect}</b>
          </p>
        </LeftBottomContainer>
      </LeftCardOrderContainer>

      <OrderItemMid>
        <p>Cantidad</p>
        <span>X {quantity}</span>
      </OrderItemMid>

      <OrderItemMid>
        <p>Precio:</p>
        <span>${discountOff(price, discount)}</span>
      </OrderItemMid>
    </OrderItemCardContainer>
  );
};
export default OrderItemCard;
