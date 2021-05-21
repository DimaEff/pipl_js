import React from 'react';

import * as styles from './PreloaderStyles';
import ball_preloader from '../../../assets/images/ball_preloader_transparent.svg'


const Preloader = () => {
    return (
        <styles.Preloader>
            <img src={ball_preloader} />
        </styles.Preloader>
    );
};

export default Preloader;