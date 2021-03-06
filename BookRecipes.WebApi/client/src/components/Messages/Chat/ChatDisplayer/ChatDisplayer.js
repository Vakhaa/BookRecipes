import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    bg: {
    },
    paper: {
        backgroundColor: theme.palette.grey[300],
        width: "100%",
    }
}));

const ChatDisplayer = (props) => {
    const classes = useStyles();

        return (
            <>
                {
                    props.messages.map((message) => (
                        <Grid key={message.id} container item justify={message.isMe ? "flex-end" : "flex-start"}>
                            {/*<Typography>{message.isChange ? "Changed": null}</Typography>
                                    <Typography>{message.dataCreated.data} {message.dataCreated.time}</Typography>*/}
                            <Paper className={classes.bg}>
                                <Typography>
                                    {message.message}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))
                }
            </>
        )
}

export default ChatDisplayer;
