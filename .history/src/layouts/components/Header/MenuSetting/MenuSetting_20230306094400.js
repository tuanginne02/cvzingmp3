import React from 'react';
import className from 'classnames/bind'
import styles from '../Header.module.scss'

const cx = className.bind(styles);

function Setting () {
    return (
        <div className={cx('setting')}>
            <div className={cx('setting-container')}>
                <div className={cx('setting-items')}>
                    <div className={cx('setting-item')}
                </div>
            </div>
        </div>
    )
}

export default Setting;