import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles)

function DefaultLayout () {
    return(
        <div className={cx('warrper')}>
            <h1></h1>
        </div>
    )
}