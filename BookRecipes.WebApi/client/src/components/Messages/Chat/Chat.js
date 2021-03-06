import React, { useEffect } from 'react';

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

/*const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');   //wss://bookOfRecipes.com/handlers/ChatHandler.ashx 
*/
const Chat = ({ messages, onSubmit }) => {

    const classes = useStyles();

    /*
    useEffect(() => {
        wsChannel.addEventListener('message', (e) => {
            console.log(JSON.parse(e))
        })
    }, []);*/

    return (
        <Grid className={classes.root} container >
            <Grid container item>
                <Header />
                <Divider />
            </Grid>
            <Grid container item>
                <ChatDisplayer messages={messages} />
            </Grid>
            <Grid container item>
                <Divider />
                <MessageCreator onSubmit={onSubmit} />
            </Grid>
        </Grid>
        )
}

export default Chat;
