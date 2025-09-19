import { NavLink } from "react-router-dom";
import "../../custom_css/Header.css";

export const Header = () =>{
    return(
        <>
        <header className="section-navbar">
            <section className="top_txt">
              <div className="head container">
                <div className="head_txt">
                    <p>Get PY Membership, 30-day return or refund guarantee.</p>
                </div>
                <div className="sing_in_up">
                    <a href="#">SIGN IN</a>
                    <a href="#">SIGN UP</a>
                </div>
              </div>
            </section>

            <div className="container">
                <div className="navbar-brand">
                    <NavLink to="index">
                        <p>PY-Flix</p>
                    </NavLink>
                </div>
                <nav className="navbar">
                    <ul>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                            Home
                            </NavLink>                            
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">
                            About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movie" className="nav-link">
                            Movie
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                            Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
};