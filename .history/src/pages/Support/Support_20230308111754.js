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
                    <h2>1. Quyền lợi cá nhân đăng ký </h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Support;
