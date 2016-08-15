var React = require('react');
var ReactDOM = require('react-dom');

var ChildLifeCycle = React.createClass({
	componentDidMount: function(){
		alert("child componeent did mount");
	},
	render: function(){
		alert("child render");
		return <h2>Child</h2>
	},
	getInitialState: function(){
		alert("child got initial state");
		return {};
	},
	componentWillMount: function(){
		alert("child componeent will mount");
	}
});

var LifeCycle = React.createClass({
	componentDidMount: function(){
		alert("componeent did mount");
	},
	render: function(){
		alert("render");
		return <div><h1>Parent</h1><ChildLifeCycle /></div>
	},
	getInitialState: function(){
		alert("got initial state");
		return {};
	},
	componentWillMount: function(){
		alert("componeent will mount");
	}
});

ReactDOM.render(<LifeCycle />, document.getElementById('lifecycle'));