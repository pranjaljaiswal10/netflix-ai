
import { BG_URL } from "../utils/constant";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  

 
  return (<>
  <Header/>
    <img src={BG_URL} alt="" className="relative" />
     <MainContainer/>
     <SecondaryContainer/>
  </>);
};

export default Browse;
