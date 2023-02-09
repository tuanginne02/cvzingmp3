import React from 'react';
import 
import className from 'classnames/bind';
import styles from './NewMusic.module.scss';

const cx = className.bind(styles);

function NewMusic() {
    return (
        <div className={cx('newmusic')}>
          <div className={cx('newmusic-container')}>
            <div className={cx('newmusic-title')}>
                <h1>Nhạc Mới</h1>
            </div>
          </div>
        </div>
    )
}
export default NewMusic;