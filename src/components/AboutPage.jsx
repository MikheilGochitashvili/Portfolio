import data from "../fetch.json";
import Rectangle from "./svg/rectangle";

const AboutPage = () => {
  return (
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
                  <span className="about_description">{item.description}</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className="about_page_right_section">
        <div>
          <button>Home</button>
          <button>Projects</button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
