import React from 'react'
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography
} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Post = ({ post }) => {
    return (
        <Card sx={{
            width: "100%",
            height: "auto",
            marginBottom: '10px'
        }
        }>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red[500]' }} aria-label="recipe">
                        A
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={post.postedBy.name}
                subheader={post.updatedAt.slice(0,10)}
            />
            <CardMedia
                component="img"
                height='10%'
                image={post.photo}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {post.body}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>

        </Card>
    )
}

export default Post