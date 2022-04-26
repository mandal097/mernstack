import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Post from './Post';
import AddPost from './AddPost';
import axios from 'axios';


const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const url = 'http://localhost:5000/api/post/get-all-posts'
            const res = await axios.get(url, {
                headers: {
                    token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjNiN2I2OWMwOWIyNjI5MDQyMDllMyIsImVtYWlsIjoibWFuZGFsYW1hcm5hdGhrdW1hcjhAZ21haWwuY29tIiwiaWF0IjoxNjUwODA0NTY3LCJleHAiOjE2NTE2Njg1Njd9.TQ_X2DqFDft3ad5wf8is61YqXJDHSp7IcImCeJigS5s`
                }
            })
            setPosts(res.data.posts);
        }
        fetchPosts()
    }, [])

    return (
        <Box
            sx={{
                flex: 7,
                p: 2,
                // display: { xs: "none", sm: "block" }
            }}
        >
            <AddPost />
            {
                posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))
            }
        </Box>
    )
}

export default Feed