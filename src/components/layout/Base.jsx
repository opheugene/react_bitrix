import React from 'react';
import * as reactRouter from 'react-router';
var RouteHandler = reactRouter.RouteHandler;


import Header from './Header.jsx';
import Footer from './Footer.jsx';


class Base extends React.Component {

    static propTypes = {
        name: React.PropTypes.string
    }

    //static contextTypes: {
    //    router: React.PropTypes.func.isRequired
    //}

    constructor(props) {
        //console.log('Base: constructor');

        super(props);

        //console.log(React.PropTypes.object);
    }

    componentDidMount() {
        //console.log('Base: componentDidMount');
    }

    render() {
        return (
            <div>
                <Header />
                    <br />
                    {this.props.children}
                <Footer />
            </div>
        );
    }
}

module.exports = Base