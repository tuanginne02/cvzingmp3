import React from 'react';
import className from 'classnames/bind';
import styles from './MenuSetting.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCirclePlay,
  faBan,
  faChevronRight,
  faArrowTrendUp,
  faCircleInfo,
  faPhone,
  faFileLines,
  faShield,
  faCheck,
  faToggleOn,
  faToggleOff,
} from '@fortawesome/free-solid-svg-icons';
const cx = className.bind(styles);

export function Setting() {
  return (
    <div className={cx('setting')}>
      <div className={cx('setting-container')}>
        <div className={cx('setting-items')}>
          <div className={cx('setting-item')}>
            <div className={cx('setting-icon-l')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faBan} />
              <span>Danh sách chặn</span>
            </div>
          </div>
          <div className={cx('setting-item')}>
            <div className={cx('setting-icon-l')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faBan} />
              <span>Chất lượng nhạc</span>
            </div>
            <div className={cx('setting-icon-r')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faChevronRight} />
            </div>
            <div className={cx('setting-children')}>
              <div className={cx('children-item')}>
                <div className={cx('children-item-top')}>
                  <span>SQ 128</span>
                </div>
                <div className={cx('children-item-bottom')}>
                  <p>Giảm sử dụng dữ liệu cho các kết nối chậm hơn</p>
                  <FontAwesomeIcon className={cx('iconSetting')} icon={faCheck} />
                </div>
              </div>
              <div className={cx('children-item')}>
                <div className={cx('children-item-top')}>
                  <span>SQ 128</span>
                </div>
                <div className={cx('children-item-bottom')}>
                  <p>Kết hợp tốt nhất giữa việc sử dụng dữ liệu và chất lượng lượng âm thanh</p>
                  <FontAwesomeIcon className={cx('iconSetting')} icon={faCheck} />
                </div>
              </div>
            </div>
          </div>
          <div className={cx('setting-item')}>
            <div className={cx('setting-icon-l')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faCirclePlay} />
              <span>Giao diện</span>
            </div>
            <div className={cx('setting-icon-r')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faChevronRight} />
            </div>
             <div className={cx('setting-children')}>
              <div className={cx('children-item')}>
                <div className={cx('children-item-bottom')}>
                  <span>Luôn phát nhạc toàn mà hình</span>
                  <FontAwesomeIcon className={cx('iconSetting')} icon={faToggleOn} />
                </div>
              </div>
              <div className={cx('children-item')}>
                <div className={cx('children-item-bottom')}>
                  <span>Hiệu ứng</span>
                  <FontAwesomeIcon className={cx('iconSetting')} icon={faToggleOff} />
                </div>
              </div>
            </div>
          </div>
          <div className={cx('setting-item')}>
            <div className={cx('setting-icon-l')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faArrowTrendUp} />
              <span>Chuyển bài</span>
            </div>
            <div className={cx('setting-icon-r')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faChevronRight} />
            </div>
             <div className={cx('setting-children')}>
              <div className={cx('children-item')}>
                <div className={cx('children-item-top','next-sings')}>
                 <div className={cx('nsings-title')}>
                    <span>Chuyển bài mượt mà</span>
                    <p>(Crossfade)</p>
                 </div cl>
                  <FontAwesomeIcon className={cx('iconSetting')} icon={faToggleOn} />
                </div>
              </div>
              <div className={cx('children-item')}>
                <div className={cx('children-item-top')}>
                  <span>SQ 128</span>
                </div>
                <div className={cx('children-item-bottom')}>
                  <p>Kết hợp tốt nhất giữa việc sử dụng dữ liệu và chất lượng lượng âm thanh</p>
                  <FontAwesomeIcon className={cx('iconSetting')} icon={faCheck} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('setting-line')}></div>
        <div className={cx('setting-items', 'setting-bottom')}>
          <div className={cx('setting-item')}>
            <div className={cx('setting-icon-l')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faCircleInfo} />
              <span>Giới thiệu</span>
            </div>
          </div>
          <div className={cx('setting-item')}>
            <div className={cx('setting-icon-l')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faPhone} />
              <span>Liên hệ</span>
            </div>
          </div>
          <div className={cx('setting-item')}>
            <div className={cx('setting-icon-l')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faBan} />
              <span>Quảng cáo</span>
            </div>
          </div>
          <div className={cx('setting-item')}>
            <div className={cx('setting-icon-l')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faFileLines} />
              <span>Thỏa thuận sử dụng</span>
            </div>
          </div>
          <div className={cx('setting-item')}>
            <div className={cx('setting-icon-l')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faShield} />
              <span>Chính sách bảo mật</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
