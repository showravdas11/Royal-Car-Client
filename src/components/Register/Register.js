import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Alert, Button, LinearProgress } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({})

    const { user, registerUser, loading, authError } = useAuth()

    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("password did not match")
            return
        }

        registerUser(loginData.email, loginData.password, loginData.name, history)

        e.preventDefault()
    }


    return (
        <div>
            <div className="container">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <h3 className="mt-5">Register</h3>
                        {!loading && <form onSubmit={handleLoginSubmit}>

                            <TextField style={{ width: '400px' }} id="standard-basic"
                                label="Your Name"
                                variant="standard"
                                type="text"
                                name="name"
                                onChange={handleOnChange}
                                required
                            />
                            <br />

                            <TextField style={{ width: '400px' }} id="standard-basic"
                                label="Email"
                                variant="standard"
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                                required
                            />
                            <br />
                            <TextField style={{ width: '400px' }} id="standard-basic"
                                label="Password"
                                variant="standard"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                required
                            />
                            <TextField style={{ width: '400px' }} id="standard-basic"
                                label=" Confirm Password"
                                variant="standard"
                                type="password"
                                name="password2"
                                onChange={handleOnChange}
                                required
                            />
                            <br />
                            <button type="submit" className="img-fluid Buy-Now mt-3">Register</button>
                            <br />

                            <Link style={{ textDecoration: 'none' }} to="/login"><Button variant="text">Already Register? Please Login</Button></Link>


                        </form>}
                        {loading && <LinearProgress color="secondary" />}

                        {user?.email && <Alert severity="success">User Created Successfully!!!</Alert>}

                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img className="img-fluid" src="https://i.ibb.co/jRD6PMy/Login-pana.png" alt="" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Register;