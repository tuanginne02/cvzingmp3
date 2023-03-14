import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import className from 'classnames/bind';
import styles from '../Following.module.scss';

const cx = className.bind(styles);

function FollowingVp() {
    const [changeClickColorNext, setChangeClickColorNext] = useState(true);

    const handlOnClickPrev = () => {
      setChangeClickColorNext(false);
    };
    const handlOnClickNext = () => {
      setChangeClickColorNext(true);
    };
  
  return (
    <div className={cx('fl-vp')}>
      <div className={cx('fl-vp-container')}>
      <div className={cx('singer-bottom')}>
          <div className={cx('singer-items')}>
          <div className={cx('prev')} onClick={handlOnClickPrev}>
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                style={{
                  color: changeClickColorNext ? '#fff' : 'rgba(89, 84, 96, 0.1)',
                }}
              />
            </div>
            <div className={cx('singer-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/1.png" alt="radio" />
              </div>
            </div>
            <div className={cx('singer-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/2.png" alt="radio" />
              </div>
            </div>
            <div className={cx('singer-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/3.png" alt="radio" />
              </div>
            </div>
            <div className={cx('singer-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/4.png" alt="radio" />
              </div>
            </div>
            <div className={cx('singer-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/5.png" alt="radio" />
              </div>
            </div>
            <div className={cx('singer-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/6.png" alt="radio" />
              </div>
            </div>
            {/* <div className={cx('singer-item')}>
              <div className={cx('item-img')}>
                <img className={cx('img-radio')} src="/imgsinger/7.png" alt="radio" />
              </div>
            </div> */}
            <div className={cx('next')} onClick={handlOnClickNext}>
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                style={{
                  color: changeClickColorNext ? 'rgba(89, 84, 96, 0.5)' : '#fff',
                }}
              />
            </div>
          </div>
          
        </div>
        <div className={cx('fl-news')}>
          <div className={cx('fl-news-items')}>
            <div className={cx('news-item')}>
              <div className={cx('news-item-top')}>
                <div className={cx('item-top-img')}>
                  <img className={cx('img-user')} src="/imgfollowing/SThach.jpg" alt="user" />
                </div>
                <div className={cx('item-top-name')}>
                  <span>S.T Sơn Thạch</span>
                  <p>16 tháng 11 lúc 14:14</p>
                </div>
                <div className={cx('item-top-sub')}>
                  <p></p>
                  <span>Quan Tâm</span>
                </div>
              </div>
              <div className={cx('news-item-center')}>
                <div className={cx('item-center-title')}>
                  <span>Được ngày nghỉ, mà cũng không được nghỉ 💪💪💪💪💪💪</span>
                </div>
                <div className={cx('item-center-img')}>
                  <img className={cx('img-post')} src="/imgfollowing/newST.jpg" alt="ST" />
                </div>
              </div>
              <div className={cx('news-item-bottom')}>
                <div className={cx('item-bottom-left')}>
                  <FontAwesomeIcon icon={faHeart} />
                  <p>588</p>
                </div>
                <div className={cx('item-bottom-right')}>
                  <FontAwesomeIcon icon={faComment} />
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className={cx('news-item')}>
              <div className={cx('news-item-top')}>
                <div className={cx('item-top-img')}>
                  <img className={cx('img-user')} src="/imgfollowing/SThach.jpg" alt="user" />
                </div>
                <div className={cx('item-top-name')}>
                  <span>S.T Sơn Thạch</span>
                  <p>16 tháng 11 lúc 14:14</p>
                </div>
                <div className={cx('item-top-sub')}>
                  <p></p>
                  <span>Quan Tâm</span>
                </div>
              </div>
              <div className={cx('news-item-center')}>
                <div className={cx('item-center-title')}>
                  <span>Ngầu Chưa ạ.</span>
                </div>
                <div className={cx('item-center-img')}>
                  <img className={cx('img-post')} src="/imgfollowing/st.jfif" alt="ST" />
                </div>
              </div>
              <div className={cx('news-item-bottom')}>
                <div className={cx('item-bottom-left')}>
                  <FontAwesomeIcon icon={faHeart} />
                  <p>588</p>
                </div>
                <div className={cx('item-bottom-right')}>
                  <FontAwesomeIcon icon={faComment} />
                  <p>0</p>
                </div>
              </div>
            </div>
            
          </div>
          <div className={cx('fl-news-items')}>
            <div className={cx('news-item')}>
              <div className={cx('news-item-top')}>
                <div className={cx('item-top-img')}>
                  <img className={cx('img-user')} src="/imgfollowing/SThach.jpg" alt="user" />
                </div>
                <div className={cx('item-top-name')}>
                  <span>S.T Sơn Thạch</span>
                  <p>16 tháng 11 lúc 14:14</p>
                </div>
                <div className={cx('item-top-sub')}>
                  <p></p>
                  <span>Quan Tâm</span>
                </div>
              </div>
              <div className={cx('news-item-center')}>
                <div className={cx('item-center-title')}>
                  <span>Được ngày nghỉ, mà cũng không được nghỉ 💪💪💪💪💪💪</span>
                </div>
                <div className={cx('item-center-img')}>
                  <img className={cx('img-post')} src="/imgfollowing/st.jfif" alt="ST" />
                </div>
              </div>
              <div className={cx('news-item-bottom')}>
                <div className={cx('item-bottom-left')}>
                  <FontAwesomeIcon icon={faHeart} />
                  <p>588</p>
                </div>
                <div className={cx('item-bottom-right')}>
                  <FontAwesomeIcon icon={faComment} />
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className={cx('news-item')}>
              <div className={cx('news-item-top')}>
                <div className={cx('item-top-img')}>
                  <img className={cx('img-user')} src="/imgfollowing/SThach.jpg" alt="user" />
                </div>
                <div className={cx('item-top-name')}>
                  <span>S.T Sơn Thạch</span>
                  <p>16 tháng 11 lúc 14:14</p>
                </div>
                <div className={cx('item-top-sub')}>
                  <p></p>
                  <span>Quan Tâm</span>
                </div>
              </div>
              <div className={cx('news-item-center')}>
                <div className={cx('item-center-title')}>
                  <span>Ngầu Chưa ạ.</span>
                </div>
                <div className={cx('item-center-img')}>
                  <img className={cx('img-post')} src="/imgfollowing/newST.jpg" alt="ST" />
                </div>
              </div>
              <div className={cx('news-item-bottom')}>
                <div className={cx('item-bottom-left')}>
                  <FontAwesomeIcon icon={faHeart} />
                  <p>588</p>
                </div>
                <div className={cx('item-bottom-right')}>
                  <FontAwesomeIcon icon={faComment} />
                  <p>0</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowingVp;
