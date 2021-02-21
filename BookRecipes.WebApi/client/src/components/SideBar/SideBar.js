import React from 'react'
import { NavLink } from 'react-router-dom'

import { Grid, Button, makeStyles, MenuItem, Paper, MenuList } from '@material-ui/core'

let useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.grey[200],
        width:"100%"
    },
    textNavigation: {
        textDecoration: "none",
        color: "black"
    },
    buttonNavigation: {
        backgroundColor: "#e57373",
        borderRadius: "0 5px 5px 0",
    }
}));

const SideBar = (props) => {
    const classes = useStyles();
    return (
        <>
            <Paper className={classes.paper}>
                <MenuList>
                    {props.navi.map((item) => (
                        <Paper>
                            <NavLink to={item.pathTo} className={classes.textNavigation}>
                                <MenuItem className={classes.buttonNavigation} key={item.id}>
                                    {item.name}
                                </MenuItem>
                            </NavLink>
                        </Paper>
                    ))}
                </MenuList>
            </Paper>
        </>
    )
}

export default SideBar;
