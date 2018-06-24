import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import { CounterDisplay } from './_counter_display.jsx';
import { CounterActions } from './_counter_actions.jsx';
import { Counters } from './Counters.jsx'

class Counter extends React.Component {
  constructor () {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      counter: {}
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  incrementCounter (){
    this.setState((prevState) => ({
        counter: {
            ...prevState.counter,
            count: prevState.counter.count + 1
        }
    }), () => {
      // setState callback
      const counter = this.state.counter;
      axios.post(`api/counters/${counter.id}/increment`, {counter})
        .then(response => {
          console.log(response);
        })
    });
  }

  decrementCounter (){
    this.setState((prevState) => ({
        counter: {
            ...prevState.counter,
            count: prevState.counter.count - 1
        }
    }), () => {
      // setState callback
      const counter = this.state.counter;
      axios.post(`api/counters/${counter.id}/decrement`, {counter})
        .then(response => {
          console.log(response);
        })
    });
  }

  resetCounter (){
    this.setState((prevState) => ({
        counter: {
            ...prevState.counter,
            count: 0
        }
    }), () => {
      // setState callback
      const counter = this.state.counter;
      axios.post(`api/counters/${counter.id}/reset`, {counter})
        .then(response => {
          console.log(response);
        })
    });
  }

  fetchCounter (id) {
    axios.get( `api/counters/${id}` )
      .then(response => {
        this.setState({
          isLoaded: true,
          counter:  response.data
        });
        console.log(response.data)
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
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

  render () {
    const { error, isLoaded, counter } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <CounterDisplay name={counter.name} current_count={counter.count} />
          <CounterActions incrementCounter={this.incrementCounter} decrementCounter={this.decrementCounter} resetCounter={this.resetCounter} />
        </div>
      );
    }
  }
}

export default Counter;