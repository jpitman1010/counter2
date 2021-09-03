import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('previous props', prevProps);
        console.log('previous state', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            //can make an Ajax call and get new data from server.
        }
    };

    componentWillUnmount() {
        console.log('Counter - Unmount');
        //when you delete the counter, this message will appear because the state
        //has now changed.
    };

    render() { 
        console.log('Counter - Rendered')
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