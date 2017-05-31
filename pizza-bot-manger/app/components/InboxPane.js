const React = require('react');

const InboxItem = require('./InboxItem.js');

module.exports = class InboxPane extends React.Component {
	renderConvoSum(human) {		
		return <InboxItem 
			key={human} 
			index={human} 
			details={this.props.humans[human]}
			setSelectedConversation={this.props.setSelectedConversation}/>;
	}

	render() {

		return (
			<div className="inbox-pane">
				<h1>Inbox</h1>
				<table>
					<thead>
						<tr>
							<th>Chat Recieved</th>
							<th>Name</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{	
							Object.keys(this.props.humans).map(this.renderConvoSum.bind(this))
						}
					</tbody>
				</table>
			</div>
		)
	}
}