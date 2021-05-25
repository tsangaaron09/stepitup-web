import React from "react";
import DropDown from "./DropDown";
import Button from "./Button";

const AssignTab = () => {
  const tabStyle = {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "8vh",
  };

  const singleTab = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  };

  const textStyle = {
    letterSpacing: "0.2em",
    fontSize: "2vw",
    width: "30%",
  };

  return (
    <div style={tabStyle}>
      <div style={singleTab}>
        <span style={textStyle}>ASSIGN TO: </span>
        <DropDown
          label="assignTo"
          options={["Aaron", "Harmeet", "Megh", "Poojitha", "Nikola", "Tia"]}
          defaultVal="Name"
        />
      </div>
      <div style={singleTab}>
        <span style={textStyle}>CATEGORY: </span>
        <DropDown
          title="category"
          options={["hamstring", "quadriceps", "calf", "ankle"]}
          defaultVal="Category"
        />
      </div>
      <div style={singleTab}>
        <span style={textStyle}>EXERCISE: </span>
        <DropDown
          title="exercises"
          options={["hamstring1", "hamstring2", "hamstring3", "hamstring4"]}
          defaultVal="Exercise"
        />
      </div>
      <div style={singleTab}>
        <span style={textStyle}>DIFFICULTY: </span>
        <DropDown
          title="difficulty"
          options={["easy", "medium", "hard"]}
          defaultVal="Difficulty"
        />
      </div>
      <Button name="ADD" class="ui button" positionFlex="flex-end" />
    </div>
  );
};

export default AssignTab;
