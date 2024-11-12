import { forwardRef } from "react";
import { IoClose } from "react-icons/io5";
import "./Modal.css";

type Props = {
  children: React.ReactElement;
  toggleDialog: () => void;
};

function Modal(
  { children, toggleDialog }: Props,
  ref: React.Ref<HTMLDialogElement>
) {
  return (
    <dialog
      ref={ref}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          toggleDialog();
        }
      }}
    >
      <button onClick={toggleDialog} className="x-button">
        <IoClose color="white" size="2em" />
      </button>
      {children}
    </dialog>
  );
}

export default forwardRef<HTMLDialogElement, Props>(Modal);
