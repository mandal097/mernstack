import React from 'react'
import { Box } from '@mui/material'

const Rightbar = () => {
    return (
        <Box
            sx={{
                bgcolor: 'coral',
                flex: 3,
                p: 2,
                display: { xs: "none", sm: "block" }
            }}
        >
            rihgtbar
        </Box>
    )
}

export default Rightbar