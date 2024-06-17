import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import Header from "./components/Header";


const Layout = () => {
  return (
    <Provider store={appStore}>
    <Header/>
    <Outlet/>
    </Provider>
  )
};

export default Layout;
