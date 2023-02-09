import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
// import { faHeart, faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './zingchart.module.scss';

const cx = classNames.bind(styles);

function Zingchart() {
  return (
    <div className={cx('zingchart')}>
      <div className={cx('zingchart-conatiner')}>
        <div className={cx('zingchart-title')}>
          <h1>#zingchart</h1>
          <div className={cx('title-icon')}>
            <FontAwesomeIcon className={cx('iconPlay')} icon={faPlay} />
          </div>
        </div>
        <div className={cx('zingchart-data')}>
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
              <ul className={cx('line-chart', 'line-top1')}>
                <li className={cx('line-li')}>
                  <div className={cx('data-point', 'color-1')}></div>
                  <div className={cx('data-line','color-1')}></div>
                </li>
              </ul>
              <ul className={cx('line-chart', 'line-top2')}></ul>
              <ul className={cx('line-chart', 'line-top3')}></ul>
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
  );
}

export default Zingchart;
