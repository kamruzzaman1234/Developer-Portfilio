import About from "../../components/About/About";
import Choose from "../../components/Choose/Choose";
import Contact from "../../components/Contact/Contact";
import Headers from "../../components/Headers/Headers";
import Work from "../../components/Work/Work";

const Home = ()=>{
    return(
        <div className="bg-white">
            <Headers></Headers>
            <Choose></Choose>
            <About></About>
            <Work></Work>
            <Contact></Contact>
        </div>
    )
}
export default Home;