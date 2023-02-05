import classNames from 'classnames/bind';
import styles from './Radio.module.scss';

const cx = classNames.bind(styles);

function Radio() {
  return (
    <div
      className={cx('radio')}
      style={{
        backgroundImage: 'url(/img/bgr-colone.jfif)',
        opacity: '5',
      }}
    >
      <h1>Radio  aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
    </div>
  );
}

export default Radio;
