import React from 'react';
import classes from './buildControls.css';

const buildControls = (props) => (
    <div>
        <div>{props.label}</div>
        <div>Less</div>
        <div>More</div>
    </div>
);

export default buildControls;