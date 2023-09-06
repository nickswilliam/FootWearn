import { VerifyContainer } from "./VerifyStyles";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { verifyUser } from "../../axios/axiosUser";
import { useDispatch, useSelector } from "react-redux";
import { setVerified } from "../../redux/user/userSlice";
import { InputsVerify } from "./VerifyStyles";
import { LoadIcon } from "../Checkout/CheckoutStyles";
import { useNavigate } from "react-router-dom";
import { toggleCartMenu } from "../../redux/cartSlice/cartSice";

const Verify = () => {
  const verifyRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {cartMenu} = useSelector(state=> state.cart)
  useEffect(() => {
    document.title = "Verificar cuenta";
    verifyRef.current.scrollIntoView();
    if(cartMenu){
      dispatch(toggleCartMenu())
    }
  }, []);

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("*Email inválido")
      .required("*El email es obligatorio"),
    code: Yup.string()
      .min(4, "*El código debe ser de 6 caracteres")
      .required("*El código es obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      code: "",
    },
    validationSchema,
    onSubmit: async (values, actions) => {
      setLoading(!loading);
      const verifiedUser = await verifyUser(values.email, values.code);

      if (typeof verifiedUser === "string") {
        setLoading(false);
        setMsg(`*${verifiedUser}`);
        actions.resetForm();
        return;
      } else {
        setLoading(false);
        dispatch(setVerified());
        actions.resetForm();
        setMsg(null);
        navigate('/')
        return;
      }
    },
  });
  return (
    <VerifyContainer ref={verifyRef}>
      <h1>Verificar cuenta:</h1>
      <span>{msg}</span>
      <form onSubmit={formik.handleSubmit}>
        <InputsVerify>
          <label htmlFor="email">Email del usuario: </label>
          <input
            type="email"
            placeholder="Ingrese email"
            id="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched["email"] && formik.errors["email"] ? (
            <p>{formik.errors["email"]}</p>
          ) : null}
        </InputsVerify>

        <InputsVerify>
          <label htmlFor="code">Codigo de Verificación: </label>
          <input
            type="text"
            placeholder="Ingrese el código"
            id="code"
            {...formik.getFieldProps("code")}
          />
          {formik.touched["code"] && formik.errors["code"] ? (
            <p>{formik.errors["code"]}</p>
          ) : null}
        </InputsVerify>

        <button type="submit" disabled={loading}>
          {!loading ? "Verificar" : <LoadIcon />}
        </button>
      </form>
    </VerifyContainer>
  );
};
export default Verify;
