import React from 'react';
import className from 'classnames/bind';
import styles from './MV.module.scss';

const cx = className.bind(styles);

function MV() {
    return (
        <div className={cx('mv')}>
            <div className={cx('mv-container')}>
                <div className={cx('mv-header')}>
                    <div className={cx('mv-title')}>
                        MV
                    </div>
                    <div className={cx('mv-country')}>
                        <span>Việt Name</span>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MV;