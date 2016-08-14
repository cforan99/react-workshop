var React = require('react');
var ReactDOM = require('react-dom');

var ClickCounter = React.createClass({
	render: function(){
		return(
			<button className="btn btn-primary">
				{ this.props.text }
			</button>
		);
	}
});

ReactDOM.render(
	<ClickCounter text="Clicks" />, 
	document.getElementById('click-counter')
);