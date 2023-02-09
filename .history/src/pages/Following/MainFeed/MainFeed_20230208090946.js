import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import className from 'classnames/bind';
import styles from '../Following.module.scss';


const cx = className.bind(styles);

function MainFeed () {
    return (
        <div className={cx('main-feed')}>
            <h1>Nổi Bật</h1>

        </div>
    )
}

export default MainFeed;