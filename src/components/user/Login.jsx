import './Login.css';
import Linkedin from '../../assets/Linkedin-Logo.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../../redux/actions';


const Login = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState("");

    const loading = useSelector((state) => state.user.loading);


    const handleChangeFullName = (e) => {
        const newName = e.target.value;
        setName(newName);
    }

    const handleChangeProfile = (e) => {
        const newProfile = e.target.value;
        setProfile(newProfile);
    }

    const handleChangeEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    }

    const handleChangePassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email && password) {
            dispatch(login(email, password))        
        } else {
            console.error('Ooops an error occurred while login')
        }
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (!name) {
            return alert('Sorry Name is empty')
        }     
            try {
                const userData = {
                    name: name,
                    profile: profile
                }
                dispatch(register(email, password, userData));
                setName('');
                setEmail('');
                setPassword('');
                setProfile('');

            } catch (error) {
                alert('Error registering, try again')
                console.error('Error to add user', error);
            }
        }

        if(loading) return <div>Loading...</div>
        

    return (
        <div className='login'>
            <img src={Linkedin} alt="Linkedin_Logo" />
            <form>
                <input 
                    type="text" 
                    name='fullName'
                    value={name}
                    onChange={handleChangeFullName}
                    required
                    placeholder='Full Name (required if registering)'
                />
                <input 
                    type="text" 
                    name='profile'
                    value={profile}
                    onChange={handleChangeProfile}
                    placeholder='Profile pic URL (optional)'
                />
                <input 
                    type="email" 
                    name='email'
                    value={email}
                    onChange={handleChangeEmail}
                    required
                    placeholder='Email'
                />
                <input 
                    type="password" 
                    name='password'
                    value={password}
                    onChange={handleChangePassword}
                    required
                    placeholder='Password'
                />
                <button type='submit' onClick={handleSubmit}>Sign In</button>
            </form>

            <p>Not a member? {" "}
                <span 
                    className='login__register'
                    onClick={handleRegister}
                >Register Now
                </span>
            </p>
        </div>
    )
}

export default Login
