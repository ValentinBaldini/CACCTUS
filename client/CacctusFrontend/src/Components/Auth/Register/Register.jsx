import LogoCacctus from "../../../assets/cactus_10489609 1.png";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="register-full-container">
      <div className="register-container">
        <div className="register-auth">
          <div className="header-login">
            <h1>Registro</h1>
            <hr />
          </div>
          <form action="" onSubmit={(e) => validateLogin(e)}>
            <div className="body-register">
              <div className="inputs-register">
                <div className="input-register-container">
                  <input
                    type="text"
                    className="input-email-register"
                    placeholder="Nombre"
                  />
                </div>
                <div className="input-register-container">
                  <input
                    type="text"
                    className="input-email-register"
                    placeholder="Apellido"
                  />
                </div>
                <div className="input-register-container">
                  <input
                    type="date"
                    className="input-date-register"
                    placeholder="Fecha de nacimiento"
                  />
                </div>
                <div className="input-register-container">
                  <input
                    type="text"
                    className="input-email-register"
                    placeholder="Nombre de usuario"
                  />
                </div>
                <div className="input-register-container">
                  <span class="material-icons">alternate_email</span>
                  <input
                    type="email"
                    className="input-email-register"
                    placeholder="Email"
                  />
                </div>
                <div className="input-register-container">
                  <span class="material-icons">lock</span>
                  <input
                    type="password"
                    className="input-pass-register"
                    placeholder="Contraseña"
                  />
                </div>
                <div className="input-register-container">
                  <span class="material-icons">lock</span>
                  <input
                    type="password"
                    className="input-pass-register"
                    placeholder="Confirmar contraseña"
                  />
                </div>
              </div>

              <button className="button-register" type="submit">
                Registrarse
                <span class="material-icons">login</span>
              </button>
            </div>
          </form>
          <hr />
          <div className="footer-register">
            <p className="register-footer-text">
              Ya tienes cuenta?,{" "}
              <a onClick={() => navigate("/login")}>Iniciar sesión</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
