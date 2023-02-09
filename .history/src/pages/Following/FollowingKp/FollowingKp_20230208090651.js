import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import className from 'classnames/bind';
import styles from '../Following.module.scss';


const cx = className.bind(styles);

function FollowingKp () {
    const [changeClickColorNext, setChangeClickColorNext] = useState(true);

    const handlOnClickPrev = () => {
      setChangeClickColorNext(false);
    };
    const handlOnClickNext = () => {
      setChangeClickColorNext(true);
    };
    return (
        <div className={cx('fl-kp')}>
            <h1>K-POP</h1>

        </div>
    )
}

export default FollowingKp;