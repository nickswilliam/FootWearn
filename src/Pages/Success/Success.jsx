import {
  SuccesDivider,
  SuccesOrder,
  SuccessContainer,
  SuccessIcon,
  SuccessBtns,
} from "./SuccessStyles";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DingDong from "../../audio/dingdong.mp3";

const Success = () => {
  useEffect(() => {
    const sound = new Audio(DingDong);
    sound.play();
    document.title = "¡Compra Exitosa!";
    successRef.current.scrollIntoView();
  }, []);

  const orderID = useSelector((state) => state.orders.orderID);
  const successRef = useRef();

  const navigate = useNavigate();
  return (
    <SuccessContainer ref={successRef}>
      <h1>¡GRACIAS POR TU COMPRA!</h1>

      <SuccesDivider>
        <SuccessIcon />
        <h2>Pedido realizado con éxito</h2>
      </SuccesDivider>

      <SuccesOrder>
        <h3>Nro de Orden: </h3>
        <span>#{orderID}</span>
      </SuccesOrder>

      <SuccessBtns>
        <button onClick={() => navigate("/#products")}>Seguir comprando</button>

        <button onClick={() => navigate("/orders")}>Mis ordenes</button>
      </SuccessBtns>
    </SuccessContainer>
  );
};
export default Success;
