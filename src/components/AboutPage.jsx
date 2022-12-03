import data from "../fetch.json";
import Rectangle from "./svg/rectangle";
import Eclipse from "./svg/eclipse";
import iconProfiles from "../IMG/iconprofiles.png";
import GithubLogo from "./svg/githublogo";
import ProjectButton from "./style/projectButton";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import LinkedIn from "./svg/linkedin";

const AboutPage = ({setOver, navigate, over, value}) => {
  const buttonNavigate = useNavigate();
  const [github, setGithub] = useState(false);
  const [linked, setLinked] = useState(false);
  return (
    <>
      <div className="about_page_container">
        <section className="about_page_left_section">
          {data[0].about.map((item) => {
            return (
              <div className="about_container">
                <Rectangle color={item.RectangleColor} />
                <div className="about_content_container">
                  <span style={{color: item.SpanColor}} className="about_title">
                    {item.title}
                  </span>
                  <div className="about_description_container">
                    {item.description.map((item) => {
                      return (
                        <div className="inner_text_container">
                          <div>
                            <Eclipse fill={item.color} />
                          </div>
                          <span className="inner_text">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <section className="about_page_right_section">
          <div className="about_page_right_section_header_container">
            <span>Profiles</span>
            <img src={iconProfiles} alt="profileIcon" />
          </div>
          <div className="profile_container">
            <a
              onMouseOver={() => setGithub(true)}
              onMouseOut={() => setGithub(false)}
              href="https://github.com/MikheilGochitashvili"
              target="https://github.com/MikheilGochitashvili"
              className="github_profile"
            >
              <GithubLogo color={github ? "#504F4F" : "white"} />
              <span style={{color: github ? "#504F4F" : "white"}}>Github</span>
            </a>
            <a
              onMouseOver={() => setLinked(true)}
              onMouseOut={() => setLinked(false)}
              href="https://www.linkedin.com/in/mikheil-gochitashvili-321418229/"
              target="https://www.linkedin.com/in/mikheil-gochitashvili-321418229/"
              className="linkedin_profile"
            >
              <LinkedIn color={linked ? "#0077BB" : "white"} />
              <span style={{color: linked ? "#0077BB" : "white"}}>
                LinkedIn
              </span>
            </a>
          </div>
        </section>
      </div>
      <section className="about_page_footer">
        <div>
          <button
            onClick={() => buttonNavigate("/portfolio")}
            className="home_btn"
          >
            Home
          </button>
          <ProjectButton
            value={"Projects"}
            over={over}
            setOver={setOver}
            navigate={navigate}
          />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
