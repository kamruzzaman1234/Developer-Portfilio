import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navbar";

const Main = ()=>{
    return(
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
export default Main;