import config from '~/config';

//Pages
import Cart from '~/pages/Cart';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Produces from '~/pages/Produces';
import User from '~/pages/User';
import Shipping from '~/pages/Shipping';
import Order from '~/pages/Order';
import Search from '~/pages/Search';

import LayoutOnly from '~/Layout/LayoutOnly';
import LayoutShipping from '~/Layout/LayoutShipping';
//Public routes
const publicRoutes = [
    { path: config.routes.cart, component: Cart, layout: LayoutOnly },
    { path: config.routes.search, component: Search, layout: LayoutOnly },
    { path: config.routes.home, component: Home },
    {
        path: config.routes.shipping,
        component: Shipping,
        layout: LayoutShipping,
    },
    { path: config.routes.login, component: Login, layout: LayoutOnly },
    { path: config.routes.signup, component: Signup, layout: LayoutOnly },
    {
        path: config.routes.produce,
        component: Produces,
        layout: LayoutOnly,
    },
    { path: config.routes.user, component: User, layout: LayoutOnly },
    { path: config.routes.order, component: Order, layout: LayoutOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
