import { Route, Routes as RoutesReact } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Checkout from "../Pages/Checkout/Checkout";
import Success from "../Pages/Success/Success";
import Orders from "../Pages/Orders/Orders";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
const Routes = () => {
  return (
    <RoutesReact>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/success" element={<Success />} />
      <Route path="/orders" element={<Orders />} />

      <Route
        path="/checkout"
        element={
          <ProtectedRoute redirectTo="/register">
            <Checkout />
          </ProtectedRoute>
        }
      />
    </RoutesReact>
  );
};
export default Routes;
