import "./Armory.css";
import { useState } from "react";
import { Dropdown } from "@components/index";
import { ArmyTracker } from "@features/index";

function Armory() {
  const mock: string[][] = [
    ["Choose an army below", "Ultramarines", "Necrons", "Blood Angels"],
  ];
  const [selectedArmy, setSelectedArmy] = useState<string>("");

  return (
    <>
      <div className="army-select-container">
        <p>Select your Army: </p>
        {mock.map((data, i) => (
          <Dropdown options={data} key={i} getSelected={setSelectedArmy} />
        ))}
      </div>
      <div className="armory-button-container">
        <button>Create New Army</button>
        <button>Delete Current Army</button>
      </div>
      <p>{selectedArmy !== "Choose an army below" && selectedArmy}</p>
      <div className="army-tracker-collection">
        <ArmyTracker />
        <ArmyTracker />
        <ArmyTracker />
        <ArmyTracker />
        <ArmyTracker />
        <ArmyTracker />
        <ArmyTracker />
        <ArmyTracker />
      </div>
    </>
  );
}

export default Armory;
