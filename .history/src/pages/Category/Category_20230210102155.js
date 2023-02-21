import React from 'react';
import className from 'classnames/bind';
import styles from './Category.module.scss';

const cx = className.bind(styles);

function Category() {
    return (
        <div className={cx('category')}>
           <div className={cx('category-container')}>
            <div className={cx('banner-event')}>
                <img className={cx('img-banner')} src='/imgcategory/1.jfif' alt='' />
            </div>
            <div className={cx('category-outstanding')}>
                <div className={cx('outstanding-title')}>
                    <h1>Nổi Bật</h1>
                </div>
                <div classNmae={cx('outstanding-items')}>
                    <div className={cx('outstandingitem')}>
                        <mg classNmae={cx('item-img')}</mg>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}
export default Category;