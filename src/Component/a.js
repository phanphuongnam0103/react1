import React, {Component} from 'react';
import PropTypes from 'prop-types';

class a extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    
    }


    render() {
        console.log(this.props);
        return (
            <div>
                haha
            </div>
        );
    }
}

a.propTypes = {};

export default a;
