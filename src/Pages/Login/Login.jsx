import { useEffect, useRef, useState } from "react";
import {
  LoginBtn,
  LoginContainInput,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginTitle,
  LoginWrapper,
} from "./LoginStyles";
import { Link } from "react-router-dom";
import { login } from "../../data/login";
import { useFormik } from "formik";
import { regEmail } from "../../utils/regExp";
import * as Yup from "yup";
import { useRedirect } from "../../hooks/useRedirect";
import { loginUser } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
    loginRef.current.scrollIntoView();
  }, []);
  useRedirect("/");
  const loginRef = useRef();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState(null);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("*E-mail inválido")
      .matches(regEmail)
      .required("*Campo obligatorio"),
    password: Yup.string().required("*Debe ingresar una contraseña"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, actions) => {
      dispatch(loginUser({ email: values.email, password: values.password }));
      actions.resetForm();
      !currentUser ? setErrorMsg('*E-mail o contraseña incorrectos') : null
    },
  });

  return (
    <LoginWrapper ref={loginRef}>
      <LoginTitle>INICIO DE SESIÓN</LoginTitle>
      <h2 style={{color: 'var(--red)'}}>{errorMsg}</h2>
      <LoginForm onSubmit={formik.handleSubmit}>
        {login.map((item) => (
          <LoginContainInput key={item.id}>
            <LoginLabel htmlFor={item.name}>{item.label}</LoginLabel>
            <LoginInput
              type={item.type}
              id={item.name}
              placeholder={item.placeholder}
              {...formik.getFieldProps(`${item.name}`)}
            />

            {formik.touched[item.name] && formik.errors[item.name] ? (
              <p>{formik.errors[item.name]}</p>
            ) : null}
          </LoginContainInput>
        ))}

        <LoginBtn value="Ingresá" type="submit" />
        <p>
          ¿No tienes una cuenta? <Link to="/register">Registrate</Link>
        </p>
      </LoginForm>
    </LoginWrapper>
  );
};
export default Login;
