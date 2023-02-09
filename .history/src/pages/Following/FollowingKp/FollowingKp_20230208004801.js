import React from 'react';
import className from 'classnames/bind';
import styles from '../Following.module.scss';


const cx = className.bind(styles);

function FollowingKp () {
    return (
        <div className={cx('fl-kp')}>
            <h1>K-POP</h1>

        </div>
    )
}

export default FollowingKp;