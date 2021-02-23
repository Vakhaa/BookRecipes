import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid} from '@material-ui/core';
import MessageForm from './MessageForm/MessageForm';

const useStyles = makeStyles((theme) => ({
    root: {
    },
}));

const MessageCreator = (props) => {
    const classes = useStyles();

        return (
            <>
                <Grid container item>
                    <MessageForm onSubmit={props.onSubmit} />
                </Grid>
                <Grid className={classes.friendsBar} container item justify="center" alignItems="center">
                    tools
                </Grid>
            </>
        )
}

export default MessageCreator;
