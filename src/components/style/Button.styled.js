import styled from "styled-components";

const StyledBtn = styled.button`
  width: 175px;
  height: 64.05px;
  font-size: 25px;
  border: none;
  border-radius: 26px;
  cursor: pointer;
  transition: 430ms;

  &:hover
  {
    box-shadow: rgb(51 112 107 / 74%) 0px 0px 29px 0px;
    border-radius: 0px;
    scale: 1.05;
  }
`;

export default StyledBtn;
