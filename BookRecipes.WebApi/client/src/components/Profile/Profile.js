import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Typography, Avatar, Chip, Accordion, AccordionSummary, AccordionDetails, Input } from '@material-ui/core';

import PostsWall from './PostsWall/PostsWall'
import Friends from './Friends/Friends'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    rounded: {
        width: 300,
        height:300
    },
});

const Profile = (props) => {
    const classes = useStyles();

    //TODO: push status on store
    let [editModeStatus, setEditModeStatus] = useState(false);
    let [status, setStatus] = useState(props.profile.status);

    useEffect(() => {
        setStatus(props.profile.status);
    }, [props.profile.status]);

    const onBlurStatusUpdate = () => {
        setEditModeStatus(false);
    }

    const onClickEditStatus = () => {
        setEditModeStatus(true);
    }

    const onStatusChange = (e) => {
        let textStatus = e.currentTarget.value;
        if (textStatus === "")
        {
            textStatus = "*statusa net, eto rasvet, kluch poverni i po-li-te-li*"
        }
        setStatus(textStatus);
    }

    const onSubmit = (formData) => {
        props.addPost(formData)
    }

        return (
            <>
                <Grid container>
                    <Grid container item>
                        <Grid container item md={4}>
                            <Avatar variant="rounded" className={classes.rounded}>
                                <img alt="avatar" src={props.profile.photo} />
                                N
                            </Avatar>
                        </Grid>
                        <Grid container item md={8}>
                            <Grid container item md={6}>
                                <Typography variant="h4">Name:</Typography>
                                <Typography variant="h4">{props.profile.name}</Typography>
                            </Grid>
                            <Grid container item md={6}>
                                <Chip label="Online" color="secondary" />
                            </Grid>
                            <Grid container item>
                                <Typography variant="h6">Status:</Typography>
                                {!editModeStatus && <Typography variant="h6" onDoubleClick={onClickEditStatus}>{status}</Typography>}
                                {editModeStatus && <Input autoFocus={true} onChange={onStatusChange} value={status} onBlur={onBlurStatusUpdate} />}
                            </Grid>
                            <Grid container item>
                                soical network
                            </Grid>
                            <Grid container item>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography >Description</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {props.profile.description}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>                            
                        </Grid>
                    </Grid>
                    <Grid container item>
                        <Grid container item md={6}>
                            <Friends friends={props.friends}/>
                            <Grid container item>
                                gallery
                            </Grid>
                            <Grid container item>
                                My recipes
                            </Grid>
                        </Grid>
                        <Grid container item md={6}>
                            <PostsWall onSubmit={onSubmit} posts={props.posts} />
                        </Grid>
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

export default Profile;
