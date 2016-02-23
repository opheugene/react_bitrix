import React from 'react';
import { marked } from 'react-marked';

class About extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {html: ''};
    }

    componentWillMount() {

        console.log(location);

        // ajax get
        $.get('/about/index.php', function (data) {
            this.setState({html: data});
        }.bind(this));

    }

    render() {
        return (

            <div dangerouslySetInnerHTML={{__html: this.state.html}} />

        );
    }
}

module.exports = About
