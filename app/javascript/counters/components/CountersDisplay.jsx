import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

class CountersDisplay extends React.Component {
  constructor () {
    super();
    this.state = {
      counter: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
        counter: {
            ...prevState.counter,
            count: prevState.counter.count + 1
        }
    }));
    const counter = this.state.counter;
    console.log(counter)
    axios.put(`api/counters/${counter.id}`, {counter})
      .then(response => {
        console.log(response);
      })
  }

  fetchCounter (id) {
    axios.get( `api/counters/${id}` )
      .then(response => {
        this.setState({
          counter:  response.data
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
        <p>{this.state.counter.count}</p>

        <button onClick={this.handleClick} >Increment</button>
      </div>
    );
  }
}

export default CountersDisplay;