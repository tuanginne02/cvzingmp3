import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './Radio.module.scss';

const cx = classNames.bind(styles);

function Radio() {
  const [changeClickColorNext, setChangeClickColorNext] = useState(true);
  const handlOnClickNext = () => {
    setChangeClickColorNext((current) => !current);
  };
  const [changeOnMouseChannel, setChangeOnMouseChannle] = useState(true);

  function handleOnMouseChannle() {
    setChangeOnMouseChannle(false);
  }
  function handleOutMouseChannle() {
    setChangeOnMouseChannle(true);
  }
  return (
    <div className={cx('radio')}>
      <div className={cx('radio-container')}>
        {/* <div className={cx('radio-header-tiltle')}>
          <h2>Radio Nổi Bật</h2>
          <div className={cx('title-all')}>
            <p>TẤT CẢ</p>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div> */}
        <div className={cx('prev-next')} onClick={handlOnClickNext}>
          <span
            className={cx('prev')}
            style={{
              color: changeClickColorNext ? '#fff' : 'rgba(89, 84, 96, 0.1)',
            }}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </span>
          <span className={cx('next')}>
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              style={{
                color: changeClickColorNext ? 'rgba(89, 84, 96, 0.5)' : '#fff',
              }}
            />
          </span>
        </div>
        <div className={cx('radio-items')}>
          <div className={cx('radio-item')}>
            <div className={cx('item-content')}>
              <div className={cx('item-img')}>
                <div className={cx('img-lare')}>
                  <img className={cx('img-radio')} src="/imgradio/1.webp" alt="radio" />
                </div>
                <div className={cx('img-small')}>
                  <img className={cx('img-radio-sm')} src="/imgradio/s1.webp" alt="radio-s" />
                </div>
              </div>
              <FontAwesomeIcon className={cx('play-radio-icon')} icon={faCirclePlay} />
              <span className={cx('live-radio')}>LIVE</span>
            </div>
            <div className={cx('radio-title')}>
              <span className={cx('radio-name')}>Bolero</span>
              <span className={cx('radio-listen')}>356 đang nghe</span>
            </div>
          </div>
          <div className={cx('radio-item')}>
            <div className={cx('item-content')}>
              <div className={cx('item-img')}>
                <div className={cx('img-lare')}>
                  <img className={cx('img-radio')} src="/imgradio/2.webp" alt="radio" />
                </div>
                <div className={cx('img-small')}>
                  <img className={cx('img-radio-sm')} src="/imgradio/s2.webp" alt="radio-s" />
                </div>
              </div>
              <FontAwesomeIcon className={cx('play-radio-icon')} icon={faCirclePlay} />
              <span className={cx('live-radio')}>LIVE</span>
            </div>
            <div className={cx('radio-title')}>
              <span className={cx('radio-name')}>V-POP</span>
              <span className={cx('radio-listen')}>1K đang nghe</span>
            </div>
          </div>
          <div className={cx('radio-item')}>
            <div className={cx('item-content')}>
              <div className={cx('item-img')}>
                <div className={cx('img-lare')}>
                  <img className={cx('img-radio')} src="/imgradio/3.webp" alt="radio" />
                </div>
                <div className={cx('img-small')}>
                  <img className={cx('img-radio-sm')} src="/imgradio/s3.webp" alt="radio-s" />
                </div>
              </div>
              <FontAwesomeIcon className={cx('play-radio-icon')} icon={faCirclePlay} />
              <span className={cx('live-radio')}>LIVE</span>
            </div>
            <div className={cx('radio-title')}>
              <span className={cx('radio-name')}>Chạm</span>
              <span className={cx('radio-listen')}>254 đang nghe</span>
            </div>
          </div>
          <div className={cx('radio-item')}>
            <div className={cx('item-content')}>
              <div className={cx('item-img')}>
                <div className={cx('img-lare')}>
                  <img className={cx('img-radio')} src="/imgradio/4.webp" alt="radio" />
                </div>
                <div className={cx('img-small')}>
                  <img className={cx('img-radio-sm')} src="/imgradio/s4.webp" alt="radio-s" />
                </div>
              </div>
              <FontAwesomeIcon className={cx('play-radio-icon')} icon={faCirclePlay} />
              <span className={cx('live-radio')}>LIVE</span>
            </div>
            <div className={cx('radio-title')}>
              <span className={cx('radio-name')}>US-UK</span>
              <span className={cx('radio-listen')}>104 đang nghe</span>
            </div>
          </div>
          <div className={cx('radio-item')}>
            <div className={cx('item-content')}>
              <div className={cx('item-img')}>
                <div className={cx('img-lare')}>
                  <img className={cx('img-radio')} src="/imgradio/5.webp" alt="radio" />
                </div>
                <div className={cx('img-small')}>
                  <img className={cx('img-radio-sm')} src="/imgradio/s5.webp" alt="radio-s" />
                </div>
              </div>
              <FontAwesomeIcon className={cx('play-radio-icon')} icon={faCirclePlay} />
              <span className={cx('live-radio')}>LIVE</span>
            </div>
            <div className={cx('radio-title')}>
              <span className={cx('radio-name')}>K-POP</span>
              <span className={cx('radio-listen')}>38 đang nghe</span>
            </div>
          </div>
          <div className={cx('radio-item')}>
            <div className={cx('item-content')}>
              <div className={cx('item-img')}>
                <div className={cx('img-lare')}>
                  <img className={cx('img-radio')} src="/imgradio/6.webp" alt="radio" />
                </div>
                <div className={cx('img-small')}>
                  <img className={cx('img-radio-sm')} src="/imgradio/s6.webp" alt="radio-s" />
                </div>
              </div>
              <FontAwesomeIcon className={cx('play-radio-icon')} icon={faCirclePlay} />
              <span className={cx('live-radio')}>LIVE</span>
            </div>
            <div className={cx('radio-title')}>
              <span className={cx('radio-name')}>Acoustic</span>
              <span className={cx('radio-listen')}>68 đang nghe</span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('radio-channel')}>
        <div className={cx('channel-container')}>
          <div className={cx('channel-left')}>
            <div className={cx('channel-time')}>
              <p>Kênh</p>
            </div>
            <div
              className={cx('channel-left-content')}
              onMouseOver={handleOnMouseChannle}
              onMouseOut={handleOutMouseChannle}
            >
              <div className={cx('left-content-img')} id="1">
                <img
                  className={cx('img-channel')}
                  src="/imgradio/Chn1.jpg"
                  alt=""
                  style={{
                    opacity: changeOnMouseChannel ? '' : '0.5',
                  }}
                />
                <FontAwesomeIcon
                  className={cx('play-channel-icon')}
                  icon={faCirclePlay}
                  style={{
                    display: changeOnMouseChannel ? 'none' : '',
                    color: changeOnMouseChannel ? '' : '#fff',
                    opacity: changeOnMouseChannel ? '' : '1',
                  }}
                />
              </div>
              <div className={cx('left-content-img')}>
                <img
                  className={cx('img-channel')}
                  src="/imgradio/Chn2.jpg"
                  alt=""
                  style={{
                    opacity: changeOnMouseChannel ? '' : '0.5',
                  }}
                />
                <FontAwesomeIcon
                  className={cx('play-channel-icon')}
                  icon={faCirclePlay}
                  style={{
                    display: changeOnMouseChannel ? 'none' : '',
                    color: changeOnMouseChannel ? '' : '#fff',
                    opacity: changeOnMouseChannel ? '' : '1',
                  }}
                />
              </div>
            </div>
          </div>
          <div className={cx('channel-right')}>
            <div className={cx('channel-right-items')}>
              <div className={cx('right-item')}>
                <div className={cx('channel-time')}>
                  <p>Kênh</p>
                </div>
                <div className={cx('right-item-top')}>
                  <div className={cx('item-top-left')}>
                    <div className={cx('top-left-frist')}>
                      <div className={cx('left-frist-content')}>
                        <div className={cx('frist-img')}>
                          <img className={cx('img-fs')} src="" alt="" />
                        </div>
                        <div className={cx('frist
                      </div>
                    </div>
                    <div className={cx('top-left-second')}></div>
                  </div>
                  <div className={cx('item-top-right')}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Radio;
