import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './Radio.module.scss';
import Podcast from './Podscast';
import TopPodcast from './TopPodcast';

const cx = classNames.bind(styles);

function Radio() {
  const [changeClickColorRadioTV, setChangeClickColorRadioTV] = useState(true);
  const handlOnClickPrev = () => {
    setChangeClickColorRadioTV(true);
  };
  const handlOnClickNext = () => {
    setChangeClickColorRadioTV(false);
  };
  const [changeClickCchannleChanel, setChangeClickChannleChanel] = useState(true);
  const handlOnClickChannlePrev = () => {
    setChangeClickChannleChanel(true);
  };
  const handlOnClickChannleNext = () => {
    setChangeClickChannleChanel(false);
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
        <div
          className={cx('prev')}
          style={{
            color: changeClickColorRadioTV ? '#fff' : 'rgba(89, 84, 96, 0.5)',
          }}
          onClick={handlOnClickPrev}
        >
          <FontAwesomeIcon icon={faChevronCircleLeft} />
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
              <span className={cx('play-radio-icon')}>
                <FontAwesomeIcon className={cx('playR-icon')} icon={faCirclePlay} />
              </span>
              <span className={cx('live-radio')}>LIVE</span>
            </div>
            <div className={cx('radio-title')}>
              <span className={cx('radio-name')}>Bolero</span>
              <span className={cx('radio-listen')}>356 ??ang nghe</span>
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
              <span className={cx('radio-listen')}>1K ??ang nghe</span>
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
              <span className={cx('radio-name')}>Ch???m</span>
              <span className={cx('radio-listen')}>254 ??ang nghe</span>
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
              <span className={cx('radio-listen')}>104 ??ang nghe</span>
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
              <span className={cx('radio-listen')}>38 ??ang nghe</span>
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
              <span className={cx('radio-listen')}>68 ??ang nghe</span>
            </div>
          </div>
        </div>
        <div className={cx('next')} onClick={handlOnClickChannlePrev}>
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            style={{
              color: changeClickColorRadioTV ? 'rgba(89, 84, 96, 0.5)' : '#fff',
            }}
            onClick={handlOnClickNext}
          />
        </div>
      </div>
      <div className={cx('radio-channel')}>
        <div className={cx('channel-container')}>
          <div
            className={cx('prev-channel')}
            style={{
              color: changeClickCchannleChanel ? '#fff' : 'rgba(89, 84, 96, 0.1)',
            }}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </div>

          <div className={cx('channel-left')}>
            <div className={cx('channel-time')}>
              <p>K??nh</p>
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
                  <p>13:00</p>
                </div>
                <div className={cx('right-item-top')}>
                  <div className={cx('item-top-left')}>
                    <div className={cx('top-left-frist')}>
                      <div className={cx('left-frist-content')}>
                        <div className={cx('frist-img')}>
                          <img className={cx('img-fs')} src="/imgradio/1.webp" alt="radio" />
                        </div>
                        <div className={cx('frist-title')}>
                          <span>Solo c??ng Bolero</span>
                          <p>13:00 - 13:30</p>
                        </div>
                      </div>
                    </div>
                    <div className={cx('top-left-second')}>
                      <div className={cx('left-second-content')}>
                        <div className={cx('second-img')}>
                          <img className={cx('img-sc')} src="/imgradio/1.webp" alt="radio" />
                        </div>
                        <div className={cx('second-title')}>
                          <span>Solo c??ng Bolero</span>
                          <p>13:00 - 13:30</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('item-top-right')}>
                    <div className={cx('top-right-frist')}>
                      <div className={cx('right-frist-content')}>
                        <div className={cx('frist-img')}>
                          <img className={cx('img-fs')} src="/imgradio/1.webp" alt="radio" />
                        </div>
                        <div className={cx('frist-title')}>
                          <span>Solo c??ng Bolero</span>
                          <p>13:00 - 13:30</p>
                        </div>
                      </div>
                    </div>
                    <div className={cx('top-right-second')}>
                      <div className={cx('right-second-content')}>
                        <div className={cx('second-img')}>
                          <img className={cx('img-sc')} src="/imgradio/1.webp" alt="radio" />
                        </div>
                        <div className={cx('second-title')}>
                          <span>Solo c??ng Bolero</span>
                          <p>13:00 - 13:30</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx('right-item-bottom')}>
                  <div className={cx('item-bottom')}>
                    <div className={cx('item-bottom-content')}>
                      <div className={cx('bottom-content-img')}>
                        <img src="/imgradio/3.webp" alt="WebP" className={cx('img-lare')} />
                      </div>
                      <div className={cx('bottom-content-title')}>
                        <span>Nh???c M???i M???i Ng??y</span>
                        <p>13:00 - 14:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx('next-channel')} onClick={handlOnClickChannleNext}>
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              style={{
                color: changeClickCchannleChanel ? 'rgba(89, 84, 96, 0)' : '#fff',
              }}
            />
          </div>
        </div>
      </div>
      <Podcast />
      <TopPodcast />
    </div>
  );
}

export default Radio;
