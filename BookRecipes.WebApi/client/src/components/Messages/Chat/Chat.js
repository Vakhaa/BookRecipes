import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import MessageCreator from './MessageCreator/MessageCreator';
import ChatDisplayer from './ChatDisplayer/ChatDisplayer';
import Header from './Header/Header';
import { Divider, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        /*flexGrow: 1,*/
    },
    paper: {
        width: "100%",
        height: "100%"
    }
}));

const Chat = (props) => {
    const classes = useStyles();
    const onSubmit = (formData) => {
        props.addMessage(formData.messageBody)
    }

    return (
        <Grid className={classes.root} container >
            <Grid container item>
                <Header />
                <Divider />
            </Grid>
            <Grid container item>
                <ChatDisplayer messages={props.messages} />
            </Grid>
            <Grid container item>
                <Divider />
                <MessageCreator onSubmit={onSubmit} />
            </Grid>
        </Grid>
        )
}

/*<Grid container>
    <Grid container item>
        <Header />
    </Grid>
    <Grid container item>
        <ChatDisplayer messages={props.messages} />
    </Grid>
    <Grid container item alignItems="flex-end">
        <MessageCreator onSubmit={onSubmit} />
    </Grid>
</Grid>
*/

export default Chat;
