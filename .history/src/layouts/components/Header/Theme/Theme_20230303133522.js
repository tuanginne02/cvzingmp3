import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import styles from './Them.module.scss';

const cx = className.bind(styles);

export function Theme(props) {
  const [closeModal, setCloseModal] = useState(false);
  const close = () => setCloseModal(true);
  return (
    <div
      className={cx('theme')}
      style={{
        display: closeModal ? 'none' : '',
      }}
    >
      <div
        className={cx('theme-container')}
        style={{
          display: closeModal ? 'block' : '',
        }}
      >
        <div className={cx('theme-header')}>
          <div className={cx('theme-title')}>
            <h1>Giao Diện</h1>
            <FontAwesomeIcon className={cx('icon-colse')} icon={faClose} onClick={close} />
          </div>
        </div>
        <div className={cx('theme-content')}>
          <div className={cx('them-dynamic')}>
            <div className={cx('dynamic-title')}>
              <span>Dynamic</span>
            </div>
            <div className={cx('dynamic-items')}>
              <div className={cx('dynamic-item')}>
                <div className={cx('dynamic-img')}>
                  <img className={cx('dy-img')} src="/imgtheme/dy1.png" alt="" />
                  </div>
                  <p>London</p>
                  
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                </div>
                <div className={cx('check-ly')}>
                  <Fo
                </div>
              </div>
              <div className={cx('dynamic-item')}>
                <div className={cx('dynamic-img')}>
                  <img className={cx('dy-img')} src="/imgtheme/dy2.jpg" alt="" />
                  </div>
                  <p>Sáng Tối</p>
                  
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                </div>
              </div>
              <div className={cx('dynamic-item')}>
                <div className={cx('dynamic-img')}>
                  <img className={cx('dy-img')} src="/imgtheme/dy3.jpg" alt="" />
                  </div>
                  <p>Xanh Da Trời</p>
                  
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                </div>
              </div>
              <div className={cx('dynamic-item')}>
                <div className={cx('dynamic-img')}>
                  <img className={cx('dy-img')} src="/imgtheme/dy4.jpg" alt="" />
                  </div>
                  <p>Hồng</p>
                  
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                </div>
              </div>
              <div className={cx('dynamic-item')}>
                <div className={cx('dynamic-img')}>
                  <img className={cx('dy-img')} src="/imgtheme/dy5.jpg" alt="" />
                  </div>
                  <p>Nâu</p>
                  
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('them-thems')}>
            <div className={cx('thems-title')}>
              <span>Chủ Đề</span>
            </div>
            <div className={cx('thems-items')}>
              <div className={cx('thems-item')}>
                <div className={cx('thems-img')}>
                  <img className={cx('the-img')} src="/imgtheme/th1.jpg" alt="" />
                </div>
                  <p>Zing Music Awards</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('thems-item')}>
                <div className={cx('thems-img')}>
                  <img className={cx('the-img')} src="/imgtheme/th2.jpg" alt="" />
                </div>
                  <p>XONE</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('thems-item')}>
                <div className={cx('thems-img')}>
                  <img className={cx('the-img')} src="/imgtheme/th3.jpg" alt="" />
                </div>
                  <p>Tháp Eiffel</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
            </div>
          </div>
          <div className={cx('them-singer')}>
            <div className={cx('singer-title')}>
              <span>Nghệ Sĩ</span>
            </div>
            <div className={cx('singer-items')}>
              <div className={cx('singer-item')}>
                <div className={cx('singer-img')}>
                  <img className={cx('sig-img')} src="/imgtheme/sig1.jpg" alt="" />
                </div>
                  <p>Jack</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('singer-item')}>
                <div className={cx('singer-img')}>
                  <img className={cx('sig-img')} src="/imgtheme/sig2.jpg" alt="" />
                </div>
                  <p>IU</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('singer-item')}>
                <div className={cx('singer-img')}>
                  <img className={cx('sig-img')} src="/imgtheme/sig3.jpg" alt="" />
                </div>
                  <p>Ji Chang Wook</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('singer-item')}>
                <div className={cx('singer-img')}>
                  <img className={cx('sig-img')} src="/imgtheme/sig4.jpg" alt="" />
                </div>
                  <p>Lisa</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('singer-item')}>
                <div className={cx('singer-img')}>
                  <img className={cx('sig-img')} src="/imgtheme/sig5.jpg" alt="" />
                </div>
                  <p>Jennie Kim</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('singer-item')}>
                <div className={cx('singer-img')}>
                  <img className={cx('sig-img')} src="/imgtheme/sig6.jpg" alt="" />
                </div>
                  <p>Jisoo</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('singer-item')}>
                <div className={cx('singer-img')}>
                  <img className={cx('sig-img')} src="/imgtheme/sig7.jpg" alt="" />
                </div>
                  <p>Rosé</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
            </div>
          </div>
          <div className={cx('them-dark')}>
            <div className={cx('dark-title')}>
              <span>Màu Tối</span>
            </div>
            <div className={cx('dark-items')}>
              <div className={cx('dark-item')}>
                <div className={cx('dark-img')}>
                  <img className={cx('dar-img')} src="/imgtheme/dar1.jpg" alt="" />
                </div>
                  <p>Tối</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('dark-item')}>
                <div className={cx('dark-img')}>
                  <img className={cx('dar-img')} src="/imgtheme/dar2.jpg" alt="" />
                </div>
                  <p>Tím</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('dark-item')}>
                <div className={cx('dark-img')}>
                  <img className={cx('dar-img')} src="/imgtheme/dar3.jpg" alt="" />
                </div>
                  <p>Xanh Đậm</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('dark-item')}>
                <div className={cx('dark-img')}>
                  <img className={cx('dar-img')} src="/imgtheme/dar4.jpg" alt="" />
                </div>
                  <p>Xanh Biển</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('dark-item')}>
                <div className={cx('dark-img')}>
                  <img className={cx('dar-img')} src="/imgtheme/dar5.jpg" alt="" />
                </div>
                  <p>Xanh Lá</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('dark-item')}>
                <div className={cx('dark-img')}>
                  <img className={cx('dar-img')} src="/imgtheme/dar6.jpg" alt="" />
                </div>
                  <p>Nâu</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('dark-item')}>
                <div className={cx('dark-img')}>
                  <img className={cx('dar-img')} src="/imgtheme/dar7.jpg" alt="" />
                </div>
                  <p>Hồng</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('dark-item')}>
                <div className={cx('dark-img')}>
                  <img className={cx('dar-img')} src="/imgtheme/dar8.jpg" alt="" />
                </div>
                  <p>Đỏ</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
            </div>
          </div>
          <div className={cx('them-light')}>
            <div className={cx('light-title')}>
              <span>Chủ Đề</span>
            </div>
            <div className={cx('light-items')}>
              <div className={cx('light-item')}>
                <div className={cx('light-img')}>
                  <img className={cx('lig-img')} src="/imgtheme/lig1.jpg" alt="" />
                </div>
                  <p>Sáng</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('light-item')}>
                <div className={cx('light-img')}>
                  <img className={cx('lig-img')} src="/imgtheme/lig2.jpg" alt="" />
                </div>
                  <p>Xám</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('light-item')}>
                <div className={cx('light-img')}>
                  <img className={cx('lig-img')} src="/imgtheme/lig3.jpg" alt="" />
                </div>
                  <p>Xanh Nhạt</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
              <div className={cx('light-item')}>
                <div className={cx('light-img')}>
                  <img className={cx('lig-img')} src="/imgtheme/lig4.jpg" alt="" />
                </div>
                  <p>Hồng Cánh Sen</p>
                  <div className={cx('apply')}>
                    <div className={cx('apply-top')}>
                      <p>Xem Trước</p>
                    </div>
                    <div className={cx('apply-bottom')}>
                      <p>Áp Dụng</p>
                    </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
