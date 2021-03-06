import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Typography, Avatar, Badge, Tooltip, Card, CardActionArea, CardContent} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    linkText: {
        textDecoration: "none",
        color: "black"
    }
});

const Friends = ({friends, userId}) => {
    const classes = useStyles();

    const nameOfFriend = (name) => <Typography>{name}</Typography>

    return (
        <NavLink to={"/friends/" + userId} className={classes.linkText}>
            <Card className={classes.root}>
                <Typography gutterBottom variant="body1" color="textSecondary" component="h4"> Friends: {friends.length}</Typography>
                <CardActionArea>
                    <CardContent>
                        {
                            friends.map((friend) => (
                                <NavLink to={"/profile/" + friend.id} className={classes.linkText}>
                                    <Badge key={friend.id}>
                                        <Tooltip title={nameOfFriend(friend.name)} placement="top-end">
                                            <Avatar src={friend.photos.smallPhoto} alt={friend.name} />
                                        </Tooltip>
                                    </Badge>
                                </NavLink>
                            ))
                        }
                    </CardContent>
                </CardActionArea>
            </Card>
        </NavLink>
        )
}

export default Friends;
