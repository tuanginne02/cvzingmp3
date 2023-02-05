import React from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function Radio () {
    return (
        <div className={cx('radio')}>
           <div className = {cx('radio-container')}
        </div>
    )
}

export default Radio;