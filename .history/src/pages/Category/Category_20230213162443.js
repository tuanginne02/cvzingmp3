import React from 'react';
import className from 'classnames/bind';
import styles from './Category.module.scss';

const cx = className.bind(styles);

function Category() {
  return (
    <div className={cx('category')}>
      <div className={cx('category-container')}>
        <div className={cx('banner-event')}>
          <img className={cx('img-banner')} src="/imgcategory/vlt.jpg" alt="" />
        </div>
        <div className={cx('category-items')}>
          <div className={cx('category-outstanding')}>
            <div className={cx('outstanding-title')}>
              <h1>Nổi Bật</h1>
            </div>
            <div className={cx('outstanding-items')}>
              <div className={cx('outstanding-item')}>
                <img className={cx('item-img')} src="/imgcategory/nb1.jpg" alt="" />
                <span>Nhạc Mới</span>
              </div>
              <div className={cx('outstanding-item')}>
                <img className={cx('item-img')} src="/imgcategory/nb2.jpg" alt="" />
                <span>Top 100</span>
              </div>
              <div className={cx('outstanding-item')}>
                <img className={cx('item-img')} src="/imgcategory/nb3.jpg" alt="" />
                <span>Tình Yêu</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('category-items')}>
          <div className={cx('category-outstanding')}>
            <div className={cx('outstanding-title')}>
              <h1>Quốc Gia</h1>
            </div>
            <div className={cx('outstanding-items')}>
              <div className={cx('outstanding-item')}>
                <img className={cx('item-img')} src="/imgcategory/qg1.jpg" alt="" />
                <span>Nhạc Việt</span>
              </div>
              <div className={cx('outstanding-item')}>
                <img className={cx('item-img')} src="/imgcategory/qg2.jpg" alt="" />
                <span>Nhạc âu Mỹ</span>
              </div>
              <div className={cx('outstanding-item')}>
                <img className={cx('item-img')} src="/imgcategory/qg3.jpg" alt="" />
                <span>Nhạc Hàn</span>
              </div>
              <div className={cx('outstanding-item')}>
                <img className={cx('item-img')} src="/imgcategory/qg3.jpg" alt="" />
                <span>Tình Yêu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;
