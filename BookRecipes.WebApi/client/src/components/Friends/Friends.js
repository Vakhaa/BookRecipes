import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Avatar,  Badge, MenuItem, Chip, Button } from '@material-ui/core';

import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    linkText: {
        textDecoration: "none",
        color: "black"
    }
});

const Friends = (props) => {
    const classes = useStyles();

        return (
            <>
                <Grid direction="column" container>
                    {props.friends.map((friend) => (
                        <NavLink key={friend.id} to={"/profile/" + friend.id} className={classes.linkText}>
                            <MenuItem>
                                <Badge>
                                    <Avatar alt={friend.name} src={friend.photos.smallPhoto} /*src={friend.photo} />*//>
                                </Badge>
                                <Badge>
                                    <Typography> {friend.name} </Typography>
                                </Badge>
                                <Badge>
                                    <Typography> {friend.state}</Typography>
                                </Badge>
                                <Badge>
                                    <Chip label="Online" color="secondary" />
                                </Badge>
                                <Badge>
                                    <Button>Follow</Button>
                                </Badge>
                                <Badge>
                                    <Button>Unfollow</Button>
                                </Badge>
                            </MenuItem>
                        </NavLink>
                    ))}
                </Grid>
            </>
        )
}

export default Friends;
