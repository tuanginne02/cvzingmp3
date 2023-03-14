import React from 'react';
import className from 'classnames/bind'
import styles from '../Header.module.scss'

const cx = className.bind(styles);

function Setting () {
    return (
        <div className={cx('setting')}>
            <div className={cx('setting-container')}>
                <div className={cx('setting-items')}>
                    <div className={cx('setting-item')}>
                        <div className={cx('setting-icon-l')}></div>
                        <div className={cx('setting-title')}></div>
                    </div>
                    <div className={cx('setting-item')}>
                        <div className={cx('setting-icon-l')}></div>
                        <div className={cx('setting-title')}></div>
                        <div className={cx('setting-icon-r')}></div>

                    </div>
                    <div className={cx('setting-item')}>
                        <div className={cx('setting-icon-l')}></div>
                        <div className={cx('setting-title')}></div>
                        <div className={cx('setting-icon-r')}></div>

                    </div>
                    <div className={cx('setting-item')}>
                        <div className={cx('setting-icon-l')}></div>
                        <div className={cx('setting-title')}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting;