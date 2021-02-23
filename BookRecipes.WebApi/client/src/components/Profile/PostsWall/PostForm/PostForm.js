import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Typography, Button, Input, Grid, Divider } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import InputReduxMUI from '../../../../utiles/ReduxMUIForms/InputReduxMUI';

const useStyles = makeStyles({    
    root: {
        width: "100%",
        border: "outset"
    },
    inputPost: {
    width: "100%"
    },
    bgRed: {
        backgroundColor: "#e57373",
    },
});


const PostForm = (props) => {
    const classes = useStyles();

    return (
        <form className={classes.root} onSubmit={props.handleSubmit}>
            <Grid container>
                <Grid container item>
                    <Field name="postTitle" type="input" component={InputReduxMUI} label="It is title message"
                        className={classes.inputPost} variant="outlined" />
                </Grid>
                <Grid container item>
                    <Field name="postBody" type="input" component={InputReduxMUI} label="It is body message"
                        className={classes.inputPost} variant="outlined" rows="5" multiline/>
                </Grid>
                <Grid container item justify="flex-end">
                    <Field name={"send"} type="submit" component={Button}
                        className={classes.bgRed} variant="outlined">
                        Create post
                    </Field>
                </Grid>
            </Grid>
        </form>
        )
}

export default reduxForm({
    form: 'posts'
})(PostForm)
;
