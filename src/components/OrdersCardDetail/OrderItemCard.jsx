import { OrderItemCardContainer, OrderItemMid } from "./OrdersCardDetailStyles";
import { discountOff } from "../../utils/percentaje";

const OrderItemCard = ({
  id,
  title,
  price,
  discount,
  size,
  description,
  quantity,
}) => {
  return (
    <OrderItemCardContainer>
      <h3>{title}</h3>

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
