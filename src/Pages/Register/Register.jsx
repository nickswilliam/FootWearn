import { useEffect, useRef, useState } from "react";
import {
  LoadIcon,
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
} from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useRedirect } from "../../hooks/useRedirect";
import { createUser } from "../../axios/axiosUser";


const Register = () => {
  useEffect(() => {
    document.title = "Registro";
    registerRef.current.scrollIntoView();
  }, []);


  const dispatch = useDispatch();
  const { state } = useLocation();
  useRedirect(state?.redirectedFromCheckout ? "/checkout" : "/");
  const registerRef = useRef();
  const [toggleRegister, setToggleRegister] = useState(false);
  const [toggleMsg, setToggleMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false)

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
      header: ""
    },
    validationSchema,
    onSubmit: async(values, actions) => {
      registerRef.current.scrollIntoView();
      setIsLoading(!isLoading)
      const user = await createUser(
        values.name,
        values.lastname,
        values.email,
        values.password,
        values.header
      )
      
      if(typeof user === "string") {
        setToggleRegister(!toggleRegister)
        setIsLoading(false)
        setToggleMsg(`*${user}`)
        return;
      } else {
        dispatch(setCurrentUser({
          ...user.user,
          token: user.token
        }));  
        setToggleRegister(false);        
        actions.resetForm();
        return;
      }
    },
  });

  return (
    <RegisterWrapper ref={registerRef}>
      <RegisterTitle>REGISTRATE</RegisterTitle>
      {toggleRegister && (
        <h2
          style={{ color: "var(--red)", fontSize: "20px", textAlign: "center" }}
        >
          {toggleMsg}
        </h2>
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
        <div style={{display: "flex", width: "100%", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
        <RegisterLabel htmlFor="header" style={{alignSelf: "flex-start", fontSize: "14px", width: "50%", marginTop: "20px"}}>Posee clave admin? </RegisterLabel>
        <RegisterInput type="text" id="header"{...formik.getFieldProps("header")} style={{fontSize: "14px", width: "50%"}}/>
        </div>

        <button type="submit" disabled={isLoading}>{!isLoading? 'Registrarse' : <LoadIcon/>}</button>
        <p>
          ¿Ya tienes una cuenta?<Link to="/login">Inicia sesión</Link>
        </p>
      </RegisterForm>
    </RegisterWrapper>
  );
};
export default Register;
