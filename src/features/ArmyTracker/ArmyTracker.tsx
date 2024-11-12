import "./ArmyTracker.css";
import StockImage from "@assets/StockArmy.png";
import ArmyDetail from "./components/ArmyDetail";
import { useRef } from "react";
import { Status } from "@enums/Paint";
import { Army } from "@custom-types/ArmyTypes";
import { ProgressBar, Modal } from "@components/index";

function ArmyTracker() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const figures: Army[] = [{ name: "Model 1", status: Status.Backlog }];

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }

    if (dialogRef.current.hasAttribute("open")) {
      document.body.classList.remove("blur-background");
      document.body.style.overflow = "";
      dialogRef.current.close();
    } else {
      document.body.classList.add("blur-background");
      document.body.style.overflow = "hidden";
      dialogRef.current.showModal();
    }
  }

  return (
    <div className="army-tracker-container">
      <img src={StockImage} width="250" />
      <div className="army-tracker-info">
        <h3 className="army-tracker-info-text-padding">Space Marine</h3>
        <p>Model Quantiy: {figures.length}</p>
        <p>Date started: Sep 5, 2020</p>
        <div className="army-tracker-progress-container">
          <p>Paint Status: </p>
          <div className="army-tracker-progress-wrapper">
            <ProgressBar progress={53} />
          </div>
        </div>
        <div className="army-tracker-details-button">
          <button onClick={toggleDialog}>View Details</button>
        </div>
      </div>
      <Modal toggleDialog={toggleDialog} ref={dialogRef}>
        <ArmyDetail army={figures} />
      </Modal>
    </div>
  );
}

export default ArmyTracker;
