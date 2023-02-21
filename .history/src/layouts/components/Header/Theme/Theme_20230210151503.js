import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faClose
} from '@fortawesome/free-solid-svg-icons';
import className  from 'classnames/bind';
import styles from './Them.module.scss';

const cx = className.bind(styles);

function Theme() {
    return (
        <div className={cx('theme')}>
           <div className={cx('theme-container')}>
            <div className={cx('theme-content')}>
               <div className={cx('theme-title')} >
                <h1>Giao Diện</h1>
                <FontAwesomeIcon className={cx('icon-colse')} icon={faClose} />
               </div>
               <div className={cx('them-dynamic')}>
                <div className={cx('dynamic-title')}>
                    <span>Dynamic</span>
                </div>
                <div className={cx('dynamic-items')}>
                    <div className={cx('dynamic-item')}>
                        <div className={cx('dynamic-img')}>
                            <img className={cx('dy-img')} src='/public/' alt='' />
                        </div>
                    </div>
                    <div className={cx('dynamic-item')}>
                        <div className={cx('dynamic-img')}>
                            <img className={cx('dy-img')} src='/public/' alt='' />
                        </div>
                    </div>   <div className={cx('dynamic-item')}>
                        <div className={cx('dynamic-img')}>
                            <img className={cx('dy-img')} src='/public/' alt='' />
                        </div>
                    </div>   <div className={cx('dynamic-item')}>
                        <div className={cx('dynamic-img')}>
                            <img className={cx('dy-img')} src='/public/' alt='' />
                        </div>
                    </div>   <div className={cx('dynamic-item')}>
                        <div className={cx('dynamic-img')}>
                            <img className={cx('dy-img')} src='/public/' alt='' />
                        </div>
                    </div>
                </div>
               </div>
            </div>
           </div>
        </div>
    )
}
export default Theme;