import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Paper} from '@material-ui/core';
import LoginContainer from '../../containers/LoginContainer';


const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginBootom: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

export default function StickyFooter(props) {
    const classes = useStyles();

    return (
        <Paper>
            <header className={classes.footer}>
                {/*<Karusel/>*/}
                <Grid container>
                    <Grid container item md={3}></Grid>
                    <Grid container item md={7}>
                        <Container maxWidth="md">
                            <Typography variant="h2">{props.title}</Typography>
                        </Container>
                    </Grid>
                    <Grid container item md={2}>
                        <LoginContainer />
                    </Grid>
                </Grid>
            </header>
        </Paper>
    );
} 