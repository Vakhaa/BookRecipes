import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Button,  InputBase, Icon, MenuList, MenuItem} from '@material-ui/core';

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
    },
    searchInput: {
        width: "100%",
        height: "auto"
    }
}));

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
                <Grid direction="column" container item>
                    <MenuList>
                        <MenuItem>
                            <Grid direction="column" container item alignItems="stretch">
                                <InputBase
                                    className={'searchInput'}
                                    placeholder={'Search...'}
                                    startAdornment={<Icon>search</Icon>}
                                />
                            </Grid>
                        </MenuItem>

                        <MenuItem className={classes.buttonNavigation}>
                            <Grid container item>
                                <NavLink to="/messages" className={classes.linkText}>
                                    <span>NOTES</span>
                                    <Button className={classes.notesButton}>
                                        <BookmarkBorderIcon className={classes.notesIcon} />
                                    </Button>
                                </NavLink>
                            </Grid>
                        </MenuItem>

                        <Friends friends={props.friends} />

                    </MenuList>
                </Grid>
            </>
        )
}

export default SideBar;
