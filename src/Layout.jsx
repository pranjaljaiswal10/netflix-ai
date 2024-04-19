import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import Header from "./components/Header";
import Footer from "./components/Footer";


const Layout = () => {
  return (
    <Provider store={appStore}>
    <Header/>
    <Outlet/>
    <Footer/>
    </Provider>
  )
};

export default Layout;
