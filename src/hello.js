var React = require('react');
var ReactDOM = require('react-dom');

var exercises = ['Building Components', 
	'Passing Data to Components',
	'Adding State to Components',
	'Passing State From Parent to Child Components',
	'A Short Exercise on Lifecycle Methods',
];

var Exercises = React.createClass({

	render: function(){
		var exerciseList = this.props.list.map(function(item){
			return <li>{item}</li>
		});
		return (
			<div>
				<h2>{ this.props.title }</h2>
					<ol>{ exerciseList }</ol>
			</div>
		);
	}

});

var Hello = React.createClass({
	render: function(){
		return (
			<div>
				<h2>{ this.props.title }</h2>
				<p>Hello React!</p> 
				<p>Getting ready to start on exercise #{ this.props.part }.</p>
				<Exercises title="Exercises" list={exercises} />
			</div>
		);
	}
});

ReactDOM.render(<Hello title="React Example" part={2}/>, document.getElementById('hello'));