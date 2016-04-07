module.exports = React.createClass({
	getInitialState: function() {
		return {
			aa: ''
		}
	},
	click: function() {
		var _this = this;
		require.ensure(["./profile.js"], function(require) {
			console.log("aaa");
			var Aabc = require("./profile.js");
			_this.setState({
				aa: <Aabc />
			});
		}, 'test');
	},

	render() {
		return (
			<div>
                <h1 onClick={this.click}>Hello,boy!</h1>
                <World />
                <div>测试</div>
                <div>测试</div>
                <div>测试</div>
                <div>测试</div>
                <div>测试</div>
                <div>测试</div>
                <div>测试</div>
                
                <br />
                {this.state.aa}
            </div>
		)
	}
})