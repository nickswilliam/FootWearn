import { useSelector } from "react-redux";
import { ADMIN } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { LoadIcon } from "../Checkout/CheckoutStyles";
import { createIssue } from "../../axios/axiosIssue";
import { IssuesContainer, IssueContainer, Inputcontainer } from "./IssuesStyles";

const Issues = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const issuesRef = useRef()

  useEffect(() => {
    document.title = "Crear reportes";
    issuesRef.current.scrollIntoView();
  }, []);

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  const validationSchema = Yup.object({
    title: Yup.string().required("*El título es requerido"),
    description: Yup.string().required("*La descripción es obligatoria"),
    priority: Yup.number().required("*El número de prioridad es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      priority: "",
    },
    validationSchema,
    onSubmit: async (values, actions) => {
      setLoading(!loading);
      setMsg(null)
      const issue = await createIssue(values.title, values.description, values.priority, currentUser)

      if(typeof issue === 'string'){
        setLoading(false)
        setMsg(`*${issue}`) 
        return;
      } else{
        setLoading(false)
        setMsg("Inconveniente reportado Exitosamente")
        actions.resetForm();
        return;
      }
    },
  });
  return (
    currentUser && (
      <IssuesContainer ref={issuesRef}>
        {currentUser.rol !== ADMIN ? (
          <IssueContainer>
            <h1>No contas con los permisos necesarios para esta sección.</h1>
            <button onClick={() => navigate("/")}>Volver a Inicio</button>
          </IssueContainer>
        ) : currentUser.rol === ADMIN && !currentUser.verified ? (
          <IssueContainer>
            <h1>Debes verificar la cuenta primero para generar un reporte</h1>
            <button onClick={() => navigate("/verify")}>
              Verificar cuenta
            </button>
          </IssueContainer>
        ) : (
          <IssueContainer>
            <h1>Crear reporte:</h1>
            <h2>{msg}</h2>
            <form onSubmit={formik.handleSubmit}>
              <Inputcontainer>
                <label htmlFor="title">Titulo:</label>
                <input
                  type="text"
                  placeholder="Ingrese un titulo"
                  id="title"
                  {...formik.getFieldProps("title")}
                />
                {formik.touched["title"] && formik.errors["title"] ? (
                  <p>{formik.errors["title"]}</p>
                ) : null}
              </Inputcontainer>


              <Inputcontainer>
                <label htmlFor="description">Descripción:</label>
                <input
                  type="text"
                  placeholder="Ingrese una descripción"
                  id="description"
                  {...formik.getFieldProps("description")}
                />
                {formik.touched["description"] && formik.errors["description"] ? (
                  <p>{formik.errors["description"]}</p>
                ) : null}
              </Inputcontainer>


              <Inputcontainer>
                <label htmlFor="priority">Prioridad:</label>
                <input
                  type="number"
                  placeholder="Ingrese N° de prioridad"
                  id="priority"
                  {...formik.getFieldProps("priority")}
                />
                {formik.touched["priority"] && formik.errors["priority"] ? (
                  <p>{formik.errors["priority"]}</p>
                ) : null}
              </Inputcontainer>

              <button type="submit">{!loading? 'Reportar errores' : <LoadIcon/>}</button>
            </form>
          </IssueContainer>
        )}
      </IssuesContainer>
    )
  );
};
export default Issues;
