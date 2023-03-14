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
        <div className={cx('support-content')}></div>
      </div>
    </div>
  );
}
export default Support;
