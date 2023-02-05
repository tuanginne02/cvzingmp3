import className from 'classnames/bind';
import styles from './UserZing.module.scss';

const cx= className.bind(styles)


function UserZing () {
    return(
        <div className={cx('user-zing')}>
            <h1></h1>
        </div>
    )
}