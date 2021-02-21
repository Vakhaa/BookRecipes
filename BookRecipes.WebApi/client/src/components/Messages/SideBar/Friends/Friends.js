import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Avatar, Badge, MenuItem, Paper, MenuList } from '@material-ui/core';

import MailIcon from '@material-ui/icons/Mail';


const useStyles = makeStyles((theme) => ({
    paper: {
        /*marginRight: theme.spacing(2),*/
        /*width: "auto"*/
    },
    linkText: {
        textDecoration: "none",
        color : "black"
    },
    notesIcon: {
        color: "#388e3c",
    },
    notesButton: {
        height: 60,
        borderRadius: '100%',
        border: 'inset',
        borderColor: "green"

    },
    friendAvatar: {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        }
    },
    buttonNavigation: {
        borderRadius: "5px 0 0 5px",
    }
}));

const Friends = (props) => {
    const classes = useStyles();

        return (
            <>
                {props.friends.map((friend) => (
                    <NavLink to="/messages/chat" className={classes.linkText}>
                        <MenuItem className={classes.buttonNavigation}>
                            <Badge color="secondary" badgeContent={friend.newMessages}>
                                <MailIcon />
                            </Badge>
                            <Badge>
                                <Typography>{friend.name}</Typography>
                            </Badge>
                            <Badge>
                                <Avatar alt={friend.name} src={friend.photo} />
                            </Badge>
                        </MenuItem>
                    </NavLink>
                ))}
            </>
        )
}

/*{
    props.friends.map((friend) => (
        <Grid container item justify="flex-end">
            <NavLink to="/messages/chat" className={classes.linkText}>
                <Badge color="secondary" badgeContent={friend.newMessages}>
                    <MailIcon />
                </Badge>
                <Badge>
                    <Typography>{friend.name}</Typography>
                </Badge>
                <Badge>
                    <Avatar alt={friend.name} src={friend.photo} />
                </Badge>
            </NavLink>
        </Grid>
    ))
}*/
export default Friends;
