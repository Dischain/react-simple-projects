const React = require('react');

const Store = require('./Store.js');

module.exports = class StorePane extends React.Component {
    renderStore(store) {
    	return 
	    	<Store
	    		key={store}
	    		index={store} 
	    		details={this.props.stores[store]} 
	    	/>;
  	}

  	render() {
	    return (
	      <div className="stores-pane">
	        <h1>Stores & Ovens</h1>
	        <ul>
	          	{Object.keys(this.props.stores).map(this.renderStore.bind(this))}
	        </ul>
	      </div>
	    )
  	}
}