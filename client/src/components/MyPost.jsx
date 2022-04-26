import React from 'react'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
const MyPost = ({ myPosts }) => {

    return (
        <MyPostBox>
            {
                myPosts.map(p => (
                    <ImgBox key={p.id}>
                        <Image
                            src={p.photo}
                            alt='posts of mandal' />
                    </ImgBox>
                ))
            }
        </MyPostBox>
    )
}

const MyPostBox = styled(Box)({
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    flexWrap: 'wrap'
})


const ImgBox = styled(Box)({
    width: '280px',
    height: '280px',
    margin: '10px'
})


const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover'
})





export default MyPost