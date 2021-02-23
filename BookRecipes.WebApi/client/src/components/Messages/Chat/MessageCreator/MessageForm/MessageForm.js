import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Paper, Button } from '@material-ui/core';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { Field, reduxForm } from 'redux-form';
import InputReduxMUI from '../../../../../utiles/ReduxMUIForms/InputReduxMUI';

const useStyles = makeStyles((theme) => ({
    fullWidth: {
        width: "100%",
    },
    rounded: {
        width: 300,
        height: 300
    }
}));

const MessageForm = (props) => {
    const classes = useStyles();


    return (
        <>
            <form className={classes.fullWidth} onSubmit={props.handleSubmit}>
                <Grid container>
                    <Grid item md={11}>
                        <Paper className={classes.fullWidth} elevation={3}>
                            <Field name="messageBody" component={InputReduxMUI} label="This is your messages" className={classes.fullWidth} type="input" disableUnderline variant="outlined" multiline />
                        </Paper>
                    </Grid>
                    <Grid container item md={1} justify="center" alignItems="center" >
                        <Field name={"send"} type="submit" component={Button}>
                            <SendRoundedIcon color="secondary" />
                        </Field>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default reduxForm({
    form: 'message'
})(MessageForm)
