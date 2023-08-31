import { FaMapPin, FaMapSigns, FaPhone } from "react-icons/fa";
import {
  OrderNameBot,
  OrderNameContainer,
  OrderNameMid,
  OrderNameText,
} from "./OrdersCardDetailStyles";

const OrderName = ({ shippingDetails, orderID }) => {
  return (
    <OrderNameContainer>
      <h2>Pedido #{orderID} realizado por:</h2>
      <OrderNameText>{shippingDetails.name}</OrderNameText>

      <OrderNameMid>
        <FaPhone color="var(--dark-violet)" />
        <p>
          <b>Teléfono:</b> {shippingDetails.cellphone}
        </p>
        <FaMapSigns color="var(--dark-violet)" />
        <span>
          <b>Localidad:</b> {shippingDetails.location}
        </span>
      </OrderNameMid>

      <OrderNameBot>
        <FaMapPin color="var(--dark-violet)"/>
        <p>Dirección: {shippingDetails.adress}</p>
      </OrderNameBot>
    </OrderNameContainer>
  );
};
export default OrderName;
