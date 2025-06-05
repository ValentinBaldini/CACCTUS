import "./login.css";

const Login = () => {
  const validateLogin = (e) => {
    e.preventDefault();
    
  };
  return (
    <div className="login-full-container">
      <div className="login-container">
        <div className="login-auth">
          <div className="header-login">
            <h1>Iniciar sesión</h1>
          </div>
          <hr />
          <form action="" onSubmit={(e) => validateLogin(e)}>
            <div className="body-login">
              <span class="material-icons">alternate_email</span>
              <input
                type="email"
                className="input-email-login"
                placeholder="Email"
              />
              <input
                type="password"
                className="input-pass-login"
                placeholder="Contraseña"
              />
              <button className="button-login" type="submit">
                Iniciar sesión
              </button>
            </div>
          </form>
          <hr />
          <div className="footer-login">
            <p className="register-footer-text">
              No tienes cuenta?, <a>Regístrate</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
