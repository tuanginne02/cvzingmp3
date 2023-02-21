import React from 'react';
import className from 'classnames/bind';
import styles from './Category.module.scss';

const cx = className.bind(styles);

function Category() {
    return (
        <div className={cx('category')}>
           <div className={cx('category-container')}>
            <div className={cx('banner-event')}>
                <img className={cx('img-banner')} src='/public/imgcategory/' alt='' />
            </div>
           </div>
        </div>
    )
}
export default Category;