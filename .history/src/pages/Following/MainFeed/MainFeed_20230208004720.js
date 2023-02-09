import React from 'react';
import className from 'classnames/bind';
import styles from '../Following.module.scss';


const cx = className.bind(styles);

function MainFeed () {
    return (
        <div className={cx('main-feed')}>
            <h1>Hoa Ngữ</h1>

        </div>
    )
}

export default MainFeed;