const React = require('react');
const ReactDOM = require('react-dom');

const InboxPane = require('./components/InboxPane.js');
const ConversationPane = require('./components/ConversationPane.js');
const StorePane = require('./components/StorePane.js');

const samples = require('./sample-data.js');

class App extends React.Component {
    getInitialState() {
        return {
            "humans": {},
            "stores": {},
            "selectedConversation": []
        };
    }

    loadSampleData() {
        console.log('loading data...')
        this.setState(samples);
        this.setState({selectedConversation: samples.humans["Rami Sayar"].conversations});
    }

    setSelectedConversation (human_index){
        this.setState({
            selectedConversation: this.state.humans[human_index].conversations
        })
    }

    render() {
        return (
            <div>
                <div id="header"></div>
                <button onClick={this.loadSampleData.bind(this)}>Load Sample Data</button>
                <div className="container">
                    <div className="column">
                        <InboxPane 
                            humans={this.state ? this.state.humans : []} 
                            setSelectedConversation={this.setSelectedConversation.bind(this)}/>
                    </div>
                    <div className="column">
                        <ConversationPane
                            conversation = {this.state ? this.state.selectedConversation : []}
                        />
                    </div>
                    <div className="column">
                        <StorePane
                            stores={this.state ? this.state.stores : []}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('main'));