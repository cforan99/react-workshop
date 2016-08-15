var React = require('react');
var ReactDOM = require('react-dom');

var styles = {
	open: { 
		display: 'block'
	},
	closed: { 
		display: 'none' 
	}
};

var exercises = ['Building Components', 
	'Passing Data to Components',
	'Adding State to Components',
	'Passing State From Parent to Child Components',
	'Adding Inline Styles to React Components',
	'A Short Exercise on Lifecycle Methods',
];

var DropdownMenu = React.createClass({
	getInitialState: function() {
		return { open: false };
	},
	// Toggle DropdownMenu's open/closed state 
	toggleMenu: function() {
		this.setState({ open: !this.state.open });
	},
	render: function() {
		var exerciseList = this.props.list.map(function(item){
			return <li>{item}</li>
		});
		return (
			<div className='dropdown-wrapper' onClick={ this.toggleMenu }>
				<button className={ this.state.open ? 'btn btn-success' : 'btn btn-info' }>
					{ this.props.title }
				</button>
				<ul style={ this.state.open ? styles.open : styles.closed }>
					{exerciseList}
				</ul>
			</div>
		);
	}
});

ReactDOM.render(<DropdownMenu title="Exercises" list={exercises}/>, document.getElementById('dropdown-menu'))