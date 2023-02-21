import React from 'react';
import className  from 'classnames/bind';
import styles from './Them.module.scss';

const cx = className.bind(styles);

function Theme() {
    return (
        <div className={cx('theme')}>
           <div className={cx('theme-container')}>
            <div className={cx('theme-content')}
           </div>
        </div>
    )
}
export default Theme;