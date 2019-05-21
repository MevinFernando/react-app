import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // const {onReset,onIncrement,onDelete,counters} =this.props;
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id} //key prop is used by React internally hence it has to sent always
            counter={counter} //counter object has all attr of a counter
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
