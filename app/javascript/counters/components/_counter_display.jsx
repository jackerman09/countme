import React from 'react';

export class CounterDisplay extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
    return (
      <div>
      	<p>{this.props.name}</p>
        <p>{this.props.current_count}</p>
      </div>
    )
  }
}