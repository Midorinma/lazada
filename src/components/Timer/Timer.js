import classNames from 'classnames/bind';
import styles from './Timer.module.scss';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

const Timer = () => {
    const [hours, setHours] = useState(5);
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(59);

    useEffect(() => {
        const runTimer = setInterval(() => {
            if (seconds > 0) {
                setSeconds((prev) => prev - 1);
            }
            if (seconds === 0) {
                setMinutes((prev) => prev - 1);
                setSeconds(59);
                if (minutes === 0) {
                    setHours((prev) => prev - 1);
                    setMinutes(59);
                    setSeconds(59);
                    if (hours === 0) {
                        setHours(3);
                        setMinutes(59);
                        setSeconds(59);
                        window.location.reload();
                    }
                }
            }
        }, 1000);
        return () => {
            clearInterval(runTimer);
        };
    });
    return (
        <div
            className={cx('card-fs-content-header-left-timer', {
                pull_left: true,
            })}
        >
            <div
                className={cx('fs-timer-text', {
                    pull_left: true,
                })}
            >
                Ending in
            </div>
            <div
                className={cx('fs-timer-count', {
                    pull_left: true,
                })}
            >
                {hours < 10 ? '0' + hours : hours}
            </div>
            <div
                className={cx('fs-timer-colon', {
                    pull_left: true,
                })}
            >
                :
            </div>
            <div
                className={cx('fs-timer-count', {
                    pull_left: true,
                })}
            >
                {minutes < 10 ? '0' + minutes : minutes}
            </div>
            <div
                className={cx('fs-timer-colon', {
                    pull_left: true,
                })}
            >
                :
            </div>
            <div
                className={cx('fs-timer-count', {
                    pull_left: true,
                })}
            >
                {seconds < 10 ? '0' + seconds : seconds}
            </div>
        </div>
    );
};

export default Timer;
