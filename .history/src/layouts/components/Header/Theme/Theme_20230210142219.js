import React from 'react';
import className  from 'classnames/bind';
import styles from './Them.module.scss';

const cx = className.bind(styles);

function Theme() {
    return (
        <div className={cx('theme')}>
            <h1>Theme</h1>
        </div>
    )
}
export default Theme;