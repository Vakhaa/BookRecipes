import React from 'react'
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import SideBarContainer from '../containers/SideBarContainer';

import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import RouteComponent from './RouteComponent.js';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        //marginTop: theme.spacing(3),
    },
}));


// Eto dermo nurzhno budet wmontirowat i poczistete przed smertju componenty
const catchAllUnhandleErrors = (promiseRejectionEvent) => {
    alert("some error");
    console.error(promiseRejectionEvent);
} 

window.addEventListener("unhandledrejection", catchAllUnhandleErrors); //Did mount

window.removeEventListener("unhandledrejection", catchAllUnhandleErrors); //Did unmount

export default function App (props){ 
    ///TODO: init users here 
    const classes = useStyles();

    return (
        <Paper>
            <Header title="This is book of recipes" />
            <main>
                <Grid direction="row" container className={classes.mainGrid}>
                    <Grid container item md={2}>
                        <SideBarContainer />
                    </Grid>
                    <Grid container item md={10}>
                        <RouteComponent />
                    </Grid>
                </Grid>
            </main>
            <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </Paper>
        )
} 
