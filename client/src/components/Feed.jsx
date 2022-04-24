import React from 'react'
import { Box } from '@mui/material'
import Post from './Post'
import AddPost from './AddPost'
const Feed = () => {
    return (
        <Box
            sx={{
                flex: 7,
                p: 2,
                // display: { xs: "none", sm: "block" }
            }}
        >
            <AddPost />
            <Post />
            <Post />
            <Post />
        </Box>
    )
}

export default Feed