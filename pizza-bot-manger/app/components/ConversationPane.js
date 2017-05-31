const React = require('react');

const Message = require('./Message.js');

module.exports = class ConversationPane extends React.Component {
	renderMessage(val) {
        return <Message 
            who={val.who}
            text={val.text}
            key={val.time.getTime()} 
            />;
    }

    render() {
        return (
            <div className="conversation-pane">
                <h1>Conversation</h1>
                <h3>Select a conversation from the inbox</h3>
                <div className="messages">
                    {this.props.conversation.map(this.renderMessage)}
                </div>
          </div>
        )
    }
}
