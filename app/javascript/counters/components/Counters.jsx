import React from 'react';
import axios from 'axios';
import { CounterListItem } from './_counter_list_item.jsx';

export class Counters extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    	counters: [],
    	counterList: ""
    }
  }

  fetchCounters () {
    axios.get( `api/counters` )
      .then(response => {
        this.setState(() => ({
          counters:  response.data
        }), () => {
	        console.log(response.data)
			  })
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount () {
    this.fetchCounters();
  }

  render () {
  	const counterList = this.state.counters.map((counter) =>
    	<CounterListItem key={counter.id} id={counter.id} name={counter.name} count={counter.count} />
    );
    return (
      <div>
      	<h3>All Counters</h3>
        <ul>
        	{counterList}
        </ul>
      </div>
    );
  }
}