import React from 'react';

import * as styles from './PreloaderStyles';
import circle_preloader from '../../../assets/images/circle_animate.svg'


const Preloader = () => {
    return (
        <styles.Preloader>
            <img src={circle_preloader} />
        </styles.Preloader>
    );
};

export default Preloader;