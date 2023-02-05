import classNames from 'classnames/bind';
import styles from './.module.scss';

const cx = classNames.bind(styles);

function () {
  return (
    <div className={cx('')}>
      <h1></h1>
    </div>
  );
}

export default ;
