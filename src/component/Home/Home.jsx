import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Home.css'


const Home = () => {
    const navigation = useNavigation();
    return (
        <div className="main-container">
            <div>
            <Navbar></Navbar>
            <h2>This is a home component</h2>
            {
                navigation.state === "loading" ?
                <p>loading....</p>:
                <Outlet></Outlet>
            }
            
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;