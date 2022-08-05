import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import RivetLogo from '../assets/rivet_blue.png';
import { ToastContainer, toast} from 'react-toastify';
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const submitHandler = async(event) => {
        event.preventDefault();
        if (validationHandler()) {
            const { password, confirmPassword, username, email } = values;
            const {data} = await axios.post()
        };
    };

    const validationHandler = () => {
        const {password, confirmPassword, username, email } = values;

        if(password !== confirmPassword) {
            toast.error('Passwords do not match.', {
                position: "bottom-right",
                autoClose: 9000,
                pauseOnHover: true,
                draggable: true,
            });

            return false;
        } else if (username.length <3) {
            toast.error('Username should contain more than 3 characters', {
                position: "bottom-right",
                autoClose: 9000,
                pauseOnHover: true,
                draggable: true,
            })
            
            return false;
        } else if (password.length < 5) {
            toast.error('Password should contain more than 5 characters', {
                position: "bottom-right",
                autoClose: 9000,
                pauseOnHover: true,
                draggable: true,
            })

            return false;
        } else if (email === '') {
            toast.error('An Email address is required', {
                position: "bottom-right",
                autoClose: 9000,
                pauseOnHover: true,
                draggable: true,
            })

            return false;
        }

        return true;
    }

    const changeHandler = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    }

    return (
        <>
        <FormContainer>
            <form onSubmit={(event) => submitHandler(event)}>
                <div className = 'label'>
                    <img className='frog_logo' src={Logo} alt='logo' /> 
                    <h1>Rivet Sign Up</h1>
                </div>
                <input type='text' placeholder='Username' name='username' onChange={(event) => changeHandler(event)} />
                <input type='email' placeholder='Email' name='email' onChange={(event) => changeHandler(event)} />
                <input type='password' placeholder='Password' name='password' onChange={(event) => changeHandler(event)} />
                <input type='password' placeholder='Confirm Password' name='confirmPassword' onChange={(event) => changeHandler(event)} />
                <button type='submit'> Create User!</button>
                <span> Already have an account? <Link to='/login'>Login</Link></span>
            </form>
        </FormContainer>
        <ToastContainer />
        </>
    )

}


export default Signup;

const FormContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: columnm;
justify-content: center;
align-items: center;
gap: 2rem;
.label{
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
}

.frog_logo {
    height: 8vh;
}

h1 {
    color: white;
}

form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #4285f4;
    border-radius: 1.5rem;
    padding: 5rem;
}

input {
    background-color: #fff;
    padding: 1.2rem;
    border: 0.1rem solid #2258b1;
    border-radius: 0.4rem;
    color: #150f2a;
    width: 100%;
    font-size: 1rem;
    &:focus {
    border: 0.1rem solid #997af0;
    outline: none;
}

button {
    background-color: #00ffff;
    color: #af11c0;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }

`;