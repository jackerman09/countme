import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

class CountersDisplay extends React.Component {
  constructor () {
    super();
    this.state = {
      counter: {},
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log('incrementCounter')
    const current_count = this.state.count;
    const new_count = current_count + 1;
    console.log(this.state.count)
    this.setState({ count: new_count });
    console.log(this.state.count)
  }

  fetchCounter (id) {
    axios.get( `api/counters/${id}` )
        .then(response => {
          this.setState({
            counter:  response.data,
            count:    response.data.count
          });
          console.log('test')
          console.log(response.data)
        })
        .catch(error => {
          console.error(error);
        });
  }

  setCounterIdFromQueryString (qs) {
    this.qsParams = queryString.parse(qs);
    if (this.qsParams.counter) {
      // assign counter ID from the URL's query string
      this.counterId = Number(this.qsParams.counter);
    } else {
      this.counterId = 1;
      // update URL in browser to reflect current counter in query string
      this.props.history.push(`/?counter=${this.counterId}`);
    }
  }

  componentDidMount () {
    this.setCounterIdFromQueryString(this.props.location.search);
    this.fetchCounter(this.counterId);
  }

  componentWillReceiveProps (nextProps) {
    this.setCounterIdFromQueryString(nextProps.location.search);
    this.fetchCounter(this.counterId);
  }

  render () {
    return (
      <div>
        <p>{this.state.counter.name}</p>
        <p>{this.state.count}</p>

        <button onClick={this.handleClick} >Increment</button>
      </div>
    );
  }
}

export default CountersDisplay;