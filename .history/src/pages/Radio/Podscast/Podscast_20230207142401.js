import React from 'react';
import className from 'classnames/bind'
import styles from '../Radio.module.scss';

const cx = className.bind(styles) ;

function Podcast () {
    return(
        <div className={cx('podcast')}>
            <h1>Podcast</h1>
        </div>
    )
}

export default Podcast;