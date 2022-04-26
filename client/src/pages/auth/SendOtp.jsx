import React, { useState } from 'react';
import { Box, Typography, InputLabel, TextField, Stack, InputBase } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [loading, setLoading] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('please fill all the fields');
        } else {

            try {
                setLoading(true)
                const url = 'http://localhost:5000/api/user/send-otp'
                const details = {
                    email: email
                }
                const options = {
                    url: url,
                    method: 'POST',
                    headers: {},
                    data: details
                }

                const res = await axios(options);
                if (res.data.status === 'success') {
                    toast.success('Check your Email');
                    setTimeout(() => {
                        navigate(`/forgot-password/${email}`)
                    }, 2000);
                } else {
                    toast.error('Email not Registered')
                }
                setLoading(false)
            } catch {
                toast.error('Something went wrong')
            }
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
                    <Typography variant='h5' mb={1} sx={{ textAlign: 'center' }} > Social Media</Typography>
                    <InputLabel>Email :</InputLabel>
                    <TextField
                        fullWidth
                        type='email'
                        placeholder='example@mail.com'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <SubmitButton sx={{ cursor: 'pointer' }}>
                        <InputBase
                            fullWidth
                            type='submit'
                            mt={2}
                            value={loading ? "Sending Otp" : 'Send Otp'}
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