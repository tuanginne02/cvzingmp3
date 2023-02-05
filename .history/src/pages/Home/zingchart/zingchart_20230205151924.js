import React from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss'

const cx = className.bind(styles);

function Zingchart () {
    return (
        <div className={cx('zingchart')}>
           <div className={cx('zingchart-content')}>
            
           </div>
        </div>
    )
}

export default Zingchart;