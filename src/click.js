var React = require('react');
var ReactDOM = require('react-dom');

var ClickCounterCaption = React.createClass({
	render: function(){
		return(
			<div className="alert alert-info">
				You have earned { this.props.points } points!
			</div>
		);
	}
});

var ClickCounter = React.createClass({
	handleBtnClick: function(){ 
		this.setState({clicks: this.state.clicks+5});
	},
	getInitialState: function(){
		return {clicks: this.props.val};
	},
	render: function(){
		var isEven = this.state.clicks % 2 === 0;
		return(
			<div>
				<div className="alert alert-success">
					{ isEven ? "That's a nice round number!" : "That's really odd!" }
				</div>
				<button className="btn btn-primary" onClick={ this.handleBtnClick }>
					{ this.props.text } &nbsp; 
					<span className="badge">
						{this.state.clicks}
					</span>
				</button>
				<ClickCounterCaption points={this.state.clicks} />
			</div>
		);
	}
});

ReactDOM.render(
	<ClickCounter text="Points" val={0}/>, 
	document.getElementById('click-counter')
);