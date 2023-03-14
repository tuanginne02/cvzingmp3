import React from 'react';
import className from 'classnames/bind';
import style from './Support.module.scss';

const cx = className.bind(style);

function Support () {
    return (
        <div className={cx('support')}>
            <div className={cx('support-container')}>
             <h1>Support</h1>
            </div>
        </div>
    )
}
ê