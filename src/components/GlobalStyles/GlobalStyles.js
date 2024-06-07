import PropTypes from 'prop-types';
import './GlobalStyles.scss';
//import React from 'react';

function GlobalStyles({ children }) {
    //chỉ chấp nhận duy nhất một children được truyền vào
    //return React.Children.only(children);
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobalStyles;
