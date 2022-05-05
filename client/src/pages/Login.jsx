import React, { useState } from 'react';
import { Box, Typography, InputLabel, TextField, Stack, InputBase } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../redux/api/login';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [show, setShow] = useState(false)


  const isFetching = useSelector(state => state.user.isFetching)
  console.log(isFetching);

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
    if (!email || !password) {
      toast.error('please fill all the fields');
    } else {
      e.preventDefault();
      toast.success('Logged in Successfully');
      login(dispatch, { email, password })
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
          <Typography
            variant='p'
            mt={1} color='primary'
            sx={{ fontSize: '13px', marginLeft: 'auto', cursor: "pointer" }}
            onClick={() => {
              navigate('/send-otp')
            }}
          >Forgot Password ?</Typography>
          <SubmitButton>
            <InputBase
              fullWidth
              type='submit'
              mt={2}
              value={isFetching ? "Logging in..." : 'Submit'}
              sx={{ color: 'white' }}
            />
          </SubmitButton>
          <Typography variant='p'
            sx={{
              marginTop: '20px',
              textAlign: 'center',
              fontSize: '13px'
            }}
          >Don't have an Account ?
            <Typography variant='span'
              color='primary'
              sx={{
                cursor: 'pointer',
                marginLeft: '7px',
                fontSize: '16px'
              }}
              onClick={(e) => {
                navigate('/register')
              }}
            >Sign Up</Typography>
          </Typography>
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