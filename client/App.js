import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <h1>Hello world</h1>
        )
    }
}

Meteor.startup(() => {
    ReactDOM.render(<App />, document.getElementById('app'));
});
