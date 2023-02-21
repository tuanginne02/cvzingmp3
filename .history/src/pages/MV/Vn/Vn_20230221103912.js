import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faList, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

import className from 'classnames/bind';
import style from '../MV.module.scss';

const cx = className.bind(style);

function MVVN() {
  return (
    <div className={cx('mvvn')}>
      <div className={cx('mvvn-container')}>
        <div className={cx('vn-header')}>
          <div className={cx('header-filler')}>
            <div className={cx('btn-all')}>
              <FontAwesomeIcon icon={faMusic} />
              <p>Tất Cả</p>
              <div className={cx('icon-search')}>
                <FontAwesomeIcon className={cx('list-search')} icon={faChevronDown} />
                <FontAwesomeIcon className={cx('list-search')} icon={faChevronUp} />
              </div>
            </div>
            <div className={cx('btn-listien')}>
              <FontAwesomeIcon icon={faList} />
              <p>Nghe Nhiều</p>
              <div className={cx('icon-search')}>
                <FontAwesomeIcon className={cx('list-search')} icon={faChevronDown} />
                <FontAwesomeIcon className={cx('list-search')} icon={faChevronUp} />
              </div>
            </div>
          </div>
        </div>
        <div className={cx('vn-content')}>
          <div className={cx('content-items')}>
           <div className={cx('content-item')}>
                <div className={cx('mv-img')}>
                  <img src="/public/imgmv/1.webp" alt=" " />
                  <span>06:46</span>
                  <FontAwesomeIcon icon={faCirclePlay} />
                </div>
                <div className={cx('mv-sigle')}>
                  <div className={cx('sig-img')}>
                    <img src="/public/imgmv/1.webp" alt= " " />
                  </div>
                  <div className={cx('sig-name')}>
                    <span>Minh Kết Thúc Đi</span>
                    <span>Đinh Kiến Phong</span>
                  </div>
                </div>
           </div >
          </div>
        </div>
      </div>
    </div>
  );
}
export default MVVN;
