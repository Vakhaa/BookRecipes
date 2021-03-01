import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Typography, Avatar, Badge, Tooltip, Card, CardActionArea, CardContent} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const Friends = ({friends}) => {
    const classes = useStyles();

    const nameOfFriend = (name) => <Typography>{name}</Typography>

        return (
            <Card className={classes.root}>
                <Typography gutterBottom variant="body1" color="textSecondary" component="h4"> Friends: {friends.length}</Typography>
                <CardActionArea>
                    <CardContent>
                        {
                            friends.map((friend) => (
                                <Badge key={friend.id}>
                                    <Tooltip title={nameOfFriend(friend.name)} placement="top-end">
                                        <Avatar src={friend.photo} alt={friend.name} />
                                    </Tooltip>
                                </Badge>
                            ))
                        }
                    </CardContent>
                </CardActionArea>
            </Card>
        )
}

export default Friends;
