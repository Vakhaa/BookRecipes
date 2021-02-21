import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    friendsBar: {
        backgroundColor: theme.palette.grey[500],
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

const Notes = (props) => {
    const classes = useStyles();

        return (
            <>
                <Typography>Notes</Typography>
            </>
        )
}

export default Notes;
