import React, { useState } from 'react'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import PostDetails from './PostDetails.'
const MyPost = ({ myPosts }) => {
    const [open, setOpen] = useState(false)
    const [details, setDetails] = useState();

    return (
        <MyPostBox>
            {
                myPosts.map(p => (
                    <>
                        <ImgBox key={p.body} onClick={() => {
                            setDetails(p)
                            setOpen(true)
                        }}>
                            <Image
                                src={p.photo}
                                alt='posts of mandal' />
                        </ImgBox>
                    </>
                ))
            }
            {
                open && <PostDetails open={open} setOpen={setOpen} post={details} />
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
    flexWrap: 'wrap',
    cursor: 'pointer'
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