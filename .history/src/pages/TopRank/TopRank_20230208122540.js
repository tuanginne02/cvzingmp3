import React from 'react';
import className from 'classnames/bind';
import styles from './TopRank.module.scss';

const cx = className.bind(styles);

function TopRank() {
    return (
        <div className={cx('TopRank')}>
            <h1>TopRank</h1>
        </div>
    )
}
export default TopRank;