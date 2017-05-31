const React = require('react');

module.exports = class InboxItem extends React.Component {
	 sortByDate (a, b) {
    	return a.time > b.time ? -1 : a.time < b.time ? 1 : 0;
  	}
  	
  	messageSummary(conversations) {
    	let lastMessage = conversations.sort(this.sortByDate)[0];
    	return lastMessage.who + ' said: "' + lastMessage.text + '" @ ' + lastMessage.time.toDateString();
  	}

  	setSelected() {
    	this.props.setSelectedConversation(this.props.index);
  	}

    render() {
        return (
            <tr>
	        	<td>
	          		<a onClick={this.setSelected.bind(this)}>
	            		{this.messageSummary(this.props.details.conversations)}
	          		</a>
	        	</td>
	        	<td>{this.props.index}</td>
	        	<td>{this.props.details.orders.sort(this.sortByDate)[0].status}</td>
	      </tr>
        )
    }
}