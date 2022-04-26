import React from 'react'
import { Box, Button, Container, Grid, InputLabel, List, ListItem, ListItemButton, ListItemText, Stack, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom';
const EditProfile = () => {
    const navigate = useNavigate()
    return (
        <Container
            sx={{
                marginTop: 9
            }}
            bgcolor={"Background.default"}
        >
            <Grid container sx={{ border: '1px solid lightgrey' }} >
                <Grid item xs={3} sx={{ border: '1px solid lightgrey' }}  >
                    <Stack direction='column'  >
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Edit Profile" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding 
                            onClick={()=>{
                                navigate('/reset-password')
                            }}
                            >
                                <ListItemButton>
                                    <ListItemText primary="Change Password " />
                                </ListItemButton>
                            </ListItem>
                        </List>

                    </Stack>
                </Grid>
                <Grid item xs={9} sx={{ border: '1px solid lightgrey' }}  >
                    <ProfileBox>
                        <form>

                            <Stack>
                                <InputBox>
                                    <LabelBox>
                                        <Image src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                    </LabelBox>
                                    <InputsBox>
                                        <Typography variant='h5'>_mandal097__</Typography>
                                        <Typography variant='span'>Change profile</Typography>
                                    </InputsBox>
                                </InputBox>
                                <InputBox>
                                    <LabelBox><InputLabel>Name : </InputLabel> </LabelBox>
                                    <InputsBox><TextField
                                        id="outlined-basic"
                                        // variant="outlined"
                                        fullWidth
                                    /></InputsBox>
                                </InputBox>
                                <InputBox>
                                    <LabelBox><InputLabel>Username : </InputLabel> </LabelBox>
                                    <InputsBox><TextField
                                        id="outlined-basic"
                                        // variant="outlined"
                                        fullWidth
                                    /></InputsBox>
                                </InputBox>

                                <InputBox>
                                    <LabelBox><InputLabel>Email : </InputLabel> </LabelBox>
                                    <InputsBox><TextField
                                        id="outlined-basic"
                                        // variant="outlined"
                                        fullWidth
                                    /></InputsBox>
                                </InputBox>

                                <InputBox>
                                    <LabelBox><InputLabel>Bio : </InputLabel> </LabelBox>
                                    <InputsBox><TextField
                                        id="outlined-basic"
                                        // variant="outlined"
                                        fullWidth
                                    /></InputsBox>
                                </InputBox>


                                <InputBox>
                                    <LabelBox><InputLabel>Phone Number : </InputLabel> </LabelBox>
                                    <InputsBox><TextField
                                        id="outlined-basic"
                                        // variant="outlined"
                                        fullWidth
                                    /></InputsBox>
                                </InputBox>

                                <InputBox>
                                    <LabelBox><InputLabel>Gender : </InputLabel> </LabelBox>
                                    <InputsBox><TextField
                                        id="outlined-basic"
                                        // variant="outlined"
                                        fullWidth
                                    /></InputsBox>
                                </InputBox>
                                <Button variant="contained"
                                sx={{
                                    width:'20%',
                                    marginLeft:'40%',
                                    marginTop:'40px',
                                    marginBottom:'40px',

                                }}
                                >Submit</Button>
                            </Stack>
                        </form>
                    </ProfileBox>
                </Grid>
            </Grid>
        </Container>
    )
}

const ProfileBox = styled(Box)({
    width: '80%',
    height: 'auto',
    margin: '20px auto',
})
const InputBox = styled(Box)({
    width: '90%',
    height: 'auto',
    margin: '10px auto',
    display: 'flex'
})
const LabelBox = styled(Box)({
    width: '130px',
    height: 'auto',
    margin: '10px auto',
    display: 'flex',
    justifyContent: 'flex-end'
})
const Image = styled('img')({
    width: '100px',
    height: '100px',
    margin: '10px auto',
    borderRadius: '50%'
})
const InputsBox = styled(Box)({
    width: '70%',
    height: 'auto',
    margin: '10px auto',
})

export default EditProfile