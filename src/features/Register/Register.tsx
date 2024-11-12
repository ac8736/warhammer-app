import "./Register.css";

type Props = {
  swapToLogin: () => void;
  toggleDialog: () => void;
};

function Register({ swapToLogin, toggleDialog }: Props) {
  function handleRegister() {
    toggleDialog();
  }

  return (
    <div className="register-container">
      <h2>Register an Account</h2>
      <input placeholder="Username" />
      <input placeholder="Email" />
      <input placeholder="Password" />
      <input placeholder="Re-type Password" />
      <div className="remember-container">
        <div>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label htmlFor="vehicle1" className="remember-label">
            Remember me
          </label>
        </div>
        <p>
          Already have an account?{" "}
          <span onClick={swapToLogin} className="login">
            Login.
          </span>
        </p>
      </div>
      <button className="register-button" onClick={handleRegister}>
        Create an Account
      </button>
    </div>
  );
}

export default Register;
