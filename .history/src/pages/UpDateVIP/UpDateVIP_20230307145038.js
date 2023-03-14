import React from 'react';
import className from 'classnames/bind';
import style from './UpDateVIP.module.scss';

const cx = className.bind(style);

function UpDateVip() {
  return (
    <div className={cx('update-vip')}>
      <div className={cx('img-banner')}>
        <img src="/imgUpDateVIP/bg.jpg" alt="banner" />
      </div>
      <div className={cx('update-vip-container')}>
        <div className={cx('update-vip-content')}>
          <div className={cx('content-header-title')}>
            <div className={cx('img-faveicon')}>
              <img src="/imgUpDateVIP/logo-mp-3.svg" alt="" />
            </div>
            <div className={cx('header-title')}>
              <h1>Âm nhạc không giới hạn</h1>
              <p>
                Dịch vụ nghe nhạc Online chất lượng cao, kết hợp cùng các tiện ích dành dành riêng cho thành viên VIP
              </p>
            </div>
          </div>
          <div className={cx('content-header-offer')}>
            <div className={cx('offer-items')}>
              <div className={cx('offer-item')}>
                <div className={cx('offer-img')}>
                  <img src="/imgUpDateVIP/package-6-month.svg" alt="" />
                </div>
                <div className={cx('offer-content')}>
                  <div className={cx('time-offer')}>
                    <span> 6 Tháng</span>
                    <div className={cx('line-offer')}></div>
                  </div>
                  <div className={cx('money-offer')}>
                    <div className={cx('new-price')}>
                      <div className={cx('befor-dot')}>
                        <span>279</span>
                      </div>
                      <div className={cx('price-block')}>
                        <div className={cx('after-dot')}>
                          <span>.000</span>
                        </div>
                        <div className={cx('unit-currency')}>
                          <p>VNĐ</p>
                        </div>
                      </div>
                    </div>
                    <div className={cx('old-price')}>
                      <span>354.000 VNĐ </span>
                    </div>
                  </div>
                  <div className={cx('btn-buy')}>
                    <button className={cx('btn')}>Mua VIP</button>
                  </div>
                </div>
              </div>
              <div className={cx('offer-item')}>
                <div className={cx('offer-img')}>
                  <img src="/imgUpDateVIP/package-6-month.svg" alt="" />
                </div>
                <div className={cx('offer-content')}>
                  <div className={cx('time-offer')}>
                    <span> 6 Tháng</span>
                    <div className={cx('line-offer')}></div>
                  </div>
                  <div className={cx('money-offer')}>
                    <div className={cx('new-price')}>
                      <div className={cx('befor-dot')}>
                        <span>279</span>
                      </div>
                      <div className={cx('price-block')}>
                        <div className={cx('after-dot')}>
                          <span>.000</span>
                        </div>
                        <div className={cx('unit-currency')}>
                          <p>VNĐ</p>
                        </div>
                      </div>
                    </div>
                    <div className={cx('old-price')}>
                      <span>354.000 VNĐ </span>
                    </div>
                  </div>
                  <div className={cx('btn-buy')}>
                    <button className={cx('btn')}>Mua VIP</button>
                  </div>
                </div>
              </div>
              <div className={cx('offer-item')}>
                <div className={cx('offer-img')}>
                  <img src="/imgUpDateVIP/package-6-month.svg" alt="" />
                </div>
                <div className={cx('offer-content')}>
                  <div className={cx('time-offer')}>
                    <span> 6 Tháng</span>
                    <div className={cx('line-offer')}></div>
                  </div>
                  <div className={cx('money-offer')}>
                    <div className={cx('new-price')}>
                      <div className={cx('befor-dot')}>
                        <span>279</span>
                      </div>
                      <div className={cx('price-block')}>
                        <div className={cx('after-dot')}>
                          <span>.000</span>
                        </div>
                        <div className={cx('unit-currency')}>
                          <p>VNĐ</p>
                        </div>
                      </div>
                    </div>
                    <div className={cx('old-price')}>
                      <span>354.000 VNĐ </span>
                    </div>
                  </div>
                  <div className={cx('btn-buy')}>
                    <button className={cx('btn')}>Mua VIP</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('content-body')}>
            <div className={cx('banner-body')}>
                <img src='/imgUpDateVIP/banner-vip.png' alt='banner' />
            </div>
            <div className={cx('content-body-offer')}>
                <div className={cx('offer-package-items')}>
                <div className={cx('offer-package-items')}></div>

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpDateVip;
