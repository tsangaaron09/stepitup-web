import { useState } from "react";
import "../index.css";
import AssignTab from "./AssignTab";
import ExercisesTab from "./ExercisesTab";
import PatientResultsTab from "./PatientResultsTab";

function TabPanel() {
  const [toggleState, setTogglestate] = useState(1);

  const toggleTab = (index) => {
    setTogglestate(index);
  };

  return (
    <div className="tab-container">
      <div className="tab-picker">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          ASSIGN
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          EXERCISES
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          PATIENT RESULTS
        </button>
      </div>

      <div className="tab-content">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <AssignTab />
        </div>

        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <ExercisesTab />
        </div>

        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <PatientResultsTab />
        </div>
      </div>
    </div>
  );
}

export default TabPanel;
