import React, { useState } from 'react';
import { Box, Typography, InputLabel, TextField, Stack, InputBase } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate()

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [show, setShow] = useState(false)

    const toggle = () => {
        switch (show) {
            case false:
                setShow(true);
                break;
            case true:
                setShow(false);
                break;
            default:
                setShow(false)

        }
    }


    const submitForm = async (e) => {
        if (!name || !email || !password) {
            toast.error('please fill all the fields');
        } else {
            e.preventDefault();
            const url = 'http://localhost:5000/api/user/registration'
            const userDetails = {
                name: name,
                email: email,
                password
            }
            const options = {
                url: url,
                method: 'POST',
                headers: {},
                data: userDetails
            }

            const res = await axios(options)
            toast.success('Registered Successfully');
            console.log(res);
        }
    }

    return (
        <Box
            sx={{
                width: '100%',
                height: " calc(100vh - 70px)",
                marginTop: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >

            <ToastContainer />

            <form onSubmit={submitForm}>
                <Stack
                    sx={{
                        width: 450,
                        height: 'auto',
                        backgroundColor: 'primary',
                        border: '1px solid gray',
                        borderRadius: 2,
                        padding: "15px 20px",
                    }}
                >
                    <Typography variant='h5' textAlign='center' mb={1}>Social Media</Typography>

                    <InputLabel>Name :</InputLabel>
                    <TextField
                        fullWidth
                        type='name'
                        required={true}
                        placeholder='eg. Amarnath'
                        onChange={(e) => setName(e.target.value)}
                    />

                    <InputLabel sx={{ marginTop: "20px" }}>Email :</InputLabel>
                    <TextField
                        fullWidth
                        required={true}
                        type='email'
                        placeholder='example@mail.com'
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputLabel sx={{ marginTop: "20px" }}>Password :</InputLabel>
                    <TextField
                        fullWidth
                        type={show ? 'text' : 'password'}
                        required={true}
                        placeholder='write your password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Typography
                        variant='span'
                        color='primary'
                        mt={2}
                        sx={{
                            marginLeft: 'auto',
                            fontSize: '12px',
                            cursor: 'pointer',
                            "&:hover": {
                                color: 'blue'
                            }
                        }}
                        onClick={toggle}
                    > {show ? 'Hide' : 'Show'}</Typography>
                    <SubmitButton>
                        <InputBase
                            fullWidth
                            type='submit'
                            mt={2}
                            value='Submit'
                            sx={{ color: 'white' }}
                        />
                    </SubmitButton>
                    <Typography variant='p'
                        sx={{
                            marginTop: '20px',
                            textAlign: 'center',
                            fontSize: '13px'
                        }}
                    >Already have an Account ?
                        <Typography variant='span'
                            color='primary'
                            sx={{
                                cursor: 'pointer',
                                marginLeft: '7px',
                                fontSize: '16px'
                            }}
                            onClick={(e) => {
                                navigate('/login')
                            }}
                        >Login</Typography>
                    </Typography>
                </Stack>
            </form>
        </Box >
    )
}

const SubmitButton = styled('div')({
    width: "100%",
    height: '50px',
    borderRadius: '5px',
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'red',
    cursor: 'pointer'
})

export default Register