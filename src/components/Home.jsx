import MikheilLogo from "../IMG/mikheilgroup.png";
import ReactLogo from "../IMG/reactlogo.png";
import WebDevLogo from '../IMG/webdevlogo.png'

import ProjectButton from "./style/projectButton";

const Home = ({setOver, navigate, over, value}) => {

  return (
    <div className="home_page_container" id="home_page_container">
      <section className="home_page_left_container">
        <div className="home_page_left_container_header_container" id="home_page_left_container_header_container">
          <span>Hi! I Am Mikheil</span>
          <img src={WebDevLogo} alt="webdevlogo" className="webdev_logo" />
        </div>
        <div className="home_page_left_container_main_container" id="home_page_left_container_main_container">
          <span>
            Hi, my name is<span style={{color: "#2A494B"}}> Mikheil Gochitashvili </span>  and I am <span style={{color: "#2A494B"}}> 19 years old </span>. I am currently studying computer science at <span style={{color: "#2A494B"}}>IT Step Academy</span> and I am passionate about learning new technologies and building software applications.
          </span>
        </div>
        <div className="home_page_buttons_container" id="home_page_buttons_container">
          <button onClick={() => navigate("/portfolio/about")} className="about_button">
            About
          </button>
          <ProjectButton value={'Projects'} over={over} setOver={setOver} navigate={navigate} />
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