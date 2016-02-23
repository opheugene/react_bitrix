import React from 'react';
import { marked } from 'react-marked';

class Home extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {html: ''};
    }

    componentWillMount() {

        var url = "/pages" + location.pathname + location.search;

        // ajax get
        $.get(url, function (data) {
            this.setState({html: data});
        }.bind(this));

    }

    render() {
        return (

            <div dangerouslySetInnerHTML={{__html: this.state.html}} />

        );
    }
}

module.exports = Home
