import "./Select.css";

type Props = {
  menuShow: boolean;
  setMenuShow: (arg: boolean) => void;
  selected: string;
};

function Select({ menuShow, setMenuShow, selected }: Props) {
  return (
    <div
      className={`select ${menuShow && "select-clicked"}`}
      onClick={() => setMenuShow(!menuShow)}
    >
      <span className="selected">{selected}</span>
      <div className={`caret ${menuShow && "caret-rotate"}`}></div>
    </div>
  );
}

export default Select;
