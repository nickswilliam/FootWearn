import { useEffect, useRef, useState } from "react";
import {
  RegisterBtn,
  RegisterContainInput,
  RegisterForm,
  RegisterInput,
  RegisterLabel,
  RegisterTitle,
  RegisterWrapper,
} from "./RegisterStyles";
import { register } from "../../data/register";
import { Link, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { regEmail } from "../../utils/regExp";
import * as Yup from "yup";
import {
  setCurrentUser,
  addNewUser,
  userExist,
} from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRedirect } from "../../hooks/useRedirect";
import { current } from "@reduxjs/toolkit";

const Register = () => {
  useEffect(() => {
    document.title = "Registro";
    registerRef.current.scrollIntoView();
  }, []);

  const { isUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { state } = useLocation();
  useRedirect(state?.redirectedFromCheckout ? "/checkout" : "/");
  const registerRef = useRef();
  const [toggleRegister, setToggleRegister] = useState(false);
  const [toggleMsg, setToggleMsg] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(4, "*Debe contener al menos 4 caracteres")
      .required("*Campo obligatorio"),

    lastname: Yup.string()
      .min(4, "*Debe contener al menos 4 caracteres")
      .required("*Campo obligatorio"),
    email: Yup.string()
      .email("*E-mail inválido")
      .matches(regEmail)
      .required("*Campo obligatorio"),

    password: Yup.string()
      .min(8, "*Debe contener al menos 8 caracteres")
      .required("*La contraseña es obligatoria"),
    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "*Las contraseñas deben coincidir")
      .required("*Campo obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
    },
    validationSchema,
    onSubmit: (values, actions) => {
      dispatch(userExist(values.email));
      console.log(isUser, 'existe?');
      if (isUser) {
        dispatch(setCurrentUser(null));
        setToggleRegister(!toggleRegister)
        setToggleMsg("*El mail corresponde a un usuario existente");

        setTimeout(()=>{
          setToggleRegister(false)
        }, 2500)
        return;
      } else {
        dispatch(setCurrentUser(values));
        dispatch(addNewUser(values));
        actions.resetForm();
        setToggleMsg("Registro Exitoso");
        setToggleRegister(!toggleRegister);
      }
    },
  });

  return (
    <RegisterWrapper ref={registerRef}>
      <RegisterTitle>REGISTRATE</RegisterTitle>
      {toggleRegister && (
        <h2 style={{ color: "var(--red)" }}>{toggleMsg}</h2>
      )}
      <RegisterForm onSubmit={formik.handleSubmit}>
        {register.map((item) => (
          <RegisterContainInput key={item.id}>
            <RegisterLabel htmlFor={item.name}>{item.label}</RegisterLabel>
            <RegisterInput
              type={item.type}
              id={item.name}
              placeholder={item.placeholder}
              {...formik.getFieldProps(`${item.name}`)}
            />
            {formik.touched[item.name] && formik.errors[item.name] ? (
              <p>{formik.errors[item.name]}</p>
            ) : null}
          </RegisterContainInput>
        ))}
        <RegisterBtn type="submit" value="Confirmar registro" />

        <p>
          ¿Ya tienes una cuenta?<Link to="/login">Inicia sesión</Link>
        </p>
      </RegisterForm>
    </RegisterWrapper>
  );
};
export default Register;
