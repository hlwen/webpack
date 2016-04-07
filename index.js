import './index.less';
let React = require('react');
let ReactDOM = require('react-dom');


let World = React.createClass({
    render() {
        return (
            <span>World is beautiful!Yes...!</span>
        )
    }
});
let Hello = require('./app.js');

ReactDOM.render(<Hello />, document.getElementById("test"));