import React from 'react';
import className from 'className/bind';
import styles from '../Home.module.scss'

const cx = className.bind(styles);

function TopList () {
    return (
        <div className={cx('topList')} >
            <h1>toplisst</h1>
        </div>
    )
}

exp