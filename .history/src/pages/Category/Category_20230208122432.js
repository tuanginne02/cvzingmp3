import React from 'react';
import className from 'classnames/bind';
import styles from './Category.module.scss';

const cx = className.bind(styles);

function Category() {
    return (
        <div className={cx('Category')}>
            <h1>Category</h1>
        </div>
    )
}
export default Category;