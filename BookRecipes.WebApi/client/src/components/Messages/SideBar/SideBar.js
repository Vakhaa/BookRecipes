import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Button,  InputBase, Icon} from '@material-ui/core';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Friends from './Friends/Friends';


const useStyles = makeStyles((theme) => ({
    friendsBar: {
        backgroundColor: theme.palette.grey[500],
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
    }
}));

const friendsMock = [
    {
        id: 0,
        name: "Kun Lao",
        newMessages: 5,
        photo: "https://source.unsplash.com/random"
    },
    {
        id: 1,
        name: "Subzero",
        newMessages: 0,
        photo: "https://source.unsplash.com/random"
    },
    {
        id: 2,
        name: "Mortal Kombar Team",
        newMessages: 127,
        photo: "https://source.unsplash.com/random"
    },
    {
        id: 3,
        name: "Scorpion",
        newMessages: 1,
        photo: "https://source.unsplash.com/random"
    },
    {
        id: 4,
        name: "Raiden",
        newMessages: 0,
        photo: "https://source.unsplash.com/random"
    }
]

const SideBar= (props) => {
    const classes = useStyles();

    const onPostTitle = (e) => {
        let text = e.target.value
        props.updatePostTitle(text)
    }

    const onPostBody = (e) => {
        let text = e.target.value
        props.updatePostBody(text)
    }

        return (
            <>
                <Grid container item justify="center">
                    <InputBase
                        className={'SearchInput-root'}
                        placeholder={'Search...'}
                        startAdornment={<Icon>search</Icon>}
                        {...props}
                    />
                </Grid>

                <Grid container item justify="flex-end">
                    <NavLink to="/messages" className={classes.linkText}>
                        <span   >NOTES</span>
                        <Button className={classes.notesButton}>
                            <BookmarkBorderIcon className={classes.notesIcon} />
                        </Button>
                    </NavLink>
                </Grid>

                <Friends friends={friendsMock} />
            </>
        )
}

export default SideBar;
