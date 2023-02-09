import React from 'react';
import className from 'classnames/bind';
import styles from '../Following.module.scss';


const cx = className.bind(styles);

function FollowingVp () {
    return (
        <div className={cx('fl-vp')}>
            <h1>US - UK</h1>

        </div>
    )
}

export default FollowingVp;