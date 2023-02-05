import React from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx =  className.bind(styles);

function TopSinger () {
    return (
        <div className={cx('topsinger')}>
          <div className={cx('topsinger-container')}>
            <div className={cx('topsinger-top')}>
                <div className={cx('top-items')}>
                    <div
                </div>
                </div>
          </div>
        </div>
    )
}

export default TopSinger;