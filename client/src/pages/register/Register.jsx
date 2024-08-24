import React, { useState, useContext } from 'react'
import "./register.css";
import { Link, useNavigate } from 'react-router-dom'

import registerImg from '../../assets/images/register.png'
import userIcon from '../../assets/images/user.png'



const Register = () => {

    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined
    })


    const navigate = useNavigate()
    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const handleClick = () => {
        
    }

    return (
        <section>
            <div>
                <div>
                    <div className='m-auto' lg='8'>
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={registerImg} alt="" />
                            </div>

                            <div className='login__form'>
                                <div className='user'>
                                    <img src={userIcon} alt="" />
                                </div>
                                <h2>Register</h2>
                                <form onSubmit={handleClick}>
                                    <input type='text' placeholder='Username' required id='username' onChange={handleChange} />
                                    <input type='text' placeholder='Email' required id='email' onChange={handleChange} />
                                    <input type='password' placeholder='Password' required id='password' onChange={handleChange} />
                                    <button className='btn secondary__btn auth__btn'>
                                        Register
                                    </button>
                                </form>
                                <p>Do you have an account ?<Link to='/login'>Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register