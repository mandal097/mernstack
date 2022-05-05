import React, { useState, useEffect } from 'react'
import { Box, Grid, Modal, Stack, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled'
import axios from 'axios'
import Comments from './Comments';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostDetails = ({ open, setOpen, post }) => {

    const [comment, setComment] = useState()
    console.log(post);

    const pushComment = async () => {
        const url = `http://localhost:5000/api/post/comments/${post._id}`;
        const token = localStorage.getItem('token')
        const obj ={
            text:comment
        }
        const options = {
            url: url,
            method: 'PUT',
            headers: {
                token: `Bearer ${token}`
            },
            data: obj
        }
        if (!comment) {
            toast.error('Write Something')
        } else {
            try {
                let response = await axios(options)
                console.log(response);
                toast.success('Commented Successfully')
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        const fetchComments = async () => {
            const url = `http://localhost:5000/api/post/comments/${post._id}`;
            const token = localStorage.getItem('token')
            const res = await axios.get(url, {
                headers: {
                    token: `Bearer ${token}`
                }
            })
            console.log(res);
        }
        fetchComments()
    }, [])

    return (
        <>
            <ToastContainer />
            <StyledModal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Box width={1000} height='500' bgcolor='white' borderRadius={2} p={0} >
                    <Grid container>
                        <Grid item xs='12' sm='6'
                            sx={{
                                height: '80vh'
                            }}
                        >
                            <ImgBox>
                                <Image src={post.photo} alt="" />
                            </ImgBox>
                        </Grid>
                        <Grid item xs='12' sm='6'
                            sx={{
                                border: '1px solid grey',
                                height: '80vh'
                            }}
                        >
                            <Stack sx={{ height: '100%' }}>
                                <Grid container sx={{
                                    display: "flex",
                                    alignItems: 'center',
                                    borderBottom: '1px solid grey',
                                    height: '60px',
                                    paddingLeft: '10px'
                                }}>
                                    <Grid item xs={2}>
                                        <Box
                                            sx={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%'
                                            }}
                                        >
                                            <UserImage src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='user' />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={2}><Typography variant='span'
                                        sx={{
                                            color: 'black',
                                            fontWeight: 200,
                                            cursor: 'pointer',
                                            '&:hover': {
                                                color: 'blue'
                                            }
                                        }}
                                    > Amarnath</Typography> </Grid>
                                    <Grid item xs={2}
                                        sx={{
                                            color: 'black',
                                            fontWeight: 200,
                                            cursor: 'pointer',
                                            '&:hover': {
                                                color: 'blue'
                                            }
                                        }}
                                    >Follow </Grid>
                                </Grid>


                                <CommentBox>
                                    <Comments />
                                    <Comments />
                                    <Comments />
                                    <Comments />
                                </CommentBox>

                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '50px',
                                        display: "flex",
                                        alignItems: 'center',
                                        borderTop: '1px solid grey',
                                        marginTop: 'auto',
                                        padding: '0 10px'
                                    }}
                                >
                                    <SentimentSatisfiedAltIcon sx={{ fontSize: '40px', color: 'blue', marginRight: '10px' }} />
                                    <TextField
                                        id="standard-multiline-static"
                                        // multiline
                                        rows={2}
                                        placeholder="What's on your mind"
                                        variant='standard'
                                        sx={{ flex: 1 }}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                    <Typography variant='span'
                                        sx={{
                                            color: 'blue',
                                            marginLeft: '20px',
                                            cursor: 'pointer'
                                        }}
                                        onClick={pushComment}
                                    >post</Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </StyledModal>
        </>
    )
}

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "hidden"
})


const ImgBox = styled(Box)({
    width: '100%',
    height: '100%',
})

const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover'
})

const UserImage = styled('img')({
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover'
})

const CommentBox = styled(Box)({
    width: '100%',
    height: '50%',
    marginTop: '10px',
    overflowY: 'scroll',

})



export default PostDetails