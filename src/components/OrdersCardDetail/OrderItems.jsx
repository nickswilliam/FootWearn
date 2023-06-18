import { FaSortDown } from "react-icons/fa";
import {
  OrderItemCardWrapper,
  OrderItemsContainer,
  OrderItemsTitle,
} from "./OrdersCardDetailStyles";
import { useState } from "react";
import OrderItemCard from "./OrderItemCard";

const OrderItems = ({ cartItems }) => {
  const [toggleDetail, setToggleDetail] = useState(false);

  return (
    <OrderItemsContainer>
      <OrderItemsTitle onClick={() => setToggleDetail(!toggleDetail)}>
        <h2>Detalles del pedido</h2>
        <FaSortDown
          className={toggleDetail ? "rotateUpped" : "normalDown"}
          pointerEvents="none"
        />
      </OrderItemsTitle>

      {toggleDetail && (
        <OrderItemCardWrapper>
          {cartItems.map((item) => (
            <OrderItemCard key={item.id} {...item} />
          ))}
        </OrderItemCardWrapper>
      )}
    </OrderItemsContainer>
  );
};
export default OrderItems;
