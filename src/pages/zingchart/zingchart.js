import classNames from 'classnames/bind';
import styles from './zingchart.module.scss';

const cx = classNames.bind(styles);

function Zingchart() {
  return (
    <div className={cx('zingchart')}>
      <h1>Zingchart</h1>
    </div>
  );
}

export default Zingchart;
