import "./login.css";
import LogoCacctus from "../../../assets/cactus_10489609 1.png";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const validateLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-full-container">
      <div className="login-container">
        <div className="login-auth">
          <div className="header-login">
            <h1>Iniciar sesión</h1>
            <hr />
          </div>
          <form action="" onSubmit={(e) => validateLogin(e)}>
            <div className="body-login">
              <div className="inputs-login">
                <div className="input-login-container">
                  <span class="material-icons">alternate_email</span>
                  <input
                    type="email"
                    className="input-email-login"
                    placeholder="Email"
                  />
                </div>
                <div className="input-login-container">
                  <span class="material-icons">lock</span>
                  <input
                    type="password"
                    className="input-pass-login"
                    placeholder="Contraseña"
                  />
                </div>
              </div>

              <button className="button-login" type="submit">
                Iniciar sesión
              </button>
            </div>
          </form>
          <hr />
          <div className="footer-login">
            <p className="register-footer-text">
              No tienes cuenta?, <a onClick={() => navigate("/register")}>Regístrate</a>
            </p>
          </div>
        </div>
        <div className="cacctus-footer-login">
          <img src={LogoCacctus} alt="" />
          <h1>CACCTUS</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
