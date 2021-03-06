import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid} from '@material-ui/core';

import SideBar from './SideBar/SideBar';
import { Route } from 'react-router-dom';
import Notes from './Notes/Notes';
import ChatContainer from '../../containers/ChatContainer';


const useStyles = makeStyles((theme) => ({
    friendsBar: {
        backgroundColor: "#e57373",
    },
    fullList: {
        width: 'auto',
    },
    notes: {
        height: 60,
        borderRadius: '100%',
        border: 'inset'
    }
}));

const Messages = (props) => {
    const classes = useStyles();

        return (
            <>
                <Grid container >
                    <Grid container item md={8} >
                        <Route path="/messages" exact>
                            <Notes/>
                        </Route>
                        <Route path="/messages/chat/:userId" exact>
                            <ChatContainer loginUserId={props.loginUserId} addMessage={props.addMessage} />
                        </Route>
                    </Grid>
                    <Grid className={classes.friendsBar} container item md={4}>
                        <SideBar friends={props.friends} /> 
                    </Grid>
                </Grid>
            </>
        )
}

export default Messages;
