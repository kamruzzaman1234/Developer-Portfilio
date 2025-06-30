import About from "../../components/About/About";
import Choose from "../../components/Choose/Choose";
import Headers from "../../components/Headers/Headers";
import Work from "../../components/Work/Work";

const Home = ()=>{
    return(
        <div>
            <Headers></Headers>
            <Choose></Choose>
            <About></About>
            <Work></Work>
        </div>
    )
}
export default Home;