import React, { Component }  from 'react';
import '../../styling/layoutStyle.scss';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.pageTitle}</h1>
            </header>
        )
    }
}

// PropTypes
Header.propTypes = {
    pageTitle: PropTypes.any.isRequired
}

export default Header;