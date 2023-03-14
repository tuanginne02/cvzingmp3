import React, {useState} from 'react';
import className from 'classnames/bind';
import style from './Support.module.scss';

const cx = className.bind(style);

function Support() {
    const [showAnwer1, setShowAnwer1] = useState(true)
    const [showAnwer2, setShowAnwer2] = useState(true)
    const [showAnwer2, setShowAnwer2] = useState(true)
    const [showAnwer4, setShowAnwer4] = useState(true)
    const [showAnwer1, setShowAnwer1] = useState(true)


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
                  <p>•</p>
                  <span>Nghe nhạc chất lượng cao thỏa thích</span>
                </div>
                <div className={cx('item-list-permission')}>
                  <p>•</p>
                  <span>Download không giới hạn</span>
                </div>
                <div className={cx('item-list-permission')}>
                  <p>•</p>
                  <span>Xem Music Video chất lượng lượng cao</span>
                </div>
                <div className={cx('item-list-permission')}>
                  <p>•</p>
                  <span>Không bị làm phiền bởi quảng cáo</span>
                </div>
              </div>
              <div className={cx('line')}></div>
            </div>
            <div className={cx('content-item')}>
              <h2>2. Làm thế nào để đăng nhập và sử dụng gói VIP của Zing MP3</h2>
              <div className={cx('line')}></div>
            </div>
            <div className={cx('content-item')}>
              <h2>3. Hướng dẫn đăng ký thành viên Zing MP3 VIP</h2>
              <div className={cx('line')}></div>
            </div>
            <div className={cx('content-item')}>
              <h2>4. Giá cước dịch vụ Zing MP3 VIP</h2>
              <div className={cx('line')}></div>
            </div>
            <div className={cx('content-item')}>
              <h2>5. Tại sao tôi đã đăng ký nhưng vẫn chưa được VIP</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Support;
