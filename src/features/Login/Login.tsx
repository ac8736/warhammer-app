import "./Login.css";

type Props = {
  swapToRegister: () => void;
  toggleDialog: () => void;
};

function Login({ swapToRegister, toggleDialog }: Props) {
  function handleLogin() {
    toggleDialog();
  }

  return (
    <>
      <div className="register-container">
        <h2>Login to your Account</h2>
        <input placeholder="Username" />
        <input placeholder="Password" />
        <div className="remember-container">
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1" className="remember-label">
              Remember me
            </label>
          </div>
          <p>
            Don't have an account?{" "}
            <span onClick={swapToRegister} className="login">
              Register.
            </span>
          </p>
        </div>
        <button className="register-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
