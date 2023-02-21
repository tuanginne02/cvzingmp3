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
            <div className={cx('category-nation')}>
                <div className={cx('nation-title')}>
                    <h1>Nổi Bật</h1>
                </div>
                <div className={cx('nation-items')}>
                    <div className={cx('nation-item')}>
                        <img className={cx('item-img')} src='' alt='' />
                        <span>Nhạc Mới</span>
                    </div>
                    <div className={cx('nation-item')}>
                        <img className={cx('item-img')} src='' alt='' />
                        <span>Top 100</span>
                    </div> <div className={cx('nation-item')}>
                        <img className={cx('item-img')} src='/public/imgcategory/1.jfif' alt='' />
                        <span>Tình Yêu</span>
                    </div>
                </div>
            </div>
            <div className={cx('category-mood')}>
                <div className={cx('mood-title')}>
                    <h1>Nổi Bật</h1>
                </div>
                <div className={cx('mood-items')}>
                    <div className={cx('mood-item')}>
                        <img className={cx('item-img')} src='' alt='' />
                        <span>Nhạc Mới</span>
                    </div>
                    <div className={cx('mood-item')}>
                        <img className={cx('item-img')} src='' alt='' />
                        <span>Top 100</span>
                    </div> <div className={cx('mood-item')}>
                        <img className={cx('item-img')} src='/public/imgcategory/1.jfif' alt='' />
                        <span>Tình Yêu</span>
                    </div>
                </div>
            </div>
            <div className={cx('category-bolero')}>
                <div className={cx('bolero-title')}>
                    <h1>Nổi Bật</h1>
                </div>
                <div className={cx('bolero-items')}>
                    <div className={cx('bolero-item')}>
                        <img className={cx('item-img')} src='' alt='' />
                        <span>Nhạc Mới</span>
                    </div>
                    <div className={cx('bolero-item')}>
                        <img className={cx('item-img')} src='' alt='' />
                        <span>Top 100</span>
                    </div> <div className={cx('bolero-item')}>
                        <img className={cx('item-img')} src='/public/imgcategory/1.jfif' alt='' />
                        <span>Tình Yêu</span>
                    </div>
                </div>
            </div>
            <div className={cx('category-edm')}>
                <div className={cx('edm-title')}>
                    <h1>Nổi Bật</h1>
                </div>
                <div className={cx('edm-items')}>
                    <div className={cx('edm-item')}>
                        <img className={cx('item-img')} src='' alt='' />
                        <span>Nhạc Mới</span>
                    </div>
                    <div className={cx('edm-item')}>
                        <img className={cx('item-img')} src='' alt='' />
                        <span>Top 100</span>
                    </div> <div className={cx('edm-item')}>
                        <img className={cx('item-img')} src='/public/imgcategory/1.jfif' alt='' />
                        <span>Tình Yêu</span>
                    </div>
                </div>
            </div>
            <div className={cx('category-remix')}>
                <div className={cx('remix-title')}>
                    <h1>Nổi Bật</h1>
                </div>
                <div className={cx('remix-items')}>
                    <div className={cx('remix-item')}>
                        <img className={cx('item-img')} src='' alt='' />
                        <span>Nhạc Mới</span>
                    </div>
                    <div className={cx('remix-item')}>
                        <img className={cx('item-img')} src='' alt='' />
                        <span>Top 100</span>
                    </div> <div className={cx('remix-item')}>
                        <img className={cx('item-img')} src='/public/imgcategory/1.jfif' alt='' />
                        <span>Tình Yêu</span>
                    </div>
                </div>
            </div>
            
           </div>
        </div>
    )
}
export default Category;