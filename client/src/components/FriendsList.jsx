import React, { useState, useEffect } from 'react'
import { Box, Modal, Stack, Typography } from '@mui/material'
import styled from '@emotion/styled'
import Friends from './Friends'
import axios from 'axios'
const FriendsList = ({ open, setOpen, endPoint }) => {

    const [friends, setFriends] = useState([]);
    useEffect(() => {

        const fetchList = async () => {
            const token = localStorage.getItem('token')
            const url = `http://localhost:5000/api/user/connections/${endPoint}`
            const res = await axios.get(url, {
                headers: {
                    token: `Bearer ${token}`
                }
            })
            endPoint === "followers" ? setFriends(res.data.followers) : setFriends(res.data.followings)
        }
        fetchList()
    }, [endPoint])
    console.log(friends);
    return (
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
            <Box width={600} height='auto' bgcolor='white' borderRadius={5} p={3} >
                <Typography variant='h5'
                    sx={{ color: 'blue', textAlign: 'center', borderBottom: '2px solid red', textTransform: 'capitalize' }}
                >{endPoint}</Typography>
                <Stack direction='column' sx={{
                    marginTop: '2rem',
                    height: '60vh',
                    overflowY: 'scroll'
                }}>
                    {
                        friends.map((f) => (
                            <Friends key={f._id} f={f} endPoint={endPoint} />
                        ))
                    }
                    {
                        friends.length === 0 && <Typography variant='h6'
                            sx={{
                                color: 'red',
                                textAlign: 'center'
                            }}
                        >No {endPoint}</Typography>

                    }
                </Stack>

            </Box>

        </StyledModal>
    )
}

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center'
})
export default FriendsList