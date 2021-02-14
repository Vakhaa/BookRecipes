import React from 'react';
import { connect } from 'react-redux';

import Ingredients from './Book/Ingredients';
import { getIngredients } from '../actions/ingredientsAction'
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'

import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import {
    Switch,
    Route,
    Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

function App (props){ 

    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg">
                <Header title="This is book of ingredients" />
                <main>
                    <Grid container spacing={1} className={classes.mainGrid}>
                        <Grid container item spacing={1} justify="center">
                            <Ingredients
                                ingredients={props.ingredientsReducer.ingredients}
                                fetching={props.ingredientsReducer.fetching}
                                getIngredients={props.ingredientsActions}
                            />
                        </Grid>
                    </Grid>
                </main>
            </Container>
            <Footer title="Footer" description="Something here to give the footer a purpose!" />

        </>

        )
} 

const mapStateToProps = state => {
    console.log(state)
    return {
        ingredientsReducer: state.ingredients
    }
}

const mapDispatchToProps = dispatch => ({
    ingredientsActions: () => dispatch(getIngredients())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
