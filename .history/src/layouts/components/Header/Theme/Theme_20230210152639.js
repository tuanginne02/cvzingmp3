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
                            <img className={cx('dy-img')} src='/imgtheme/dy1.png' alt='' />
                            <p>London</p>
                        </div>
                    </div>
                    <div className={cx('dynamic-item')}>
                        <div className={cx('dynamic-img')}>
                            <img className={cx('dy-img')} src='/imgtheme/dy5.jpg' alt='' />
                            <p>Nâu</p>
                        </div>
                    </div>   <div className={cx('dynamic-item')}>
                        <div className={cx('dynamic-img')}>
                            <img className={cx('dy-img')} src='/imgtheme/dy2.jpg' alt='' />
                            <p>Sáng Tối</p>
                        </div>
                    </div>   <div className={cx('dynamic-item')}>
                        <div className={cx('dynamic-img')}>
                            <img className={cx('dy-img')} src='/imgtheme/dy3.jpg' alt='' />
                            <p>Xanh Da Trời</p>
                        </div>
                    </div>   <div className={cx('dynamic-item')}>
                        <div className={cx('dynamic-img')}>
                            <img className={cx('dy-img')} src='/imgtheme/dy4.jpg' alt='' />
                            <p>Hồng</p>
                        </div>
                    </div>
                </div>
               </div>
               <div className={cx('them-dynamic')}>
                <div className={cx('dynamic-title')}>
                    <span>Dynamic</span>
                </div>
                <div className={cx('dynamic-items')}>
                    <div className={cx('dynamic-item')}>
                        <div className={cx('dynamic-img')}>
                            <img className={cx('dy-img')} src='/imgtheme/dy1.png' alt='' />
                            <p>London</p>
                        </div>
                    </div>
                    <div className={cx('dynamic-item')}>
                        <div className={cx('dynamic-img')}>
                            <img className={cx('dy-img')} src='/imgtheme/dy5.jpg' alt='' />
                            <p>Nâu</p>
                        </div>
                    </div>   <div className={cx('dynamic-item')}>
                        <div className={cx('dynamic-img')}>
                            <img className={cx('dy-img')} src='/imgtheme/dy2.jpg' alt='' />
                            <p>Sáng Tối</p>
                        </div>
                    </div>   <div className={cx('dynamic-item')}>
                        <div className={cx('dynamic-img')}>
                            <img className={cx('dy-img')} src='/imgtheme/dy3.jpg' alt='' />
                            <p>Xanh Da Trời</p>
                        </div>
                    </div>   <div className={cx('dynamic-item')}>
                        <div className={cx('dynamic-img')}>
                            <img className={cx('dy-img')} src='/imgtheme/dy4.jpg' alt='' />
                            <p>Hồng</p>
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