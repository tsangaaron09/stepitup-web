import React from "react";
import DropDown from "./DropDown";

const AssignTab = () => {
  return (
    <div>
      <DropDown
        label="assignTo"
        options={["Aaron", "Harmeet", "Megh", "Poojitha", "Nikola", "Tia"]}
        defaultVal="Name"
      />
      {/* <DropDown
        title="exercises"
        options={["hamstring", "quadriceps", "calf", "ankle"]}
      /> */}
    </div>
  );
};

export default AssignTab;
