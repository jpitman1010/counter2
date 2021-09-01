import React, { Component } from 'react';

//creating a single source of truth is necessary in order to have 1 reset
//button that allows all counters to be reset to 0.  Must remove local state
//and use props to and raises events whenever data needs to be changed.
//it receives all data through the parent props.  So delete local state and 
//change all references to that local state
//this is referred to as a controlled component
class Counter extends Component {

    render() { 
        return (
        <div> 
            {/* { this.state.tags.length === 0 && "Please create new tag!   " } */}
            <span className={this.getBadgeClasses()}>
                { this.formatCount() }
            </span>
            <button onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm" >
                Increment
            </button>
            <button onClick={() => {this.props.onDelete(this.props.counter.id)}} 
            className="btn btn-danger btn-sm m-2">
                Delete
            </button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }



    formatCount() {
        const  { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;