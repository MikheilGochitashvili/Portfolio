import MikheilLogo from "../IMG/mikheilgroup.png";
import ReactLogo from "../IMG/reactlogo.png";
import Arrow from "./svg/arrow";
import WebDevLogo from '../IMG/webdevlogo.png'
import {useNavigate} from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [over, setOver] = useState(false)

  return (
    <div className="home_page_container">
      <section className="home_page_left_container">
        <div className="home_page_left_container_header_container">
          <span>Hi! I Am Mikheil</span>
          <img src={WebDevLogo} alt="webdevlogo" className="webdev_logo" />
        </div>
        <div className="home_page_left_container_main_container">
          <span>
            Developing and designing the websites for over{" "}
            <span style={{color: "#2A494B"}}> 14 months </span> as a web
            developer
          </span>
        </div>
        <div className="home_page_buttons_container">
          <button onClick={() => navigate("/portfolio/about")} className="about_button">
            About
          </button>
          <button
            onMouseOut={() => setOver(false)}
            onMouseOver={() => setOver(true)}
            onClick={() => navigate("/portfolio/projects")}
            className="projects_button"
          >
            Projects <Arrow className="arrow" color={over ? '#EFF5F5' : '#497174'}/>
          </button>
        </div>
      </section>
      <section className="home_page_right_container">
        <img src={MikheilLogo} alt="mikheil" className="mikheil_logo" />
        <img src={ReactLogo} alt="react_logo" className="react_logo" />
      </section>
    </div>
  );
};

export default Home;
