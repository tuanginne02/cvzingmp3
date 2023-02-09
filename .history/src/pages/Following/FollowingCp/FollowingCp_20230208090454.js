import React from 'react';
import className from 'classnames/bind';
import styles from '../Following.module.scss';


const cx = className.bind(styles);

function FollowingCp () {
    return (
        <div className={cx('fl-cp')}>
             <div className={cx('fl-cp-container')}>
        </div>
        </div>
    )
}

export default FollowingCp;