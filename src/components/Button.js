import react from "react";

const Button = (props) => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#62497d",
    color: "white",
    height: "5vh",
    width: "20%",
    fontSize: "2vw",
    textAlign: "center",
    alignSelf: props.positionFlex,
  };

  return (
    <button class="ui button" style={styles}>
      <span>{props.name}</span>
    </button>
  );
};

export default Button;
