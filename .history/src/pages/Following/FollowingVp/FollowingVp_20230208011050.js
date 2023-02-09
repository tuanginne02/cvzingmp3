import React from 'react';
import className from 'classnames/bind';
import styles from '../Following.module.scss';


const cx = className.bind(styles);

function Following () {
    return (
        <div className={cx('fl-usk')}>
            <h1>US - UK</h1>

        </div>
    )
}

export default Following;