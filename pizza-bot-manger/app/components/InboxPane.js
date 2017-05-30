const React = require('react');

const InboxItem = require('./InboxItem.js');

module.exports = class InboxPane extends React.Component {
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
						<InboxItem />
					</tbody>
				</table>
			</div>
		)
	}
}