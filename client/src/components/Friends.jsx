import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Friends = ({ f, endPoint }) => {
    console.log(f);
    const navigate = useNavigate()
    return (
        <Grid container sx={{
            marginTop: '1rem'
        }}>
            <Grid item xs={6}><Typography variant='span' 
            sx={{
                color:'black',
                fontWeight:200,
                cursor:'pointer',
                '&:hover':{
                    color:'blue'
                }
            }}
            onClick={()=>{
                navigate(`/profile/${f._id}`)
            }}
            > {f.name}</Typography> </Grid>
            <Grid item xs={3}> <Button variant="contained">Follow</Button> </Grid>
            <Grid item xs={3}> <Button variant="contained">Unfollow</Button> </Grid>
        </Grid>
    )
}

export default Friends