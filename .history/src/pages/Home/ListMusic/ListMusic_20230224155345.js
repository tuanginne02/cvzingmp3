import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsis, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function ListMusic() {


  const [changeColorAll, setChangeColorAll] = useState(true);
  const [changeColorVN, setChangeColorVN] = useState(true);
  const [changeColorQT, setChangeColorQT] = useState(true);

  const handlechangeColorAll = () => {
    setChangeColorAll(true);
    setChangeColorVN(true);
    setChangeColorQT(true);
  };
  const handlechangeColorVN = () => {
    setChangeColorVN(false);
    setChangeColorAll(false);
    setChangeColorQT(true);
  };
  const handlechangeColorQT = () => {
    setChangeColorQT(false);
    setChangeColorAll(false);
    setChangeColorVN(true);
  };
  return (
    <div className={cx('list-music')}>
      <div className={cx('list-music-content')}>
        <div className={cx('content-header')}>
          <h2>Mới Phát Hành</h2>
          <div className={cx('header-filler')} l>
            <div className={cx('header-filler-left')}>
              <button
                className={cx('btn-filler')}
                style={{
                  backgroundColor: changeColorAll ? 'rgb(155, 77, 224)' : 'transparent',
                }}
                onClick={handlechangeColorAll}
              >
                TẤT CẢ
              </button>
              <button
                className={cx('btn-filler')}
                style={{
                  backgroundColor: changeColorVN ? 'transparent' : 'rgb(155, 77, 224)',
                }}
                onClick={handlechangeColorVN}
              >
                VIỆT NAM
              </button>
              <button
                className={cx('btn-filler')}
                style={{
                  backgroundColor: changeColorQT ? 'transparent' : 'rgb(155, 77, 224)',
                }}
                onClick={handlechangeColorQT}
              >
                QUỐC TẾ
              </button>
            </div>
            <div className={cx('header-filler-right')}>
              <div className={cx('all-filler')}>TẤT CẢ</div>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
        <div className={cx('music-items')}>
          <div className={cx('music-item')}>
            <div className={cx('item-content')}>
              <div className={cx('content-body')}>
                <div className={cx('list-music-img')}>
                  <img src="/imgListMusic/1.webp" alt="1" />
                  <FontAwesomeIcon className={cx('icon-list-music')} icon={faPlay} />
                </div>
                <div className={cx('list-music-title')}>
                  <span className={cx('name-singer')}>Lặng Im</span>
                  <span className={cx('name-song')}>Hakoota Dũng Hà</span>
                  <span> 1 Tháng trước</span>
                </div>
              </div>
              <div className={cx('icon-left-list')}>
                <FontAwesomeIcon className={cx('icon-left-ellipsis')} icon={faEllipsis} />
              </div>
            </div>
          </div>
          <div className={cx('music-item')}>
            <div className={cx('item-content')}>
              <div className={cx('content-body')}>
                <div className={cx('list-music-img')}>
                  <img src="/imgListMusic/2.webp" alt="1" />
                  <FontAwesomeIcon className={cx('icon-list-music')} icon={faPlay} />
                </div>
                <div className={cx('list-music-title')}>
                  <span className={cx('name-singer')}>Lặng Im</span>
                  <span className={cx('name-song')}>Hakoota Dũng Hà</span>
                  <span> 1 Tháng trước</span>
                </div>
              </div>
              <div className={cx('icon-left-list')}>
                <FontAwesomeIcon className={cx('icon-left-ellipsis')} icon={faEllipsis} />
              </div>
            </div>
          </div>{' '}
          <div className={cx('music-item')}>
            <div className={cx('item-content')}>
              <div className={cx('content-body')}>
                <div className={cx('list-music-img')}>
                  <img src="/imgListMusic/3.webp" alt="1" />
                  <FontAwesomeIcon className={cx('icon-list-music')} icon={faPlay} />
                </div>
                <div className={cx('list-music-title')}>
                  <span className={cx('name-singer')}>Kỷ Niệm Giam Giam Cầm Chúng Ta</span>
                  <span className={cx('name-song')}>Thanh Hưng</span>
                  <span> 1 Tháng trước</span>
                </div>
              </div>
              <div className={cx('icon-left-list')}>
                <FontAwesomeIcon className={cx('icon-left-ellipsis')} icon={faEllipsis} />
              </div>
            </div>
          </div>{' '}
          <div className={cx('music-item')}>
            <div className={cx('item-content')}>
              <div className={cx('content-body')}>
                <div className={cx('list-music-img')}>
                  <img src="/imgListMusic/4.webp" alt="1" />
                  <FontAwesomeIcon className={cx('icon-list-music')} icon={faPlay} />
                </div>
                <div className={cx('list-music-title')}>
                  <span className={cx('name-singer')}>Xin Lỗi, Em Không Ổn!</span>
                  <span className={cx('name-song')}>Hương Giang</span>
                  <span> 1 Tháng trước</span>
                </div>
              </div>
              <div className={cx('icon-left-list')}>
                <FontAwesomeIcon className={cx('icon-left-ellipsis')} icon={faEllipsis} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListMusic;
