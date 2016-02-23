import React from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router';

class CatalogList extends React.Component {

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

    componentDidMount() {
        // ...
    }

    render() {
        return (

            <div className="catalog-list" dangerouslySetInnerHTML={{__html: this.state.html}} />

        );
    }
}

module.exports = CatalogList
