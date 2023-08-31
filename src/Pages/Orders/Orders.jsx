import { useDispatch, useSelector } from "react-redux";
import {
  LeftContainer,
  NoOrderText,
  OrderBGContainer,
  OrdersContainer,
  OrdersListWrapper,
  OrdersLists,
  RightContainer,
} from "./OrdersStyles";
import OrdersCardResume from "../../components/OrdersCardResume/OrdersCardResume";
import { useEffect, useRef, useState } from "react";
import OrdersCardDetail from "../../components/OrdersCardDetail/OrdersCardDetail";
import { getOrders } from "../../axios/axiosOrders";
import {
  clearError,
  fetchOrderFail,
} from "../../redux/ordersSlice/ordersSlice";
import { LoadIcon } from "../Checkout/CheckoutStyles";

const Orders = () => {
  const ordersRef = useRef();
  const { orders, error } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser);
    } else if (!currentUser?.token) {
      dispatch(fetchOrderFail());
    } else {
      error && dispatch(clearError());
    }
    document.title = "Mis Ordenes";
    ordersRef.current.scrollIntoView();
  }, [dispatch, currentUser?.token, orders, error]);

  const [toggleDetail, setToggleDetail] = useState(false);
  const { loading } = useSelector((state) => state.orders);
  return (
    <OrderBGContainer ref={ordersRef}>
      <OrdersContainer>
        <LeftContainer>
          <h1>HISTORIAL DE PEDIDOS:</h1>

          <OrdersLists>
            {!orders && loading ? (
              <LoadIcon style={{ fontSize: "35px", color: 'var(--orange)', alignSelf: "center", marginTop: '20px' }} />
            ) : !orders?.length ? (
              <NoOrderText>No hay ninguna orden registrada.</NoOrderText>
            ) : (
              <OrdersListWrapper>
                {orders.map((order) => (
                  <OrdersCardResume
                    key={order.orderID}
                    {...order}
                    setToggleDetail={setToggleDetail}
                    toggleDetail={toggleDetail}
                  />
                ))}
              </OrdersListWrapper>
            )}
          </OrdersLists>
        </LeftContainer>

        <RightContainer>
          {toggleDetail && orders.length >= 1 && (
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
