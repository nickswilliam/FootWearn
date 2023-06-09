import { useDispatch, useSelector } from "react-redux";
import {
  LeftContainer,
  NoOrderText,
  OrderBGContainer,
  OrdersContainer,
  OrdersLists,
  RightContainer,
} from "./OrdersStyles";
import OrdersCardResume from "../../components/OrdersCardResume/OrdersCardResume";
import { useEffect, useRef, useState } from "react";
import OrdersCardDetail from "../../components/OrdersCardDetail/OrdersCardDetail";
import { FaBroom } from "react-icons/fa";
import { clearOrders } from "../../redux/ordersSlice/ordersSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const ordersRef = useRef()
  const ordersList = useSelector((state) => state.orders.ordersList);
  useEffect(() => {
    document.title = "Mis Ordenes";
    ordersRef.current.scrollIntoView()
  }, []);

  const [toggleDetail, setToggleDetail] = useState(false);

  const handleClean = () => {
    window.confirm("¿Desea vaciar el historial?") && dispatch(clearOrders());
  };
  return (
    <OrderBGContainer ref={ordersRef}>
      <OrdersContainer>
        <LeftContainer>
          <h1>HISTORIAL DE PEDIDOS:</h1>

          {!ordersList.length ? null : (
            <button onClick={handleClean}>
              <FaBroom /> Limpiar el historial
            </button>
          )}

          <OrdersLists>
            {!ordersList.length ? (
              <NoOrderText>No hay ninguna orden registrada.</NoOrderText>
            ) : (
              ordersList.map((order) => (
                <OrdersCardResume
                  key={order.orderID}
                  {...order}
                  setToggleDetail={setToggleDetail}
                  toggleDetail={toggleDetail}
                />
              ))
            )}
          </OrdersLists>
        </LeftContainer>

        <RightContainer>
          {toggleDetail && ordersList.length >= 1 && (
            <OrdersLists>
              <OrdersCardDetail />
            </OrdersLists>
          )}
        </RightContainer>
      </OrdersContainer>
    </OrderBGContainer>
  );
};
export default Orders;
