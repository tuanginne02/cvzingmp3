import classNames from 'classnames/bind';
import styles from './LoadMusic.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faHeart,
  faEllipsis,
  faShuffle,
  faForwardStep,
  faBackwardStep,
  faRepeat,
  faPlay,
  faMicrophone,
  faWindowRestore,
  faVolumeHigh,
  faPause,
  faSpinner,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { MV } from '~/assets/Icon/Icon';

const cx = classNames.bind(styles);

function LoadMusic() {
  return (
    <div className={cx('loadMusic')}>
      <div className={cx('loadMusic-content')}>
        <div className={cx('content-left')}>
          <div className={cx('left-img')}>
            <img className={cx('img-mus')} src="/imgmusic/ctcht.jpg" alt="Chúng Ta Của Hiện Tại" />
          </div>
          <div className={cx('left-name-music')}>
            <span>Chúng Ta Của Hiện Tại</span>
            <span className={cx('name-singer')}>Sơn Tùng M-TP</span>
          </div>
          <div className={cx('left-icon')}>
            <span>
              <FontAwesomeIcon className={cx('left-icon')} icon={faHeart} />
            </span>
            {/* <span>
              <FontAwesomeIcon icon={faEllipsis} />
            </span> */}
          </div>
        </div>
        <div className={cx('content-center')}>
          <div className={cx('center-top')}>
            <span className={cx('top-icon', 'shuffle')}>
              <FontAwesomeIcon icon={faShuffle} />
            </span>
            <span className={cx('top-icon')}>
              <FontAwesomeIcon icon={faBackwardStep} />
            </span>
            <span className={cx('top-icon', 'play')}>
              <FontAwesomeIcon className={cx('play-icon')} icon={faPlay} />
              {/* <FontAwesomeIcon className={cx('play-icon')} icon={faPause} />
              <FontAwesomeIcon className={cx('play-icon')} icon={faSpinner} /> */}
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
            <div className={cx('center-bottom-line')}>
              <div className={cx('line-run')}></div>
            </div>
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
          <span className={cx('icon-line')}></span>
          <span className={cx('right-icon')}>
            <FontAwesomeIcon icon={faHeadset} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoadMusic;