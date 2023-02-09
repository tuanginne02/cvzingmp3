import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import styles from '../Home.module.scss';

const cx = className.bind(styles);

function Zingchart() {
  return (
    <div className={cx('zingchart')}>
      <div className={cx('zingchart-content')}>
        <div className={cx('zingchart-title')}>
          <span className={cx('title-z')}>#zingchart</span>
          <div className={cx('zingchart-icon')}>
            <FontAwesomeIcon className={cx('icon-z')} icon={faPlay} />
          </div>
        </div>
        <div className={cx('zingchart-all-items')}>
          <div className={cx('zingchart-left-item')}>
            <div className={cx('zingchart-items')}>
              <div className={cx('zingchart-item')}>
                <div className={cx('zingchart-rank1')}>
                  <span>1</span>
                </div>
                <div className={cx('list-zingchart-img')}>
                  <img src="/imgzingchart/1.jpg" alt="1" />
                  <FontAwesomeIcon className={cx('icon-list-zingchart')} icon={faPlay} />
                </div>
                <div className={cx('list-zingchart-title')}>
                  <span className={cx('name-singer-z')}>Em Là Kẻ Đáng Thương</span>
                  <span className={cx('name-song-z')}>Phá Huy T4</span>
                </div>
                <div className={cx('icon-left-list-z')}>
                  <span>50%</span>
                </div>
              </div>
              <div className={cx('zingchart-item')}>
                <div className={cx('zingchart-rank2')}>
                  <span>2</span>
                </div>
                <div className={cx('list-zingchart-img')}>
                  <img src="/imgzingchart/2.jpg" alt="1" />
                </div>
                <div className={cx('list-zingchart-title')}>
                  <span>Quả Phụ Tướng</span>
                  <span>Dunghoangpham</span>
                </div>
                <div className={cx('icon-left-list-z')}>
                  <span>26%</span>
                </div>
              </div>
              <div className={cx('zingchart-item')}>
                <div className={cx('zingchart-rank3')}>
                  <span>3</span>
                </div>
                <div className={cx('list-zingchart-img')}>
                  <img src="/imgzingchart/3.jpg" alt="1" />
                </div>
                <div className={cx('list-zingchart-title')}>
                  <span>Cuối Cùng Thì</span>
                  <span>Jack - J97</span>
                </div>
                <div className={cx('icon-left-list-z')}>
                  <span>24%</span>
                </div>
              </div>
              {/* <div className={cx('zingchart-item')}>
                <div className={cx('zingchart-rank')}>
                  <span>4</span>
                </div>
                <div className={cx('list-zingchart-img')}>
                  <img src="/imgzingchart/4.jpg" alt="1" />
                </div>
                <div className={cx('list-zingchart-title')}>
                  <span>Đừng Lo Nhé! Có Anh Đây</span>
                  <span>Thiên Tú</span>
                </div>
                <div className={cx('icon-left-list-z')}>
                  <span>20%</span>
                </div>
              </div> */}
            </div>
            <div className={cx('item-left-more')}>
              <button className={cx('btn-more')}>Xem thêm</button>
            </div>
          </div>
          <div className={cx('zingchart-right-item')}>
            <div className={cx('row-rank')}>
              <div className={cx('row')}></div>
              <div className={cx('row')}></div>
              <div className={cx('row')}></div>
              <div className={cx('row')}></div>
              <div className={cx('row')}></div>
              <div className={cx('row')}></div>
              <div className={cx('row')}></div>
              <div className={cx('row')}></div>
              <div className={cx('row')}></div>
              <div className={cx('row')}></div>
            </div>
            <div className={cx('chart-container')}></div>
            <div className={cx('chart-data')}>
              <ul className={cx('line-chart','line-top1')}>
                <li>
                  <div className={cx('data-point')}></div>
                  <div className={cx('data-lin
                </li>
              </ul>
              <ul className={cx('line-chart','line-top2')}></ul>
              <ul className={cx('line-chart','line-top3')}></ul>

            </div>
            <div className={cx('time-rank')}>
              <div className={cx('time')}>17:00</div>
              <div className={cx('time')}>19:00</div>
              <div className={cx('time')}>21:00</div>
              <div className={cx('time')}>23:00</div>
              <div className={cx('time')}>01:00</div>
              <div className={cx('time')}>03:00</div>
              <div className={cx('time')}>05:00</div>
              <div className={cx('time')}>07:00</div>
              <div className={cx('time')}>09:00</div>
              <div className={cx('time')}>11:00</div>
              <div className={cx('time')}>13:00</div>
              <div className={cx('time')}>15:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zingchart;
