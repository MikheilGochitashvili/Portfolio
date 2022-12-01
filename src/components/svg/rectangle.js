const Rectangle = (props) => {
  return (
    <svg
      className="rectangle"
      width="43"
      height="43"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="18.8744"
        width="26.6924"
        height="26.6924"
        transform="rotate(-45 0 18.8744)"
        fill={props.color}
      />
    </svg>
  );
};

export default Rectangle;
