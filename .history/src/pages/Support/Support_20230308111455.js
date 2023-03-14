import React from 'react';
import className from 'classnames/bind';
import style from './Support.module.scss';

const cx = className.bind(style);

function Support () {
    return (
        <div className={cx('support')}>
            <div className={cx('support-container')}>
            <div className={cx('support-heading')}>
                <h1></h1>
            </div>
            </div>
        </div>
    )
}
export default Support;