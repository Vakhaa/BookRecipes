import React from 'react';
import { Checkbox } from '@material-ui/core';

const CheckboxReduxMUI = (props) => {
    return <Checkbox {...props.input} {...props.custom} type={props.type}/>
}   

export default CheckboxReduxMUI;