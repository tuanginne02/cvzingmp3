import React from 'react';
import className from 'classnames/bind';
import style from './Support.module.scss';

const cx = className.bind(style);

function Support() {
  return (
    <div className={cx('support')}>
      <div className={cx('support-container')}>
        <div className={cx('support-heading')}>
          <h1>Hỏi đáp về gói dịch dịch vụ</h1>
          <span>VIP</span>
        </div>
        <div className={cx('support-content')}>
          <div className={cx('content-items')}>
            <div className={cx('content-item')}>
              <h2>1. Quyền lợi cá nhân đăng ký dịch vụ Zing MP3 VIP</h2>
              <div className={cx('item-list')}>
                <div className={cx('item-list-permission')}>
                  <span>•</span>
                  <span>Nghe nhạc chất lượng cao thỏa thích</span>
                </div>
                <div className={cx('item-list-permission')}>
                  <span>•</span>
                  <span>Download không giới hạn</span>
                </div>
                <div className={cx('item-list-permission')}>
                  <span>•</span>
                  <span>Xem Music Video chất lượng lượng cao</span>
                </div>
                <div className={cx('item-list-permission')}>
                  <span>•</span>
                  <span>Không bị làm phiền bởi quảng cáo</span>
                </div>
              </div>
            </div>
            <div className={cx('content-item')}>
              <h2>2. Làm thế nào để đăng nhập</h2>           
            </div>
            <div className={cx('content-item')}>
              <h2>1. Quyền lợi cá nhân đăng ký dịch vụ Zing MP3 VIP</h2>           
            </div>
            <div className={cx('content-item')}>
              <h2>1. Quyền lợi cá nhân đăng ký dịch vụ Zing MP3 VIP</h2>           
            </div>
            <div className={cx('content-item')}>
              <h2>1. Quyền lợi cá nhân đăng ký dịch vụ Zing MP3 VIP</h2>           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Support;
