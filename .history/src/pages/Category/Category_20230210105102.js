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
         <divclassName={cx('category-items '>
                <div className={cx('category-outstanding')}>
                    <div className={cx('outstanding-title')}>
                        <h1>Nổi Bật</h1>
                    </div>
                    <div className={cx('outstanding-items')}>
                        <div className={cx('outstanding-item')}>
                            <img className={cx('item-img')} src='' alt='' />
                            <span>Nhạc Mới</span>
                        </div>
                        <div className={cx('outstanding-item')}>
                            <img className={cx('item-img')} src='' alt='' />
                            <span>Top 100</span>
                        </div> <div className={cx('outstanding-item')}>
                            <img className={cx('item-img')} src='/public/imgcategory/1.jfif' alt='' />
                            <span>Tình Yêu</span>
                        </div>
                    </div>
                </div>
         </di c>
           </div>
        </div>
    )
}
export default Category;