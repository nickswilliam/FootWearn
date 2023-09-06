import { useSelector } from "react-redux";
import { ADMIN } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { LoadIcon } from "../Checkout/CheckoutStyles";
import { createIssue } from "../../axios/axiosIssue";

const Issues = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Crear reportes";
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
      <div>
        {currentUser.rol !== ADMIN ? (
          <div>
            <p>No contas con los permisos necesarios para esta sección.</p>
            <button onClick={() => navigate("/")}>Volver a Inicio</button>
          </div>
        ) : currentUser.rol === ADMIN && !currentUser.verified ? (
          <div>
            <p>Debes verificar la cuenta primero, para generar un reporte</p>
            <button onClick={() => navigate("/verify")}>
              Verificar cuenta
            </button>
          </div>
        ) : (
          <div>
            <h1>Crear reporte:</h1>
            <h2>{msg}</h2>
            <form onSubmit={formik.handleSubmit}>
              <div>
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
              </div>


              <div>
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
              </div>


              <div>
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
              </div>

              <button type="submit">{!loading? 'Reportar errores' : <LoadIcon/>}</button>
            </form>
          </div>
        )}
      </div>
    )
  );
};
export default Issues;
