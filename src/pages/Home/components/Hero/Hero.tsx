import { useRef, useState } from "react";
import "./Hero.css";
import Modal from "@components/Modal/Modal";
import { Login, Register } from "@features/index";

function Hero() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [loginMode, setLoginMode] = useState<boolean>(true);

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

  function register() {
    setLoginMode(false);
    toggleDialog();
  }

  function login() {
    setLoginMode(true);
    toggleDialog();
  }

  return (
    <>
      <div className="hero-container">
        <h1>Welcome to the Celestial Orrery</h1>
        <p>
          Command your legions, share your warbands with your battle-brothers,
          and lead a crusade across the stars.
        </p>

        <div className="hero-button-container">
          <button className="hero-button" onClick={register}>
            Register
          </button>
          <button className="hero-button" onClick={login}>
            Login
          </button>
        </div>
      </div>

      <Modal toggleDialog={toggleDialog} ref={dialogRef}>
        {loginMode ? (
          <Login
            swapToRegister={() => setLoginMode(false)}
            toggleDialog={toggleDialog}
          />
        ) : (
          <Register
            swapToLogin={() => setLoginMode(true)}
            toggleDialog={toggleDialog}
          />
        )}
      </Modal>
    </>
  );
}

export default Hero;
