var React = require('react');
var ReactDOM = require('react-dom');

var Goodbye = React.createClass({
	render: function(){
		return (
			<div>
				<h2>Farewell</h2>
				<p>Y'all come back now!</p>
			</div>
		);
	}

});

var Hello = React.createClass({
	render: function(){
		return (
			<div>
				<h2>Greetings</h2>
				<p>Hello beautiful humans and nonsentient bots!</p>
				<Goodbye />
			</div>
		);
	}
});

ReactDOM.render(<Hello />, document.getElementById('hello'));