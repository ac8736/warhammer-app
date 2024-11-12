import "./Dropdown.css";
import Select from "./components/Select";
import { useState } from "react";

type Props = {
  options: string[];
  getSelected: (arg: string) => void;
};

function Dropdown({ options, getSelected }: Props) {
  const [menuShow, setMenuShow] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  function selectOption(e: React.MouseEvent<HTMLElement>) {
    const input = e.target as HTMLElement;
    setSelected(input.innerText);
    getSelected(input.innerText);
    setMenuShow(!menuShow);
  }

  const dropdownList = options.map((option, i) => (
    <li key={i} onClick={selectOption}>
      {option}
    </li>
  ));

  return (
    <div className="dropdown">
      <Select
        menuShow={menuShow}
        setMenuShow={setMenuShow}
        selected={selected}
      />
      <ul className={`menu ${menuShow && "menu-open"}`}>{dropdownList}</ul>
    </div>
  );
}

export default Dropdown;
