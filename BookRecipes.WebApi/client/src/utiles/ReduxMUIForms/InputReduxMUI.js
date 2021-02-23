import React from 'react';
import { Input, Tooltip } from '@material-ui/core';

const InputReduxMUI = ({ input, custom, type, label, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <>
            {hasError ?
                <Tooltip title={meta.error} placement="right-start">
                    <Input placeholder={label} {...input} {...custom} type={type} {...props} />
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