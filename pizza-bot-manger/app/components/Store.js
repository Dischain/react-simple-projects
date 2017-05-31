const React = require('react');

module.exports = class Store extends React.Component {
    getCount(status) {
        return this.props.details.orders.filter(function(n){ 
            return n.status === status
        }).length;
    }

    render() {
        return (
            <li>
                <p>{this.props.index}</p>
                <p>Orders Confirmed: {this.getCount("Confirmed").bind(this)}</p>
                <p>Orders In The Oven: {this.getCount("In The Oven").bind(this)}</p>
                <p>Orders Delivered: {this.getCount("Delivered").bind(this)}</p>
            </li>
        );
    }
}
