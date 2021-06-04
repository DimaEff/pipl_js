import React from 'react';
import {Button, makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    buttonName: props => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Проблемы с размерами кнопок в группе при использовании
        // Поэтому пока 18 пикселей
        fontSize: props.fontSize || '18px',
    })
}))

const OvalButtons = ({children, ...props}) => {
    const styles = useStyles();

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
                        <Typography className={styles.buttonName}>{button.name}</Typography>
                    </Button>
                )
            )}
        </div>
    );
};

export default OvalButtons;