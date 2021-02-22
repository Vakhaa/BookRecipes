import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Input, Button, Checkbox } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';

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

let LoginForm = (props) => {
    const classes = useStyles();
    
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <Grid direction="row" container>
                    <Grid container item >Login</Grid>
                    <Grid container item >
                        <Field name={"login"} placeholder={"login"} component={"input"} />
                    </Grid>

                    <Grid container item >Password</Grid>
                    <Grid container item >
                        <Field name={"password"} placeholder={"password"} component={"input"} />
                    </Grid>

                    <Grid container item md={5}>
                        <Field name={"remember me"} type="checkbox" component={"input"} />
                    </Grid>
                    <Grid container item md={3}>
                        <button /*variant="outlined"*/>Log In</button>
                    </Grid>
                    <Grid container item>Remember me</Grid>

                </Grid>
            </form>
        </>
    );
}

let LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

let Login = (props) => {
    const classes = useStyles();
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </>
    );
}

export default Login;