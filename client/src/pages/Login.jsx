import React, { useState } from 'react'
import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import Register from './Register'

const Login = () => {
    const [login, setLogin] = useState(true)
    const [loginData, setLoginData] = useState({});

    const handleInput = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    if (!login) {
        return (
            <Register setLogin={setLogin} />
        )
    }

    return (

        <Container component={'main'} >
            <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Paper elevation={3} sx={{ p: 5, display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', width: '50%' }}>
                    <Typography variant='h5' textAlign={'center'}>Login</Typography>
                    <TextField value={loginData.username} onChange={(e) => handleInput(e)} name='username' required type='text' label='Username' />
                    <TextField value={loginData.password} onChange={(e) => handleInput(e)} name='password' required type='password' label='Password' />
                    <Button type='submit' variant='contained' size='small'>Login</Button>
                    <Typography textAlign={'center'}>OR</Typography>
                    <Button onClick={() => setLogin((prev) => !prev)} variant='outlined'>Register</Button>
                </Paper>
            </form>
        </Container >
    )
}

export default Login
