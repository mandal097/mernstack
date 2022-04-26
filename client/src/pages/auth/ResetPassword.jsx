import React, { useState } from 'react';
import { Box, Typography, InputLabel, TextField, Stack, InputBase } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const user = useSelector((state) => state.user.currentUser)
    console.log(user.id);

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
        e.preventDefault();
        if (!password) {
            toast.error('please fill all the fields');
        }
        try {
            setLoading(true)
            const url = 'http://localhost:5000/api/user/reset-password'
            const details = {
                password: password

            }
            const options = {
                url: url,
                method: 'POST',
                headers: {
                    token: `Bearer ${localStorage.getItem('token')}`
                },
                data: details
            }

            const res = await axios(options);
            console.log(res);
            if (res.data.status === 'success') {
                toast.success('Successfully changed your password');
                setTimeout(() => {
                    navigate(-1)
                }, 1200);
            } else {
                toast.error('Something went wrong')
            }
            setLoading(false)
        } catch {
            toast.error('Something went wrong')
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
            <form onSubmit={(e) => submitForm(e)}>
                <Stack
                    sx={{
                        width: 450,
                        height: 'auto',
                        backgroundColor: 'primary',
                        border: '1px solid grey',
                        borderRadius: 2,
                        padding: "15px 20px",
                    }}
                >
                    <Typography variant='h5' mb={1} sx={{ textAlign: 'center' }} >Reset Password</Typography>

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
                        mt={1}
                        sx={{
                            marginRight: 'auto',
                            fontSize: '12px',
                            cursor: 'pointer',
                            "&:hover": {
                                color: 'blue'
                            }
                        }}
                        onClick={toggle}
                    > {show ? 'Hide' : 'Show'}</Typography>

                    <SubmitButton sx={{ cursor: 'pointer' }}>
                        <InputBase
                            fullWidth
                            type='submit'
                            mt={2}
                            value={loading ? "Loading" : 'Submit'}
                            sx={{ color: 'white', cursor: 'pointer' }}

                        />
                    </SubmitButton>
                </Stack>
            </form>
        </Box>
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

export default Login