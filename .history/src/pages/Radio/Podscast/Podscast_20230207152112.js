import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import styles from '../Radio.module.scss';

const cx = className.bind(styles);

function Podcast() {
  return (
    <div className={cx('podcast')}>
      <div className={cx('podccast-container')}>
        <div className={cx('podcast-discover')}>
        <div className={cx('cont-title')}>
            <h1>Thể Loại Podcast</h1>
            <div className={cx('pos-icon')}>
                <span>TẤT CẢ</span>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className={cx('cont-items')}>
            <div className={cx('cont-item')}>
              <div className={cx('cont-item-img')}>
                <img src="/imgradio/podcast/1.jpg" alt="pos" className={cx('pos-img')} />
              </div>
              <div className={cx('cont-item-title')}>
                <span>Đắp Chăn Nằm Nghe Tun Kể</span>
              </div>
            </div>
            <div className={cx('cont-item')}>
              <div className={cx('cont-item-img')}>
                <img src="/imgradio/podcast/2.png" alt="pos" className={cx('pos-img')} />
              </div>
              <div className={cx('cont-item-title')}>
                <span>How2Money x Doctor Housing</span>
                <span></span>
              </div>
            </div>
            <div className={cx('cont-item')}>
              <div className={cx('cont-item-img')}>
                <img src="/imgradio/podcast/3.png" alt="pos" className={cx('pos-img')} />
              </div>
              <div className={cx('cont-item-title')}>
                <span>XONE with Starts</span>
              </div>
            </div>
            <div className={cx('cont-item')}>
              <div className={cx('cont-item-img')}>
                <img src="/imgradio/podcast/4.jfif" alt="pos" className={cx('pos-img')} />
              </div>
              <div className={cx('cont-item-title')}>
                <span>HIEU.TV</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('podcast-category')}>
          <div className={cx('cont-title')}>
            <h1>Thể Loại Podcast</h1>
            <div className={cx('pos-icon')}>
                <span>TẤT CẢ</span>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className={cx('cont-items')}>
            <div className={cx('cont-item')}>
              <div className={cx('cont-item-img')}>
                <img src="/imgradio/podcast/1.jpg" alt="pos" className={cx('pos-img')} />
              </div>
              <div className={cx('cont-item-title')}>
              </div>
            </div>
            <div className={cx('cont-item')}>
              <div className={cx('cont-item-img')}>
                <img src="/imgradio/podcast/2.png" alt="pos" className={cx('pos-img')} />
              </div>
              <div className={cx('cont-item-title')}>
             
              </div>
            </div>
            <div className={cx('cont-item')}>
              <div className={cx('cont-item-img')}>
                <img src="/imgradio/podcast/3.png" alt="pos" className={cx('pos-img')} />
              </div>
              <div className={cx('cont-item-title')}>
              </div>
            </div>
            <div className={cx('cont-item')}>
              <div className={cx('cont-item-img')}>
                <img src="/imgradio/podcast/4.jfif" alt="pos" className={cx('pos-img')} />
              </div>
              <div className={cx('cont-item-title')}>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('podcast-rank')}>
        <div className={cx('cont-title')}>
            <h1>Bảng Xếp Hạng Podcast</h1>
            <div className={cx('pos-icon')}>
                <span>TẤT CẢ</span>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className={cx('podcast-rank-items')}>
            <div className={cx('podc-rank-item')}>
                <div className={cx('rank-item-left')}>
                    <div className={cx('nub-rank')}>
                        
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Podcast;
