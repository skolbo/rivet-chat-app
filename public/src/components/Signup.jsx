import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Signup() {
    const submitHandler = (event) => {
        event.preventDefault();
        alert('form');
    };

    const changeHandler = (event) => {
        
    }

    return (
        <>
        <FormContainer>
            <form onSubmit={(event) => submitHandler(event)}>
                <div className = 'label'>
                    <img src='' alt='' />
                    <h1><Hello></Hello></h1>
                </div>
                <input type='text' placeholder='Username' name='username' onChange={(event) => changeHandler(event)} />
                <input type='email' placeholder='Email' name='email' onChange={(event) => changeHandler(event)} />
                <input type='password' placeholder='Password' name='password' onChange={(event) => changeHandler(event)} />
                <input type='password' placeholder='Confirm Password' name='confirmPassword' onChange={(event) => changeHandler(event)} />
                <button type='submit'> Create User!</button>
                <span> Already have an account? <Link to='/login'>Login</Link></span>
            </form>
        </FormContainer>
        </>
    )

}

const FormContainer = styled.div``;

export default Signup;