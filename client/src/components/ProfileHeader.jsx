import React from 'react'
import { Box, Grid, Stack, Typography, Button, IconButton } from '@mui/material'
import styled from '@emotion/styled'
import SettingsIcon from '@mui/icons-material/Settings';

const ProfileHeader = () => {
    return (
        <Grid container spacing={2}
            sx={{ borderBottom: '1px solid rgba(0,0,0,0.3)', paddingBottom: 2 }}
        >
            <Grid item xs={6} sm={3} >
                <ImgBox>
                    <ProfileImg src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </ImgBox>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Stack direction='column'>

                    <Grid container spacing={2} display='flex' alignItems='center'>
                        <Grid item sm={5}>
                            <Typography variant='p' fontSize={25} sx={{ color: 'gray', fontWeight: '400' }}>__mandal097_</Typography>
                        </Grid>
                        <Grid item sm={3}>
                            <EditProfileButton variant="outlined">Edit Profile</EditProfileButton>
                        </Grid>
                        <Grid item sm={2}>
                            <IconButton aria-label="upload picture" component="span">
                                <SettingsIcon />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Stack direction='row' mt={3} gap={3}>
                        <InfoButtons size="large"><Span>1</Span> post</InfoButtons>
                        <InfoButtons size="large"><Span>147</Span> Followers</InfoButtons>
                        <InfoButtons size="large"><Span>235</Span> Followings</InfoButtons>
                    </Stack>
                    <Typography mt={3} variant='p'>Amarnath Kumar Mandal</Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}

const ImgBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    padding: 10
})
const ProfileImg = styled('img')({
    height: '150',
    width: '150px',
    borderRadius: '50%',
    objectFit: 'cover'
})

const EditProfileButton = styled(Button)({
    width: 'auto',
    height: '40px',
    border: '1px solid rgba(0,0,0,0.5)',
    fontSize: '12px',
    fontWeight: 'bold',
    color: 'black'
})

const InfoButtons = styled(Button)({
    color: 'rgba(0,0,0,0.6)',
    fontSize: '12px',
    fontWeight: "bold",
    display: 'flex',
    alignItems: "center"
})

const Span = styled('span')({
    fontWeight: 'bolder',
    color: 'black',
    marginRight: 8,
    padding: '0',
})
export default ProfileHeader