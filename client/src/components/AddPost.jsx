import React, { useState } from 'react'
import { Avatar, Button, ButtonGroup, InputLabel, Modal, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import axios from 'axios';
import styled from '@emotion/styled';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPost = ({ open, setOpen }) => {

    const [body, setBody] = useState();
    const [img, setImg] = useState();
    const [imagePreview, setImagePreview] = useState()

    const [loading, setLoading] = useState(false);


    // validating images
    function validateImg(e) {
        const file = e.target.files[0];
        if (file.size > 1048576) {
            return alert('Max fie size is 1mb')
        } else {
            setImg(file);
            setImagePreview(URL.createObjectURL(file));
        }
    }

    // uploading image to Cloudinary

    const uploadImg = async () => {
        const data = new FormData();
        data.append('file', img);
        data.append('upload_preset', 'mernchatapp');
        try {
            setLoading(true);
            let res = await fetch('https://api.cloudinary.com/v1_1/mandal097/image/upload', {
                method: 'post',
                body: data
            });
            const urlData = await res.json();
            setLoading(false);
            return urlData.url;
        } catch (error) {
            setLoading(false);
            console.log(error);

        }
    }






    const submit = async (e) => {
        e.preventDefault()
        if (!body) {
            toast.error('Write something')
        } else if (!img) {
            toast.error('Please Select Image')
        } else {
            const url = await uploadImg(img);
            console.log(url);
            const postDetails = {
                body: body,
                photo: url
            }

            const token = localStorage.getItem('token')
            const options = {
                url: 'http://localhost:5000/api/post/create-post',
                method: 'POST',
                headers: {
                    token: `Bearer ${token}`
                },
                data: postDetails
            }
            try {
                let response = await axios(options)
                console.log(response);
                setLoading(false);
                toast.success('Posted Successfully')
            } catch (error) {
                console.log(error);
            }
        }
    }

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
                <form onSubmit={submit}>


                    <Box width={600} height='auto' bgcolor='white' borderRadius={5} p={3} >
                        <Typography id="spring-modal-title" variant="h6" component="h2" textAlign='center'>
                            Create Post
                        </Typography>
                        <UserBox>
                            <Avatar
                                alt='amarnath'
                                src='https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                                sx={{ width: 50, height: 50 }}
                            />
                            <Typography id="spring-modal-title" variant="span" component="span" textAlign='center'>
                                Amarnath kumar mandal
                            </Typography>
                        </UserBox>
                        <TextField
                            id="standard-multiline-static"
                            multiline
                            rows={2}
                            placeholder="What's on your mind"
                            variant='standard'
                            sx={{ width: '100%' }}
                            onChange={(e) => setBody(e.target.value)}
                        />
                        <Stack direction='row' gap={1} mt={2} mb={3}
                            sx={{
                                display: 'flex',
                                alignItems: "center",
                                justifyContent: 'space-evenly'
                            }}
                        >
                            <EmojiEmotionsIcon
                                color='primary'
                                sx={{ width: '40px', height: '40px' }}
                            />
                            <InputLabel htmlFor='pic'>
                                <ImageIcon
                                    color='secondary'
                                    sx={{ width: '40px', height: '40px' }}
                                />
                            </InputLabel>
                            <input type="file" name="" id="pic" style={{ display: 'none' }} onChange={validateImg} />
                            <VideoCameraBackIcon
                                color='success'
                                sx={{ width: '40px', height: '40px' }}
                            />
                            <PersonAddAltIcon
                                color='error'
                                sx={{ width: '40px', height: '40px' }}
                            />
                        </Stack>
                        {img &&

                            <ImagePreviewBox >
                                <Img
                                    src={imagePreview}
                                    alt="img"
                                />
                            </ImagePreviewBox>
                        }
                        <ButtonGroup
                            fullWidth
                            variant='contained'
                            aria-label="oulined primaru button group"
                        >
                            <Button type='submit'>{loading ? 'Posting..' : "Post"}</Button>
                        </ButtonGroup>
                    </Box>
                </form>
            </StyledModal>
        </>
    )
}


const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center'
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
})
const ImagePreviewBox = styled(Box)({
    width: "40%",
    height: '200px',
    marginBottom: '10px',
    marginLeft: '30%'
})

const Img = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover'
})

export default AddPost