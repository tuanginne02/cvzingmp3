import React from 'react';
import className from 'classnames/bind'
import styles from '../Radio.module.scss';

const cx = className.bind(styles) ;

function Podcast () {
    return(
        <div className={cx('podcast')}>
           <div className={cx('podccast-container')}>
            <div className={cx('cont-items')}>
                <div className={cx('cont-item')}>
                    <div className={cx('cont-item-img')}>
                        <img src='/public/imgradio/podcast/1.jpg'
                        </div></div>

            </div>
            </div>
            </div>

    )
}

export default Podcast;