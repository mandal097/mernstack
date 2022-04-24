import React from 'react'
import { Avatar, Button, ButtonGroup,  Modal, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import styled from '@emotion/styled';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';

const AddPost = ({ open, setOpen }) => {

    return (
        <>
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
                <Box width={600} height={400} bgcolor='white' borderRadius={5} p={3} >
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
                    />
                    <Stack direction='row' gap={1} mt={2} mb={3} 
                    sx={{
                        display:'flex',
                        alignItems:"center",
                        justifyContent:'space-evenly'
                    }}
                    >
                        <EmojiEmotionsIcon
                            color='primary'
                            sx={{ width: '40px', height: '40px' }}
                        />
                        <ImageIcon
                            color='secondary'
                            sx={{ width: '40px', height: '40px' }}
                        />
                        <VideoCameraBackIcon
                            color='success'
                            sx={{ width: '40px', height: '40px' }}
                        />
                        <PersonAddAltIcon
                            color='error'
                            sx={{ width: '40px', height: '40px' }}
                        />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant='contained'
                        aria-label="oulined primaru button group"
                    >
                        <Button >Post</Button>
                        <Button sx={{ width: '100px' }}>
                            <DateRangeIcon />
                        </Button>
                    </ButtonGroup>
                </Box>
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

export default AddPost