import React, { useState, useEffect } from 'react';
import { Box, Button, Container } from '@mui/material';
import ProfileHeader from '../components/ProfileHeader';
import axios from 'axios';
import styled from '@emotion/styled';
import GridOnIcon from '@mui/icons-material/GridOn';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MyPost from '../components/MyPost';
import Footer from '../components/Footer';

const Profile = () => {

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem('token')
      const url = 'http://localhost:5000/api/post/get-my-all-posts'
      const res = await axios.get(url, {
        headers: {
          token: `Bearer ${token}`
        }
      })
      setMyPosts(res.data.posts);
    }
    fetchPosts()
  }, [])

  console.log(myPosts.length);

  return (
    <>
      <Container
        sx={{
          marginTop: 10,
        }}
      >
        <ProfileHeader myPosts={myPosts} />
        <ButtonBox>
          <Buttons variant="text" startIcon={<GridOnIcon />}>Posts</Buttons>
          <Buttons variant="text" startIcon={<BookmarkAddedIcon />}>Saved</Buttons>
          <Buttons variant="text" startIcon={<LocalOfferIcon />}>Tagged</Buttons>
        </ButtonBox>
        <Box
          sx={{
            width: '80%',
            margin: '10px auto'
          }}
        >

          <MyPost myPosts={myPosts} />
        </Box>
        <Footer />

      </Container>
    </>
  )
}

const ButtonBox = styled(Box)({
  margin: '10px auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: "center",
})
const Buttons = styled(Button)({
  color: 'rgba(0,0,0,0.6)',
  fontSize: '10px',
  fontWeight: 'bolder',
  margin: '0 10px'
})
export default Profile