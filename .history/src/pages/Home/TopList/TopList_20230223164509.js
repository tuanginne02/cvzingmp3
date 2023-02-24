import React, { useState } from 'react';
import className from 'classnames/bind';
import styles from '../Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const cx = className.bind(styles);

function TopList() {
  return (
    <div className={cx('topList')}>
      <div className={cx('list-top')}>
        <h2>Thư Thả Cuối Tuần</h2>
        <div className={cx('list-items')}>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgtop/1.jpg" alt="topWeek" />
              </div>
              <div className={cx('item-icon')}>
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              <span className={cx('name-title')}>Nhạc Cho Chủ Nhật</span>
              <span className={cx('information-title')}>Thư thả ngày Chủ Nhật bên những giai điệu Acoustic</span>
            </div>
          </div>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgtop/2.jpg" alt="topWeek" />
              </div>
              <div className={cx('item-icon')}>
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              <span className={cx('name-title')}>Lofi Một Chút Thôi</span>
              <span className={cx('information-title')}>Nhạc Việt 'lâu phai' và gây nghiện hoài hoài</span>
            </div>
          </div>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgtop/3.jpg" alt="topWeek" />
              </div>
              <div className={cx('item-icon')}>
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              <span className={cx('name-title')}>Today's V-pop Hits</span>
              <span className={cx('information-title')}>Hoàng Thùy Linh và 30 bản bản Hit V-Vpop nổi bật hiện nay</span>
            </div>
          </div>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgtop/4.jpg" alt="topWeek" />
              </div>
              <div className={cx('item-icon')}>
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              <span className={cx('name-title')}>Pop All Stars</span>
              <span className={cx('information-title')}>Thả mình vào dòng chảy của làn nhạc trẻ hay nhất hiện nay</span>
            </div>
          </div>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgtop/5.jpg" alt="topWeek" />
              </div>
              <div className={cx('item-icon')}>
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              <span className={cx('name-title')}>Nam Thần Nhạc Việt</span>
              <span className={cx('information-title')}>Dổ đứ đừ với nhũng nam thần của làng nhạc Việt</span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('list-bottom')}>
        <h2>Nghệ Sĩ Thịnh Hành 🎄</h2>
        <div className={cx('list-items')}>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgtop/s1.jpg" alt="topWeek" />
              </div>
              <div className={cx('item-icon')}>
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              {/* <span className={cx('name-title')}>Nhạc Cho Chủ Nhật</span> */}
              <span className={cx('information-title')}>Jack - J97 và những bản Hit đỉnh nhất ở đây</span>
            </div>
          </div>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgtop/s2.jpg" alt="topWeek" />
              </div>
              <div className={cx('item-icon')}>
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              {/* <span className={cx('name-title')}>Lofi Một Chút Thôi</span> */}
              <span className={cx('information-title')}>"Ngày đầu tiên" cà toàn bộ Hit nổi bật của Đức Phúc</span>
            </div>
          </div>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgtop/s3.jpg" alt="topWeek" />
              </div>
              <div className={cx('item-icon')}>
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              {/* <span className={cx('name-title')}>Today's V-pop Hits</span> */}
              <span className={cx('information-title')}>Những Bài Hát Hay Nhất Của Ca Sĩ Số 1 Việt Nam</span>
            </div>
          </div>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgtop/s4.jpg" alt="topWeek" />
              </div>
              <div className={cx('item-icon')}>
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              {/* <span className={cx('name-title')}>Pop All Stars</span> */}
              <span className={cx('information-title')}>Ú òa một cái có ngay nhạc xịn của MONO</span>
            </div>
          </div>
          <div className={cx('list-item')}>
            <div className={cx('item-img')}>
              <div className={cx('img-topweek')}>
                <img className={cx('img-1')} src="/imgtop/s5.jpg" alt="topWeek" />
              </div>
              <div className={cx('item-icon')}>
                <FontAwesomeIcon className={cx('icon-left')} icon={faHeart} />
                <FontAwesomeIcon className={cx('icon-center')} icon={faCirclePlay} />
                <FontAwesomeIcon className={cx('icon-right')} icon={faEllipsis} />
              </div>
            </div>
            <div className={cx('item-title')}>
              {/* <span className={cx('name-title')}>Nam Thần Nhạc Việt</span> */}
              <span className={cx('information-title')}>Hoàng Thùy Linh cùng "Bo Xì Bo","Hạ Phỏm","See Tình"</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopList;
