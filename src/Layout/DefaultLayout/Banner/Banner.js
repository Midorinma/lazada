import classNames from 'classnames/bind';
import styles from './HeaderLink.module.scss';
import images from '~/assets/images/images';
import { Link } from 'react-router-dom';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button/Button';
import { useRef } from 'react';

const cx = classNames.bind(styles);

const Banner = ({ className }) => {
    const showRef = useRef();

    const handleOnHide = () => {
        // Access the element using myElementRef.current
        const myElement = showRef.current;

        // Change the style of the element
        myElement.style.display = 'none';
    };
    const classes = cx('header-banner', { [className]: className });
    return (
        <div className={classes} ref={showRef}>
            <Link to={config.routes.qc}>
                <img src={images.bannerQC} alt="sale" />
            </Link>
            <Button className={cx('btn-close')} onClick={handleOnHide}>
                <FontAwesomeIcon icon={faClose} className={cx('icon-close')} />
            </Button>
        </div>
    );
};

export default Banner;
