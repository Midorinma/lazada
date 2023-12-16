import { forwardRef } from 'react';

export const SearchIcon = forwardRef(
    ({ width = '2rem', height = '2rem', className }, ref) => {
        return (
            <div>
                <svg
                    className={className}
                    width={width}
                    height={height}
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    ref={ref}
                >
                    <defs>
                        <style />
                    </defs>
                    <path
                        d="M695.467 622.933h-38.4l-12.8-12.8c46.933-55.466 76.8-128 76.8-204.8 0-174.933-140.8-315.733-315.734-315.733s-320 136.533-320 311.467S226.133 716.8 401.067 716.8c76.8 0 149.333-29.867 204.8-76.8l12.8 12.8v38.4l243.2 243.2 72.533-72.533-238.933-238.934zm-294.4 0c-119.467 0-217.6-98.133-217.6-217.6s98.133-217.6 217.6-217.6 217.6 98.134 217.6 217.6c4.266 119.467-93.867 217.6-217.6 217.6z"
                        fill="#FFF"
                    />
                </svg>
            </div>
        );
    },
);

export const gitIcon = forwardRef(
    ({ width = '32px', height = '32px', className }, ref) => {
        return (
            <div>
                <svg
                    height={height}
                    width={width}
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    fill="currentColor"
                    data-view-component="true"
                    className={className}
                    ref={ref}
                >
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
            </div>
        );
    },
);

export const heartIcon = forwardRef(
    ({ width = '24px', height = '24px', className }, ref) => {
        return (
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={className}
                    height={height}
                    width={width}
                    viewBox="0 0 512 512"
                    ref={ref}
                    version="1.1"
                    fill="currentColor"
                >
                    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                </svg>
            </div>
        );
    },
);

export const cart = {
    lazMall: require('~/components/icons/lazMall.png'),
    voucher: require('~/components/icons/voucher.png'),
    topUp: require('~/components/icons/topUp.png'),
    lazGlobal: require('~/components/icons/lazGlobal.png'),
    iconLaz: require('~/components/icons/iconLaz.png'),
    appStore: require('~/components/icons/appStore.jpg'),
    googlePlay: require('~/components/icons/googlePlay.jpg'),
    appGalery: require('~/components/icons/appGalery.png'),
    visa: require('~/components/icons/visa.jpg'),
    mystery: require('~/components/icons/mystery.jpg'),
    jcb: require('~/components/icons/jcb.jpg'),
    delivery: require('~/components/icons/cashondelivery.jpg'),
    napas: require('~/components/icons/napas.jpg'),
    pig: require('~/components/icons/pig.jpg'),
    zaloPay: require('~/components/icons/zalo.png'),
    momo: require('~/components/icons/momo.png'),
    logistics: require('~/components/icons/lazada_logistic.png'),
    ghn: require('~/components/icons/GHNexpress.png'),
    ninjaVan: require('~/components/icons/ninjaVan.png'),
    ship60: require('~/components/icons/ship60.png'),
    bestInc: require('~/components/icons/bestExpress.png'),
    ahamove: require('~/components/icons/ahamove.png'),
    jt: require('~/components/icons/j&tExpress.png'),
    dds: require('~/components/icons/pciDss.png'),
    finger: require('~/components/icons/fingerprints.png'),
    bsi: require('~/components/icons/bsi.png'),
    ddk: require('~/components/icons/ddk.png'),
    dtb: require('~/components/icons/dtb.png'),
    country_lao: require('~/components/icons/lao.jpg'),
    country_usa: require('~/components/icons/usa.jpg'),
    country_cap: require('~/components/icons/cap.jpg'),
    country_china: require('~/components/icons/china.jpg'),
    country_thailand: require('~/components/icons/thailan.jpg'),
    country_vietnam: require('~/components/icons/vietnam.jpg'),
    facebook: require('~/components/icons/facebook.png'),
    gmail: require('~/components/icons/logo-gmail.png'),
    shield: require('~/components/icons/Screenshot_1.png'),
};
