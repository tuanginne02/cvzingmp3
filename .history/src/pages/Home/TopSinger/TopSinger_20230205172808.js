import React from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx =  className.bind(styles);

function TopSinger () {
    return (
        <div className={cx('topsinger')}>
            <h1>Siger</h1></h1>
        </div>
    )
}

