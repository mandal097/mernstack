import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import styled from '@emotion/styled'

const Comments = () => {
    return (
        <Grid container sx={{
            display: "flex",
            alignItems: 'center',
            height: 'auto',
            padding: '10px',
            boxShadow:'0px 1px 10px grey',
            marginTop:'5px'
        }}>
            <Grid item xs={1.5}>
                <Box
                    sx={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        border:'2px solid red',
                        padding:'3px'
                    }}
                >
                    <UserImage src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='user' />
                </Box>
            </Grid>
            <Grid item xs={3}><Typography variant='span'
                sx={{
                    color: 'black',
                    fontWeight: 200,
                    cursor: 'pointer',
                    '&:hover': {
                        color: 'blue'
                    }
                }}
            > Amarnath</Typography> </Grid>
            <Grid item xs={12}
                sx={{
                    color: 'black',
                    fontWeight: 200,
                    // marginTop:'5px'
                }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequatur. </Grid>
        </Grid>
    )
}



const UserImage = styled('img')({
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover'
})


export default Comments