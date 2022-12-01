import Nav from "./style/Navigation.styled";
import {Link} from "react-router-dom";
import Logo from "../IMG/logo.png";
import {useNavigate} from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <header>
      <Nav>
        <img onClick={() => navigate("/portfolio")} src={Logo} className="nav_logo" />
        <div className="navbar_links_container">
          <Link className={`navbar_link`} to={'/portfolio'}>Home</Link>
          <Link className={`navbar_link`} to={"/portfolio/about"}>About</Link>
          <Link className={`navbar_link`} to={"/portfolio/projects"}>Projects</Link>
        </div>
        <div>
          <button className="contact_button">Contanct</button>
        </div>
      </Nav>
    </header>
  );
};

export default Navigation;
