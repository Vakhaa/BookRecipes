import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Avatar, Chip, IconButton} from '@material-ui/core';

import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VideoCallIcon from '@material-ui/icons/VideoCall';

const useStyles = makeStyles((theme) => ({
    friendsBar: {
        backgroundColor: theme.palette.grey[500],
    },
    fullList: {
        width: 'auto',
    },
    rounded: {
        width: 300,
        height: 300
    }
}));

const Header = (props) => {
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
                <Grid container item direction="row" alignItems="baseline">
                    <Grid container item justify="flex-start" md="6">
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                        <IconButton>
                            <VideoCallIcon />
                        </IconButton>
                        <IconButton>
                            <LocalPhoneIcon />
                        </IconButton>
                    </Grid>
                    <Grid container item justify="flex-end" md="6" alignItems="center">
                        <Chip label="Online" color="secondary" />
                        <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
                    </Grid>
                </Grid>
            </>
        )
}

/*Ingredient.propTypes = {
    name: PropTypes.string.isRequired,
    ingredientsInRecipe: PropTypes.arrayOf(
        PropTypes.shape({
            countIngredient: PropTypes.string.isRequired,
            recipeId: PropTypes.number.isRequired,
            ingredientId: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
    //id: PropTypes.number.isRequired,
    //getIngredient: PropTypes.func.isRequired
}*/

export default Header;
