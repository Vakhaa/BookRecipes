import React from 'react'  

import { Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'


const Recipes = (props) => {
    return (
            <div className = "recipes" >
            {
                props.fetching ? (<li>Loading</li>)
                    : props.recipes.map((recipe) => (
                        <div key={recipe.id}>
                            <NavLink to={"/recipe/" + recipe.id}>
                                <Typography>{recipe.name}</Typography>
                            </NavLink>
                        </div>
                    ))
            }
            </div >
        )
}

export default Recipes;
