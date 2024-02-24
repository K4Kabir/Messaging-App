import React, { useRef, useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Register = ({ setLogin }) => {
    const selectFile = useRef()
    const [file, setFile] = useState('');
    const [imagesrc, setImagesrc] = useState('')

    return (
        <Container component={'main'}>
            <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Paper elevation={3} sx={{ p: 5, display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', width: '50%' }}>
                    <Typography variant='h5' textAlign={'center'}>Register</Typography>
                    <Stack position={'relative'} width={'10rem'} margin={'auto'}>
                        <Avatar sx={{ width: '10rem', height: '10rem', objectFit: 'contain' }} src={imagesrc || ''} />
                        <>
                            <IconButton onClick={() => selectFile.current.click()}>
                                <CameraAltIcon />
                                <input accept='.png, .jpg, .jpeg' onChange={(e) => {
                                    setFile(e.target.files[0])
                                    setImagesrc(URL.createObjectURL(e.target.files[0]))
                                }} ref={selectFile} style={{ display: 'none' }} type='file' />
                            </IconButton>
                        </>
                    </Stack>
                    <TextField required type='text' label='Name' />
                    <TextField required type='text' label='Bio' />
                    <TextField required type='text' label='Username' />
                    <TextField required type='password' label='Password' />
                    <Button type='submit' variant='contained' size='small'>Login</Button>
                    <Typography textAlign={'center'}>OR</Typography>
                    <Button onClick={() => setLogin((prev) => !prev)} variant='outlined'>Register</Button>
                </Paper>
            </form>
        </Container>
    )
}

export default Register
