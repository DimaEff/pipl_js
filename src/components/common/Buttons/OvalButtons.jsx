import React from 'react';
import {Button} from "@material-ui/core";


const OvalButtons = ({children, ...props}) => {

    return (
        <div>
            {children.map((button) => (
                    <Button key={button.name}
                            variant="contained"
                            color="primary"
                            type={button.type || 'button'}
                            onClick={button.action}
                            {...props}
                    >
                        {button.name}
                    </Button>
                )
            )}
        </div>
    );
};

export default OvalButtons;