import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
        <header className={classes.footer}>
            <Container maxWidth="md">
                <Typography variant="h2" textAlign="center">{props.title}</Typography>
            </Container>
        </header>
    );
} 