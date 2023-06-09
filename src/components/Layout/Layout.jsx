import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { LayoutContainer } from "./LayoutStyles";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenMenu } from "../../redux/user/userSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const hiddenMenu = useSelector((state) => state.user.hiddenMenu);
  const { pathname } = useLocation();
  useEffect(() => {
    if (!hiddenMenu) {
      dispatch(toggleHiddenMenu());
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
};
export default Layout;
