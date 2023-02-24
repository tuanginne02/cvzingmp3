import React from 'react';
import className from 'classnames/bind'
import styles from '../MV.module.scss'

const cx = className.bind(styles);

function ListAll () {
    return(
        <div className={cx('list-all')}></div>
    )
}