import React from 'react'
import { NavLink } from 'react-router-dom'

import { Grid, Button, makeStyles } from '@material-ui/core'

let useStyles = makeStyles((theme) => ({
    bg: {
        backgroundColor: theme.palette.grey[200],
    },
}));

const SideBar = (props) => {
    const classes = useStyles();
    return (
        <Grid className={classes.bg} container>
            {props.navi.map((item) => (
                <Grid container item key={item.id}>
                    <NavLink to={item.pathTo}>
                        <Button >
                            {item.name}
                        </Button>
                    </NavLink>
                </Grid>
            ))}
        </Grid>
    )
}

export default SideBar;
