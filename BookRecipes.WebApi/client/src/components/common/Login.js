import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Input, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        /*minHeight: '100vh',*/
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <>
            <Grid container item>Login</Grid>
            <Grid container item><Input /></Grid>
            <Grid container item>Password</Grid>
            <Grid container item><Input /></Grid>
            <Grid container item md={3}></Grid>
            <Grid container item md={7}><Button>Log In</Button></Grid>
        </>
    );
}