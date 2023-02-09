import React from 'react';
import className from 'classnames/bind';
import styles from './MV.module.scss';

const cx = className.bind(styles);

function MV() {
    return (
        <div className={cx('MV')}>
            <h1>MV</h1>
        </div>
    )
}
export default MV;