import React from 'react';
import {Button, ButtonGroup} from "@material-ui/core";


const MultipleButton = ({children, ...props}) => {
    const buttons = children.map((child, index) => {
        return (
            <Button variant="contained"
                    color="primary"
                    type={index === 0 && 'submit'}
                    onClick={child[1]}
                    id={index}
                    {...props}
            >
                {child[0] || child}
            </Button>
        )
    })

    return (
        <div>
            <ButtonGroup variant="contained" color="primary"
                         aria-label="contained primary button group" {...props}>
                {buttons}
            </ButtonGroup>
        </div>
    );
};

export default MultipleButton;