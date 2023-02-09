import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
// import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import className from 'classnames/bind';
import styles from './NewMusic.module.scss';

const cx = className.bind(styles);

function NewMusic() {
    return (
        <div className={cx('newmusic')}>
          <div className={cx('newmusic-container')}>
            <div className={cx('newmusic-title')}>
                <h1>Nhạc Mới</h1>
                <div className={cx('title-icon')}>
                    <FontAwesomeIcon className={cx('tit-iconplay')} icon={faPlay} />
                </div>
            </div>
            <div className={cx('newmusic-content')}
          </div>
        </div>
    )
}
export default NewMusic;