import classNames from 'classnames/bind';
import styles from './Radio.module.scss';

const cx = classNames.bind(styles);

function Radio() {
  return (
    <div className={cx('radio')}>
     <div className={cx('radio-container')}></div></div>
    </div>
  );
}

export default Radio;
