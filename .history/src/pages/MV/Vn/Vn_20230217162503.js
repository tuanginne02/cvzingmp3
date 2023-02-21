import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    // faHeart,
    faEllipsis,
    faShuffle,
    faForwardStep,
    faBackwardStep,
    faRepeat,
    faPlay,
    faMicrophone,
    faWindowRestore,
    faVolumeHigh,
    faVolumeXmark,
    faPause,
    faSpinner,
    faHeadset,
  } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from '../MV.module.scss';

const cx = className.bind(style)

function MVVN( ) {
    return (
        <div className={cx('mvvn')}>
            <div className={cx('mvvn-container')}>
                <div className={cx('vn-header')}>
                    <div className={cx('header-filler')}>
                        <div className={cx('btn-all')}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}