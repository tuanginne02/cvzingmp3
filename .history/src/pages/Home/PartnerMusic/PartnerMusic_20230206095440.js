import React from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);


function PartnerMusic () {
    return (
        <div className={cx('partner-music')}>
            <div className={cx('parmusic-container')}>
                <h1>ĐÔI</h1>
            </div>
        </div>
    )
}

export default PartnerMusic;