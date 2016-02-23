import React from 'react';

export default class page404 extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>Error 404: page not found!</div>

        );
    }
}

module.exports = page404
