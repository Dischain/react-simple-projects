const React = require('react');


module.exports = class Message extends React.Component {
    render() {
        return (
            <p>{this.props.who} said: "{this.props.text}"</p>
        )
    }
}