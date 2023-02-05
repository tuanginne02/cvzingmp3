import React from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss'

const cx = className.bind(styles);

function ListMusic () {
    return(
        <div  className={cx('list-music')}>
            <div className={cx('list-music-img')}>
        <img src='/public/'
            </div>
        </div>

    )
}

export default ListMusic;