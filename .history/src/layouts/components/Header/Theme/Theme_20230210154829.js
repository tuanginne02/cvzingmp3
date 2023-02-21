import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import styles from './Them.module.scss';

const cx = className.bind(styles);

function Theme() {
  return (
    <div className={cx('theme')}>
      <div className={cx('theme-container')}>
        <div className={cx('theme-content')}>
          <div className={cx('theme-title')}>
            <h1>Giao Diện</h1>
            <FontAwesomeIcon className={cx('icon-colse')} icon={faClose} />
          </div>
          <div className={cx('them-dynamic')}>
            <div className={cx('dynamic-title')}>
              <span>Dynamic</span>
            </div>
            <div className={cx('dynamic-items')}>
              <div className={cx('dynamic-item')}>
                <div className={cx('dynamic-img')}>
                  <img className={cx('dy-img')} src="/imgtheme/dy1.png" alt="" />
                  <p>London</p>
                </div>
              </div>
              <div className={cx('dynamic-item')}>
                <div className={cx('dynamic-img')}>
                  <img className={cx('dy-img')} src="/imgtheme/dy5.jpg" alt="" />
                  <p>Nâu</p>
                </div>
              </div>
              <div className={cx('dynamic-item')}>
                <div className={cx('dynamic-img')}>
                  <img className={cx('dy-img')} src="/imgtheme/dy2.jpg" alt="" />
                  <p>Sáng Tối</p>
                </div>
              </div>
              <div className={cx('dynamic-item')}>
                <div className={cx('dynamic-img')}>
                  <img className={cx('dy-img')} src="/imgtheme/dy3.jpg" alt="" />
                  <p>Xanh Da Trời</p>
                </div>
              </div>
              <div className={cx('dynamic-item')}>
                <div className={cx('dynamic-img')}>
                  <img className={cx('dy-img')} src="/imgtheme/dy4.jpg" alt="" />
                  <p>Hồng</p>
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
                  <p>Zing Music Awards</p>
                </div>
              </div>
              <div className={cx('thems-item')}>
                <div className={cx('thems-img')}>
                  <img className={cx('the-img')} src="/imgtheme/th2.jpg" alt="" />
                  <p>XONE</p>
                </div>
              </div>
              <div className={cx('thems-item')}>
                <div className={cx('thems-img')}>
                  <img className={cx('the-img')} src="/imgtheme/th3.jpg" alt="" />
                  <p>Tháp Eiffel</p>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('them-singer')}>
            <div className={cx('singer-title')}>
              <span>Chủ Đề</span>
            </div>
            <div className={cx('singer-items')}>
              <div className={cx('singer-item')}>
                <div className={cx('singer-img')}>
                  <img className={cx('sig-img')} src="/imgtheme/sig1.jpg" alt="" />
                  <p>Jack</p>
                </div>
              </div>
              <div className={cx('singer-item')}>
                <div className={cx('singer-img')}>
                  <img className={cx('sig-img')} src="/imgtheme/sig2.jpg" alt="" />
                  <p>IU</p>
                </div>
              </div>
              <div className={cx('singer-item')}>
                <div className={cx('singer-img')}>
                  <img className={cx('sig-img')} src="/imgtheme/sig3.jpg" alt="" />
                  <p>Ji Chang Wook</p>
                </div>
              </div>
              <div className={cx('singer-item')}>
                <div className={cx('singer-img')}>
                  <img className={cx('sig-img')} src="/imgtheme/sig4.jpg" alt="" />
                  <p>Lisa</p>
                </div>
              </div>
              <div className={cx('singer-item')}>
                <div className={cx('singer-img')}>
                  <img className={cx('sig-img')} src="/imgtheme/sig5.jpg" alt="" />
                  <p>Jennie Kim</p>
                </div>
              </div>
              <div className={cx('singer-item')}>
                <div className={cx('singer-img')}>
                  <img className={cx('sig-img')} src="/imgtheme/sig6.jpg" alt="" />
                  <p>Jisoo</p>
                </div>
              </div>
              <div className={cx('singer-item')}>
                <div className={cx('singer-img')}>
                  <img className={cx('sig-img')} src="/imgtheme/sig7.jpg" alt="" />
                  <p>Rose</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Theme;
