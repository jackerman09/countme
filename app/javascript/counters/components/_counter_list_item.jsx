import React from 'react';

export class CounterListItem extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
    return (
      <li key={this.props.id}>
        {this.props.name}: {this.props.count}
      </li>
    )
  }
}