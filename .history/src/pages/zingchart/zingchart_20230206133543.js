
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faPlay
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './zingchart.module.scss';


const cx = classNames.bind(styles);

function Zingchart() {
  return (
    <div className={cx('zingchart')}>
     <div className={cx('zingchart-conatiner')}>
      <div className={cx('zingchart-title')}>
        <h1>#zingchart</h1>
        <FontAwesomeIcon icon={faPlay} />
      </div>
      </div>
    </div>
  );
}

export default Zingchart;
