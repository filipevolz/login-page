import { Input } from '../../components/input';
import emailIcon from '../../assets/email-icon.svg';
import passwordIcon from '../../assets/password-icon.svg';
import './login.scss';
import { ChangeEvent } from 'react';

type FormLoginProps = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

export default function FormLogin({ email, setEmail, password, setPassword }: FormLoginProps) {
  return (
    <form>
      <Input
        type="email"
        label="Email Address"
        placeholder="devfilipevolz@gmail.com"
        icon={emailIcon}
        value={email}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        icon={passwordIcon}
        value={password}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
      />
      <span>Forgot Password?</span>
    </form>
  );
}
