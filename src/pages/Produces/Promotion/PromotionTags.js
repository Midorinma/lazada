import Tippy from '@tippyjs/react/headless';
import { wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './PromotionTags.module.scss';

const cx = classNames.bind(styles);
function PromotionTags() {
    const [show, setShow] = useState(false);

    const handleOutSide = () => {
        setShow(false);
    };

    const renderResult = (attrs) => {
        return (
            <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('menu-popper')}>
                    <div className={cx('pdp-mod-multibuy-item')}>
                        <div className={cx('multibuy-item-header')}>
                            <div className={cx('multibuy-item-use-condition')}>
                                <div className={cx('condition')}>
                                    ✨ MỞ THẺ NHANH - NHẬN COMBO TRỊ GIÁ 2TR7 ✨
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className={cx('multibuy-item-footer')}>
                            <div className={cx('expiry-copy-block')}>
                                <span className={cx('expiry-date')}>
                                    🥰 Lazada Citi Platinum - Mở thẻ săn voucher
                                    độc quyền tại Lazada Hưởng trọn quà siêu hot
                                    trí giá 2tr700 đến từ Lazada Citi Platinum
                                    💟 Tặng ngay voucher 1tr5 💟 Miễn phí thường
                                    niên trị giá 700k 💟 Nhận ngay điểm thưởng
                                    tương đương 500k 👉 Xem ưu đãi tại đây:
                                    https://s.lazada.vn/s.dqU6b
                                </span>
                            </div>
                        </div>
                    </div>
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('module_promotion_tags')}>
            <div className={cx('pdp-mod-product-info-section')}>
                <h6 className={cx('section-title')}>Promotions</h6>
                <div className={cx('section-content')}>
                    <div className={cx('tag-list')}>
                        <Tippy
                            interactive
                            visible={show}
                            zIndex={0}
                            offset={[0, 4]}
                            placement="bottom-start"
                            hideOnClick={true}
                            appendTo={() => document.body}
                            render={renderResult}
                            onClickOutside={handleOutSide}
                        >
                            <div
                                className={cx('promotion-tag-item', {
                                    has_arrow: true,
                                })}
                                onClick={() => setShow(!show)}
                            >
                                <div className={cx('tag-name')}>
                                    🐋 Ưu đãi tháng 9 - Mua sắm cùng ZaloPay 💦
                                </div>
                            </div>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromotionTags;
