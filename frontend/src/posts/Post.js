import { Avatar, Box, Button, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link, useNavigate } from 'react-router-dom'
import { deletePost} from '../api/api'
const Post = ({ description, location, image, date, user, id }) => {
    const navigate = useNavigate();
    const isLoggedInUser = () => {
        if (localStorage.getItem("userId") === user._id) {
            return true;
        }
        return false;
    }
    const handleDelete = () => {
        deletePost(id).then(()=>navigate('/posts')).catch((err)=>console.log(err));
    };

    return (
        <Box display={"flex"} width="70%" marginTop="8px" flexDirection="column" justifyContent={"center"} alignItems={"center"}>
            <Card sx={{ width: "50%", height: "380px", bgcolor: "#80b3ff" }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            { user.name.charAt(0) }
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">

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
                { isLoggedInUser() && <> <Box display={"flex"}  >
                    <Box sx={{ ml: "auto" }}>
                        <Button LinkComponent={Link} to={`/edit/${id}`} sx={{ marginLeft: "3px" }} ><EditIcon /></Button>
                        <Button onClick={handleDelete} sx={{ marginLeft: "3px" }}><DeleteIcon /></Button>
                    </Box>
                </Box> </> }
            </Card>
        </Box>
    )
}

export default Post
