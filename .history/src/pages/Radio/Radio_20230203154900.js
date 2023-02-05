import classNames from 'classnames/bind';
import styles from './Radio.module.scss';

const cx = classNames.bind(styles);

function Radio() {
  return (
    <div className={cx('radio')} style={{ 
      backgroundImage: "url("
    }} >
      <h1>Radio</h1>
    </div>
  );
}

export default Radio;
