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
        <div className={cx('cingchart')}
      </div>
    </div>
  );
}

export default Zingchart;
