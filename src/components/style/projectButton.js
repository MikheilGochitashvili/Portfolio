import Arrow from "../svg/arrow";
import StyledBtn from "./Button.styled";

const ProjectButton = ({setOver, navigate, over, value}) => {
  return (
    <StyledBtn
      onMouseOut={() => setOver(false)}
      onMouseOver={() => setOver(true)}
      onClick={() => navigate("/portfolio/projects")}
      className="projects_button"
    >
        {value}
      <Arrow className="arrow" color={over ? "#EFF5F5" : "#497174"} />
    </StyledBtn>
  );
};

export default ProjectButton;
