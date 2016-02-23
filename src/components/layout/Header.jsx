import React from 'react';
import { Link } from 'react-router'

export default class Header extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
    }

    constructor(props) {
        //console.log('Header: constructor');

        super(props);
    }

    render() {

        return (

            <div id="header">
                Menu:&nbsp;&nbsp;
                <Link to="/">Home</Link>&nbsp;-&nbsp;
                <Link to="/catalog/">Catalog</Link>&nbsp;-&nbsp;
                <Link to="/about/">About</Link>
            </div>

        );

    }
}
