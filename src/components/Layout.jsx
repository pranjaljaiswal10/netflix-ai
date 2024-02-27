import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import appStore from "../utils/appStore";


const Layout = () => {
  return (
    <Provider store={appStore}>
    <Outlet/>
    </Provider>
  )
};

export default Layout;
