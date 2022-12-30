import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Link, useNavigate } from 'react-router-dom'
import { deletePost, likePost, unlikePost } from '../api/api'
import { useSelector } from 'react-redux';
const Post = ({ description, location, image, date, user, id, likes }) => {
    const islogin = useSelector((state) => state.login);
    const navigate = useNavigate();
    const isLoggedInUser = () => {
        if (localStorage.getItem("userId") === user._id) {
            return true;
        }
        return false;
    }
    const handleDelete = () => {
        deletePost(id).then(() => navigate('/posts')).catch((err) => console.log(err));
    };


    const handleLike = () => {
        likePost(id).then(() => navigate('/posts')).catch((err) => console.log(err));
    };
    const handleunLike = () => {
        unlikePost(id).then(() => navigate('/posts')).catch((err) => console.log(err));
    };

    return (
        <Box display={"flex"} width="70%" marginTop="8px" flexDirection="column" justifyContent={"center"} alignItems={"center"}>
            <Card sx={{ width: "50%", height: "405px", bgcolor: "#80b3ff" }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            {user.name.charAt(0)}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            {isLoggedInUser() && <> <Box display={"flex"}  >
                                <Box sx={{ ml: "auto" }}>

                                    <IconButton LinkComponent={Link} to={`/edit/${id}`} sx={{ marginLeft: "3px" }} ><EditIcon /></IconButton>
                                    <IconButton onClick={handleDelete} sx={{ marginLeft: "3px" }}><DeleteIcon /></IconButton>
                                </Box>
                            </Box> </>}
                        </IconButton>
                    }
                    title={user.name}
                    subheader={date}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="photoofimage"
                />
                <CardContent><Typography sx={{ textAlign: "center" }}>{location}</Typography>
                    <Typography sx={{ textAlign: "center" }} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <Box sx={{ paddingLeft: "10px" }} display="flex">
                    {islogin ?
                        <>

                            {
                                likes.includes((localStorage.getItem("userId"))) ?

                                    <><IconButton size='large' onClick={handleunLike}>
                                        <ThumbUpIcon fontSize='inherit' />
                                    </IconButton></>
                                    :
                                    <> <IconButton onClick={handleLike}>
                                        <ThumbUpOutlinedIcon fontSize='inherit' />
                                    </IconButton></>
                            }

                        </>
                        :
                        <><IconButton size='large' disabled>
                            <ThumbUpOutlinedIcon fontSize='inherit' />
                        </IconButton></>
                    }

                    <Typography variant="h6" sx={{ paddingLeft: "15px", paddingTop: "10px" }}>{likes.length} Likes</Typography>
                </Box>
            </Card >
        </Box >
    )
}

export default Post
