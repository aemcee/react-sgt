import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
// import 'materialize-css/dist/css/materialize.min.css';

const NavLink = (props) => {

    const {color,text,to} = props;

    // console.log('text',text);

    return (
        <div className="row">
            <div className="col s12 right-align">
                <Link className={`btn ${color}`} to={to}>{text}</Link>
            </div>
        </div>
    )
}

NavLink.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

NavLink.defaultProps = {
    color: 'red'
}

export default NavLink;