import React from 'react';

export class CounterActions extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
    return (
      <div>
      	<button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
        <button onClick={this.props.resetCounter}>Reset</button>
      </div>
    )
  }
}