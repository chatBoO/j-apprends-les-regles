import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";

const Header = () => {
    return (
        <header>
            <div className="container_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="container">
                <h1 className="container__titre">J'apprends les règles</h1>
                <nav className="navigation">
                    <ul className="navigation__liste">
                        <NavLink
                            to="/"
                            className={(nav) =>
                                nav.isActive ? "nav-active" : null
                            }
                        >
                            <li>Accueil</li>
                        </NavLink>
                        <NavLink
                            to="/games"
                            className={(nav) =>
                                nav.isActive ? "nav-active" : null
                            }
                        >
                            <li>Liste des jeux</li>
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={(nav) =>
                                nav.isActive ? "nav-active" : null
                            }
                        >
                            <li>Contact</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
