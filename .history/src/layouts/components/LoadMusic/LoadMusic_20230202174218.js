import classNames from 'classnames/bind';
import styles from './LoadMusic.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faEllipsis,
  faShuffle,
  faForwardStep,
  faBackwardStep,
  faRepeat,
  faPlay,
  faMicrophone,
  faWindowRestore,
  faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';
import { MV, Microphone } from '~/assets/Icon/Icon';

const cx = classNames.bind(styles);

function LoadMusic() {
  return (
    <div className={cx('loadMusic')}>
      <div className={cx('loadMusic-content')}>
        <div className={cx('content-left')}>
          <div className={cx('left-img')}>
            <img src="" alt="" />
          </div>
          <div className={cx('left-name-music')}>
            <span>Chúng Ta Của Hiện Tại</span>
            <span>Sơn Tùng M-TP</span>
          </div>
          <div className={cx('left-icon')}>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
        <div className={cx('content-center')}>
          <div className={cx('center-top')}>
            <span className={cx('top-icon')}>
              <FontAwesomeIcon icon={faShuffle} />
            </span>
            <span className={cx('top-icon')}>
              <FontAwesomeIcon icon={faBackwardStep} />
            </span>
            <span className={cx('top-icon')}>
              <FontAwesomeIcon icon={faPlay} />
            </span>
            <span className={cx('top-icon')}>
              <FontAwesomeIcon icon={faForwardStep} />
            </span>
            <span className={cx('top-icon')}>
              <FontAwesomeIcon icon={faRepeat} />
            </span>
          </div>
          <div className={cx('center-bottom')}>
            <span>00:00</span>
            <div className={cx('center-bottom-line')}></div>
            <span>05:02</span>
          </div>
        </div>
        <div className={cx('content-right')}>
          <span className={cx('right-icon')}>
            <MV />
          </span>
          <span className={cx('right-icon')}>
            <FontAwesomeIcon icon={faMicrophone} />
          </span>
          <span className={cx('right-icon')}>
            <FontAwesomeIcon icon={faWindowRestore} />
          </span>
          <span className={cx('right-icon')}>
            <FontAwesomeIcon icon={faVolumeHigh} />
          </span>
          <span className={cx('right-icon')}>
            <MV />
          </span>
          <span className={cx('right-icon')}>
            <MV />
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoadMusic;