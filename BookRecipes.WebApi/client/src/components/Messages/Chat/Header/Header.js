import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Avatar, Chip, IconButton} from '@material-ui/core';

import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VideoCallIcon from '@material-ui/icons/VideoCall';

const useStyles = makeStyles((theme) => ({
    
    root: {
    }
}));

const Header = (props) => {
    const classes = useStyles();    
        return (
            <>
                <Grid className={classes.root} container item justify="flex-start" alignItems="center" md={6}>
                    <IconButton size="small" color="primary" >
                        <MoreVertIcon />
                    </IconButton>
                    <IconButton size="small" color="primary" aria-label="send">
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton size="small" color="primary" aria-label="send">
                        <LocalPhoneIcon />
                    </IconButton>
                </Grid>
                <Grid container item justify="flex-end" alignItems="center" md={6}>
                    <Chip label="Online" color="secondary" />
                    <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
                </Grid>
            </>
        )
}

export default Header;
