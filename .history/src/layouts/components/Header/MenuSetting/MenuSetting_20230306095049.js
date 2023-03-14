import React from 'react';
import className from 'classnames/bind';
import styles from '../Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeftLong,
  faArrowRightLong,
  faSearch,
  faDownload,
  faShirt,
  faGem,
  faGear,
  faCirclePlay,
  faBan,
  faChevronRight,
  faArrowTrendUp,
  faCircleInfo,
  faPhone,
  faFileLines,
  faShield,
} from '@fortawesome/free-solid-svg-icons';
const cx = className.bind(styles);

function Setting() {
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
              <span></span>
            </div>
            <div className={cx('setting-icon-r')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faChevronRight} />
            </div>
          </div>
          <div className={cx('setting-item')}>
            <div className={cx('setting-icon-l')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faBan} />
              <span></span>
            </div>
            <div className={cx('setting-icon-r')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faChevronRight} />
            </div>
          </div>
          <div className={cx('setting-item')}>
            <div className={cx('setting-icon-l')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faBan} />
              <span></span>
            </div>
            <div className={cx('setting-icon-r')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faChevronRight} />
            </div>
          </div>
        </div>
        <div className={cx('setting-line')}></div>
        <div className={cx('setting-items')}>
          <div className={cx('setting-item')}>
            <div className={cx('setting-icon-l')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faBan} />
              <span></span>
            </div>
          </div>
          <div className={cx('setting-item')}>
            <div className={cx('setting-icon-l')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faBan} />
              <span></span>
            </div>
          </div>
          <div className={cx('setting-item')}>
            <div className={cx('setting-icon-l')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faBan} />
              <span></span>
            </div>
          </div>
          <div className={cx('setting-item')}>
            <div className={cx('setting-icon-l')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faBan} />
              <span></span>
            </div>
          </div>
          <div className={cx('setting-item')}>
            <div className={cx('setting-icon-l')}>
              <FontAwesomeIcon className={cx('iconSetting')} icon={faBan} />
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
