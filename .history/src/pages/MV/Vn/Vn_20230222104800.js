import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faList, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

import className from 'classnames/bind';
import style from '../MV.module.scss';
import ListAll from '../ListAll';
import ListenMore from '../ListenMore';

const cx = className.bind(style);

function MVVN() {
  const [fillterList, setFillterList] = useState(true);
  const allList = () => setFillterList((current) => !current);
  const [fillterListen, setFillterListen] = useState(true);
  const listenList = () => setFillterListen((current) => !current);
  const [showPlay, setShowPlay] = useState(false);
  const showMusicPlay = () => setShowPlay((current) => !current);

  return (
    <div className={cx('mvvn')}>
      <div className={cx('mvvn-container')}>
        <div className={cx('vn-header')}>
          <div className={cx('header-filler')}>
            <div className={cx('btn-all')} onClick={allList}>
              <FontAwesomeIcon icon={faMusic} />
              <p>Tất Cả</p>
              <div className={cx('icon-search')}>
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
              <div
                className={cx('list-fillter-all')}
                style={{
                  display: fillterList ? 'none' : 'block',
                }}
              >
                <ListAll />
              </div>
            </div>
            <div className={cx('btn-listien')} onClick={listenList}>
              <FontAwesomeIcon icon={faList} />
              <p>Nghe Nhiều</p>
              <div className={cx('icon-search')}>
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
        <div className={cx('vn-content')}>
          <div className={cx('content-items')}>
            <div className={cx('content-item')}>
              <div className={cx('mv-img')}>
                <img className={cx('i-time')} src="/imgmv/1.webp" alt=" " />
                <span className={cx('s-time')}>06:46</span>
                <FontAwesomeIcon
                  className={cx('i-play')}
                  icon={faCirclePlay}
                  style={{
                    display: showPlay ? 'none' : '',
                  }}
                />
              </div>
              <div className={cx('mv-sigle')}>
                <div className={cx('sig-img')}>
                  <img src="/imgmv/s1.jpg" alt=" " />
                </div>
                <div className={cx('sig-name')}>
                  <span className={cx('name-sog')}>Minh Kết Thúc Đi</span>
                  <p className={cx('name-sig')}>Đinh Kiến PhongVN</p>
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
                  <p className={cx('name-sig')}>Đinh Kiến PhongVN</p>
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
                  <p className={cx('name-sig')}>Đinh Kiến PhongVN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MVVN;
