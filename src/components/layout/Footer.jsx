import React from 'react';

export default class Footer extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        //console.log('Footer: constructor');

        super(props);
    }

    render() {
        return (

            <div id="footer"></div>

        );
    }
}
