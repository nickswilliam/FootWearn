import { Route, Routes as RoutesReact } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Checkout from "../Pages/Checkout/Checkout";
import Success from "../Pages/Success/Success";
import Orders from "../Pages/Orders/Orders";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import NotFound from "../Pages/NotFound/NotFound";
import Verify from "../Pages/Verify/Verify";
import Issues from "../Pages/Issues/Issues";
const Routes = () => {
  return (
    <RoutesReact>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/success"
        element={
          <ProtectedRoute redirectTo="/login">
            <Success />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute redirectTo="/login">
            <Orders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/checkout"
        element={
          <ProtectedRoute redirectTo="/login">
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/verify"
        element={
          <ProtectedRoute redirectTo="/login">
            <Verify />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />

      <Route
        path="/issues"
        element={
          <ProtectedRoute redirectTo="/login">
            <Issues />
          </ProtectedRoute>
        }
      />
    </RoutesReact>
  );
};
export default Routes;
