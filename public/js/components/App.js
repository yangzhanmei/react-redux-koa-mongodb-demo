import React from 'react';

export default class App extends React.Component {
    componentWillMount() {
        this.props.showTest();
    }

    render() {
        return <div>
            {this.props.data}
        </div>;
    }
}