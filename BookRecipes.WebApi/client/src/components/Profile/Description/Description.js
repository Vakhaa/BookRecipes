import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Typography, Chip, Accordion, AccordionSummary, AccordionDetails, Input } from '@material-ui/core';

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

const Description = ({ name, description, userStatus}) => {
    const classes = useStyles();

    //TODO: push status on store
    let [editModeStatus, setEditModeStatus] = useState(false);
    let [status, setStatus] = useState(userStatus);

    useEffect(() => {
        setStatus(userStatus);
    }, [userStatus]);

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

        return (
            <>
                <Grid container item>
                    <Grid container item xs={8}>
                        <Typography variant="h4">Name:</Typography>
                        <Typography variant="h4">{name}</Typography>
                    </Grid>
                    <Grid container item xs={4}>
                        <Chip label="Online" color="secondary" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid container item md={1} xs={2}>
                        <Typography variant="h6">Status:</Typography>
                    </Grid>
                    <Grid container item md={11} xs={10}>
                        {!editModeStatus && <Typography variant="h6" onClick={onClickEditStatus}>{status}</Typography>}
                        {editModeStatus && <Input autoFocus={true} onChange={onStatusChange} value={status} onBlur={onBlurStatusUpdate} />}
                    </Grid>
                </Grid>
                <Grid container item>
                    social network
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
                                {description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </>
        )
}

export default Description;
