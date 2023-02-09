
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleRight,
  faChevronCircleLeft,
  faChevronRight,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCirclePlay } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);

function Zingchart() {
  return (
    <div className={cx('zingchart')}>
     <div className={cx('zingchart-conatiner')}>
      <div className={cx('zingchart-title')}>
        <h1>#zingchart</h1>
      </div>
      </div>
    </div>
  );
}

export default Zingchart;
