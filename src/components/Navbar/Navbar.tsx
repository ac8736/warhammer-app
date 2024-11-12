import "./Navbar.css";
import NavbarImage from "../../assets/NavbarImage.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar-container">
      <div className="navbar-link-containers" style={{ marginRight: 30 }}>
        <Link to="/armory" className={`navbar-link-left navbar-link`}>
          Armory
        </Link>
        <Link to="/reliquary" className="navbar-link-left navbar-link">
          Reliquary
        </Link>
      </div>
      <button className="navbar-logo-button" onClick={() => navigate("/")}>
        <img src={NavbarImage} className="navbar-image" />
      </button>
      <div className="navbar-link-containers" style={{ marginLeft: 30 }}>
        <Link to="/librarius" className="navbar-link-right navbar-link">
          Librarius
        </Link>
        <Link to="/crusades" className="navbar-link-right navbar-link">
          Crusades
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
