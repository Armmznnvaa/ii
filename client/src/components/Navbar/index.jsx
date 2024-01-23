import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
       <div className="headr">
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="logo">
                        <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png"></img>
                    </div>
                </div>
                <div className="col-6">
                <div className="pages">
                    <ul>
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                        <li> 
                            <Link to="/Add">Add</Link>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
       </div>
    )
}

export default Navbar