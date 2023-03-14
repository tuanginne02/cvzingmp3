import React from 'react';
import className from 'classnames/bind'
import styles from '../Header.module.scss'

const cx = className.bind(styles);

function Setting () {
    return (
        <div className={cx('setting')}>
            <h1>Setting</h1>
        </div>
    )
}

export default Setting;