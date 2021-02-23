import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Avatar, Badge } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    rounded: {
        width: 300,
        height:300
    },
});

const Friends= (props) => {
    const classes = useStyles();

        return (
            <>
                <Grid container item>
                    <Typography>Friends:</Typography>
                    {
                        props.friends.map((friend) => (
                            <Badge key={friend.id}>
                                { friend.name}
                                <Avatar src={friend.photo} alt={friend.name} />
                            </Badge>
                        ))
                    }
                </Grid>
            </>
        )
}

export default Friends;
