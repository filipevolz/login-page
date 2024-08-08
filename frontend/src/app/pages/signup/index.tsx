import { Input } from "../../components/input";
import emailIcon from '../../assets/email-icon.svg';
import passwordIcon from '../../assets/password-icon.svg';
import { ChangeEvent } from "react";

type FormSignupProps = {
    name: string;
    setName: (name: string) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    confirmPass: string;
    setConfirmPass: (confirmPass: string) => void;
  }

export default function FormSignup({name, setName, email, setEmail, password, setPassword, confirmPass, setConfirmPass}: FormSignupProps){
    return(
        <form>
            <Input
                type="text"
                label="Name"
                placeholder="Filipe Volz"
                icon={emailIcon}
                value={name}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
            />
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
            <Input
                type="password"
                label=""
                placeholder="Repeat you password"
                icon={passwordIcon}
                value={confirmPass}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setConfirmPass(event.target.value)}
            />
            <span>Forgot Password?</span>
        </form>
    )
};