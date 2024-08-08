import { useLocation, useNavigate } from 'react-router-dom';
import './default-login-layout.scss';
import iconDumbbel from '../../assets/dumbbel.svg'
import FormLogin from '../../pages/login';
import FormSignup from '../../pages/signup';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthService } from '../../services/AuthService';

export default function DefaultLoginLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  async function handleLoginSubmit(event: FormEvent) {
    event.preventDefault();

    
    if (!email || !password) {
      toast.error("Todos os campos são obrigatórios!");
      return;
    }
    if (!email.includes('@')) {
      toast.error("O email deve conter '@'!");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(password)) {
      toast.error("A senha está incorreta!");
      return;
    }

    try {
      await AuthService.login(email, password);
      toast.success("Login bem-sucedido!")
      navigate('/user')
    } catch (error) {
      toast.error("Erro ao fazer login. Verfique suas credenciais.")
    }
  }

  async function handleSignupSubmit(event: FormEvent) {
    event.preventDefault();
    if (!name || !email || !password || !confirmPass) {
      toast.error("Todos os campos são obrigatórios!");
      return;
    }
    if (name.length < 4) {
      toast.error("O nome deve ter pelo menos 4 caracteres!");
      return;
    }
    if (!email.includes('@')) {
      toast.error("O email deve conter '@'!");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(password)) {
      toast.error("A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um caractere especial!");
      return;
    }
    if (password !== confirmPass) {
      toast.error("A confirmação da senha não corresponde à senha!");
      return;
    }

    try {
      await AuthService.signup(name, email, password);
      toast.success("Registro bem-sucedido!")
      navigate('/login')
    } catch (error) {
      toast.error("Erro ao fazer Registro. Verfique suas credenciais.")
    }
  }

  const isLogin = location.pathname === "/login";
  const isSignup = location.pathname === "/signup";

  return (
    <main>
      <section className="form-section">
        <div className='logo'>
          <img src={iconDumbbel} alt="" />
          <p>Workout</p>
        </div>
        <h2>{isLogin ? "Welcome back gym member!" : isSignup ? "Sign in and start today!" : ""}</h2>
        {isLogin && (
          <>
            <FormLogin email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
            <div className="btn-wrapper">
              <button className="btn-primary" type="button" onClick={handleLoginSubmit}>Login</button>
              <div className="divider">
                <div></div>
                <span>or</span>
                <div></div>
              </div>
              <button className="btn-secondary" onClick={() => navigate('/signup')}>
                Signup
              </button>
            </div>
          </>
        )}
        {isSignup && (
          <>
            <FormSignup name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} confirmPass={confirmPass} setConfirmPass={setConfirmPass} />
            <div className="btn-wrapper">
              <button className="btn-primary" type="button" onClick={handleSignupSubmit}>Signup</button>
              <div className="divider">
                <div></div>
                <span>or</span>
                <div></div>
              </div>
              <button className="btn-secondary" onClick={() => navigate('/login')}>
                Login
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}