import React, { useState } from 'react';
import className from 'classnames/bind';
import style from './Support.module.scss';

const cx = className.bind(style);

function Support() {
  const [showAnwer1, setShowAnwer1] = useState(true);
  const [showAnwer2, setShowAnwer2] = useState(true);
  const [showAnwer3, setShowAnwer3] = useState(true);
  const [showAnwer4, setShowAnwer4] = useState(true);
  const [showAnwer5, setShowAnwer5] = useState(true);
  const Anwer1 = () => setShowAnwer1((current) => !current);
  const Anwer2 = () => setShowAnwer2((current) => !current);
  const Anwer3 = () => setShowAnwer3((current) => !current);
  const Anwer4 = () => setShowAnwer4((current) => !current);
  const Anwer5 = () => setShowAnwer5((current) => !current);

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
              <h2 onClick={Anwer1}>1. Quyền lợi cá nhân đăng ký dịch vụ Zing MP3 VIP</h2>
              <div className={cx('item-list')} style={{ display: showAnwer1 ? 'none' : 'block' }}>
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
        <div className={cx('support-footer')}>
            <div className={cx('footer-container')}>
                <div className={cx('footer-contact')}>
                    <div className={cx('contact-license')}>
                        <div className={cx('img-logo')}>
                            <img src="/imgUpDateVIP/logo-mp-3.svg" alt='' />
                        </div>
                        <div className={cx('license-title')}>
                            <p>
                            © 2017 VNG Corporation
                            <br/>
                            Giấy phép MXH số 05-GXN-TTDT.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  );
}
export default Support;
