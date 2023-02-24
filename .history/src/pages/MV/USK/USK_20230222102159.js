import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faList, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

import className from 'classnames/bind';
import style from '../MV.module.scss';

const cx = className.bind(style);

function MVUSK() {
  const [fillterList, setFillterList] = useState(true);
  const allList = () => setFillterList((current) => !current);
  const [fillterListen, setFillterListen] = useState(true);
  const listenList = () => setFillterListen((current) => !current);
  return (
    <div className={cx('mvusk')}>
      <div className={cx('mvusk-container')}>
        <div className={cx('usk-header')}>
          <div className={cx('header-filler')}>
            <div className={cx('btn-all')}>
              <FontAwesomeIcon icon={faMusic} />
              <p>Tất Cả</p>
              <div className={cx('icon-search')} onClick={allList}>
                <FontAwesomeIcon
                  className={cx('list-search')}
                  icon={faChevronDown}
                  style={{
                    display: fillterList ? 'block' : 'none',
                  }}
                />
                <FontAwesomeIcon
                  className={cx('list-search')}
                  icon={faChevronUp}
                  style={{
                    display: fillterList ? 'none' : 'block',
                  }}
                />
              </div>
            </div>
            <div className={cx('btn-listien')}>
              <FontAwesomeIcon icon={faList} />
              <p>Nghe Nhiều</p>
              <div className={cx('icon-search')} onClick={listenList}>
                <FontAwesomeIcon
                  className={cx('list-search')}
                  icon={faChevronDown}
                  style={{
                    display: fillterListen ? 'block' : 'none',
                  }}
                />
                <FontAwesomeIcon
                  className={cx('list-search')}
                  icon={faChevronUp}
                  style={{
                    display: fillterListen ? 'none' : 'block',
                  }}
                />
              </div>
              <div
                className={cx('list-fillter-listen')}
                style={{
                  display: fillterListen ? 'none' : 'block',
                }}
              >
                <ListenMore />
              </div>
            </div>
          </div>
        </div>
        <div className={cx('usk-content')}>
          <div className={cx('content-items')}>
            <div className={cx('content-item')}>
              <div className={cx('mv-img')}>
                <img className={cx('i-time')} src="/imgmv/1.webp" alt=" " />
                <span className={cx('s-time')}>06:46</span>
                <FontAwesomeIcon className={cx('i-play')} icon={faCirclePlay} />
              </div>
              <div className={cx('mv-sigle')}>
                <div className={cx('sig-img')}>
                  <img src="/imgmv/s1.jpg" alt=" " />
                </div>
                <div className={cx('sig-name')}>
                  <span className={cx('name-sog')}>Minh Kết Thúc Đi</span>
                  <p className={cx('name-sig')}>Đinh Kiến PhongUSK</p>
                </div>
              </div>
            </div>
            <div className={cx('content-item')}>
              <div className={cx('mv-img')}>
                <img className={cx('i-time')} src="/imgmv/1.webp" alt=" " />
                <span className={cx('s-time')}>06:46</span>
                <FontAwesomeIcon className={cx('i-play')} icon={faCirclePlay} />
              </div>
              <div className={cx('mv-sigle')}>
                <div className={cx('sig-img')}>
                  <img src="/imgmv/s1.jpg" alt=" " />
                </div>
                <div className={cx('sig-name')}>
                  <span className={cx('name-sog')}>Minh Kết Thúc Đi</span>
                  <p className={cx('name-sig')}>Đinh Kiến PhongUSK</p>
                </div>
              </div>
            </div>
            <div className={cx('content-item')}>
              <div className={cx('mv-img')}>
                <img className={cx('i-time')} src="/imgmv/1.webp" alt=" " />
                <span className={cx('s-time')}>06:46</span>
                <FontAwesomeIcon className={cx('i-play')} icon={faCirclePlay} />
              </div>
              <div className={cx('mv-sigle')}>
                <div className={cx('sig-img')}>
                  <img src="/imgmv/s1.jpg" alt=" " />
                </div>
                <div className={cx('sig-name')}>
                  <span className={cx('name-sog')}>Minh Kết Thúc Đi</span>
                  <p className={cx('name-sig')}>Đinh Kiến PhongUSK</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default MVUSK;
