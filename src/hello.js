var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
	render: function(){
		return (
			<div>
				<h2>{ this.props.title }</h2>
				<p><b>React.js</b> is a popular Front End framework. Companies like Facebook, Netflix, Flipboard, and Khan Academy are using it to power blazing-fast web apps that make interacting with users faster than ever before.</p> 
				<p>This full-day workshop will introduce you to the basic concepts you need to understand to work with <b>React.js</b>.</p> 
			</div>
		);
	}
});

ReactDOM.render(<Hello title="React Example" />, document.getElementById('hello'));