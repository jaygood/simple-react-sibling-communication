var ButtonGuy = React.createClass({
  render: function() {
    return <button onClick={this.props.onClick}>Increase Count</button>
  }
});
var CounterGuy = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },
  onClick() {
    this.setState({count: this.state.count + 1});
  },
  render: function() {
    return <div>{this.state.count}</div>;
  }
});

var Parent = React.createClass({
  onClick: function() {
    this.refs.counter.onClick();
  },
  render: function() {
    return <div>
      <CounterGuy ref="counter"/>
      <ButtonGuy onClick={this.onClick}/>
    </div>;
  }
});

React.render(
  <Parent />, document.getElementById('example')
);
