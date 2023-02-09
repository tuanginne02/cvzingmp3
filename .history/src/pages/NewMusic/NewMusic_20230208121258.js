import React from 'react';
import className from 'classnames/bind';
import styles from './NewMusic.module.scss';

const cx = className.bind(styles);

function NewMusic() {
    return (
        <div className={cx('newmusic')}>
            <h1></h1>
        </div>
    )
}