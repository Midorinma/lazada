import useBreadcrumbs from 'use-react-router-breadcrumbs';

import classNames from 'classnames/bind';
import styles from './Breadcrumbs.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const userNamesById = { 1: 'John' };
export const DynamicUserBreadcrumb = ({ match }) => {
    <span>{userNamesById[match.params.userId]}</span>;
};
const routesBreadcrumbs = [
    {
        path: `/users/:userId`,
        breadcrumb: DynamicUserBreadcrumb,
    },
];

function Breadcrumbs() {
    const breadcrumbs = useBreadcrumbs(routesBreadcrumbs);
    let i = 1;
    return (
        <div className={cx('wrapper')}>
            {breadcrumbs.map(({ match, breadcrumb }) => (
                <NavLink
                    key={match.pathname}
                    to={match.pathname}
                    style={
                        i < breadcrumbs.length
                            ? i++ && { color: '#1a9cb7' }
                            : {}
                    }
                    className={cx(`breadcrumb`)}
                >
                    {breadcrumb}
                </NavLink>
            ))}
        </div>
    );
}
export default Breadcrumbs;
