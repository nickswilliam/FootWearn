import { useSelector } from "react-redux";
import OrderName from "./OrderName";
import OrderItems from "./OrderItems";
import { OrderCardDetailContainer } from "./OrdersCardDetailStyles";

const OrdersCardDetail = () => {
  const selectedOrder = useSelector((state) => state.orders.selectedOrder);
  return (
    <OrderCardDetailContainer>
      {selectedOrder && (
        <>
          <OrderName {...selectedOrder} />
          <OrderItems {...selectedOrder} />
        </>
      )}
    </OrderCardDetailContainer>
  );
};
export default OrdersCardDetail;
