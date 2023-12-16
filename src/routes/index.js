import config from '~/config';

//Pages
import Cart from '~/pages/Cart';
import Endow from '~/pages/Endow';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Seller from '~/pages/Seller';
import Signup from '~/pages/Signup';
import Produces from '~/pages/Produces';
import User from '~/pages/User';
import LazMall from '~/pages/LazMall';
import Vouchers from '~/pages/Vouchers';
import TopUp from '~/pages/TopUp';
import LazGlobal from '~/pages/LazGlobal';
import LayoutOnly from '~/Layout/LayoutOnly';
import Search from '~/pages/Search';

//Public routes
const publicRoutes = [
    { path: config.routes.cart, component: Cart },
    { path: config.routes.endow, component: Endow },
    { path: config.routes.home, component: Home },
    { path: config.routes.seller, component: Seller, layout: null },
    { path: config.routes.login, component: Login, layout: LayoutOnly },
    { path: config.routes.signup, component: Signup, layout: LayoutOnly },
    {
        path: config.routes.produce,
        component: Produces,
        layout: LayoutOnly,
    },
    { path: config.routes.user, component: User, layout: LayoutOnly },
    { path: config.routes.lazMall, component: LazMall, layout: null },
    { path: config.routes.vouchers, component: Vouchers, layout: null },
    { path: config.routes.topUp, component: TopUp, layout: null },
    { path: config.routes.lazGlobal, component: LazGlobal, layout: null },
    { path: config.routes.search, component: Search },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
