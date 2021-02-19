import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Typography, Avatar, Chip, Accordion, AccordionSummary, AccordionDetails, Button, Input } from '@material-ui/core';

import Posts from './Posts/Posts'

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
    }
});

const Profile = (props) => {
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
                <Grid container>
                    <Grid container item>
                        <Grid container item md={4}>
                            <Avatar variant="rounded" className={classes.rounded}>
                                <img alt="avatar" src={props.photo} />
                                N
                            </Avatar>
                        </Grid>
                        <Grid container item md={8}>
                            <Grid container item md={6}>
                                <Typography variant="h4">Name:</Typography>
                                <Typography variant="h4">{props.name}</Typography>
                            </Grid>
                            <Grid container item md={6}>
                                <Chip label="Online" color="secondary" />
                            </Grid>
                            <Grid container item>
                                <Typography variant="h6">Status:</Typography>
                                <Typography variant="h6">{props.status}</Typography>
                            </Grid>
                            <Grid container item md={8}>
                                soical network
                            </Grid>                            
                        </Grid>
                    </Grid>
                    <Grid container item justify="center">
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
                                    {props.description}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid container item>
                        <Grid container item md={6}>
                            <Grid container item>
                                gallery
                            </Grid>
                            <Grid container item>
                                My recipes
                            </Grid>
                            <Grid container item>
                                My friends
                            </Grid>
                        </Grid>
                        <Grid container item md={6}>
                            <Grid container item>
                                <form>
                                    <Input placeholder="It is title message" value={props.newPostTitle} onChange={(e) => (onPostTitle(e))} />
                                    <textarea placeholder="It is body message" value={props.newPostBody} onChange={(e) => (onPostBody(e))} ></textarea>
                                    <Button variant="outlined" onClick={props.addPost}>Create post</Button>
                                </form>
                            </Grid>
                            <Grid container item>
                                <Posts posts={props.posts}/>
                            </Grid>
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
