import data from "../fetch.json";
import Rectangle from "./svg/rectangle";
import Eclipse from "./svg/eclipse";
import ProjectButton from "./style/projectButton";
import { useNavigate } from "react-router-dom";

const AboutPage = ({setOver, navigate, over, value}) => {
  const buttonNavigate = useNavigate()
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
        <section className="about_page_right_section">sad</section>
      </div>
      <section className="about_page_footer">
        <div>
          <button onClick={() => buttonNavigate('/portfolio')} className="home_btn">Home</button>
          <ProjectButton value={'Projects'} over={over} setOver={setOver} navigate={navigate} />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
