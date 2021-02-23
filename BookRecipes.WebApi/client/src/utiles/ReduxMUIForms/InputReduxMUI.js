import React from 'react';
import { Input, makeStyles, Tooltip } from '@material-ui/core';

const useStyles = makeStyles({
    borderRed: {
        borderColor: "#e57373",
        border: "outset"
    },
});

const InputReduxMUI = ({ input, custom, type, label, meta, ...props }) => {
    const classes = useStyles();
    const hasError = meta.touched && meta.error;
    return (
        <>
            {hasError ?
                <Tooltip  title={meta.error} placement="right-start" open>
                    <Input className={classes.borderRed} placeholder={label} {...input} {...custom} type={type} {...props} />
                </Tooltip>:
                <Input placeholder={label} {...input} {...custom} type={type} {...props} />
            }
        </>
        )
}

export default InputReduxMUI;

/*<Input placeholder={label} {...input} {...custom} type={type} {...props} multiline />
{
    hasError && <span>{meta.error}</span>
}*/