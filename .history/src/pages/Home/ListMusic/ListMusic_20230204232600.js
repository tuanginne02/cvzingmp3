import React from 'react';
import className from 'className/bind';
import styles from '../Home.module.scss'

const cx = className.bind(styles);

function ListMusic () {
    return(
        <div className={cx('list-music')}></div>

    )
}