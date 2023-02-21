import React from 'react';
import className from 'classnames/bind';
import styles from './TopRank.module.scss';

const cx = className.bind(styles);

function TopRank() {
    return (
        <div className={cx('topRank')}>
          <div className={cx('topRank-container')}>
            <div className={cx('backg-toprank')}>
                <div className={cx('img-back')}>
                    <img src='/imgbackground/top100.png'  alt=' ' />
                </div>
            </div>
          </div>
        </div>
    )
}
export default TopRank;