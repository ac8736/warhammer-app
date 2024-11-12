import { Dropdown } from "@components/index";
import "./ArmyDetail.css";
import { Army } from "@custom-types/ArmyTypes";
import { Status } from "@enums/Paint";

type Props = {
  army: Army[];
};

function ArmyDetail({ army }: Props) {
  return (
    <div className="army-detail-container">
      {army.map((ele, i) => (
        <div key={i} className="army-detail">
          <p className="army-detail-text">{ele.name}</p>
          <div className="army-detail-dropdown-wrapper">
            <Dropdown
              options={[Status.Backlog, Status.InProgress, Status.Complete]}
              getSelected={(e) => {
                console.log(e);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArmyDetail;
