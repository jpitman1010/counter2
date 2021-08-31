import React, { Component } from 'react';


class Counter extends Component {
    state = {
        value: this.props.value,
        tags: []
    };

    renderTags() {
        
        if (this.state.tags.length === 0) return "There are no tags!";
        
        return  <ul>
        { this.state.tags.map(tag => <li key={ tag }>{ tag }</li>) }
    </ul>
    }

    handleIncrement = () => {
        this.setState({ value: this.state.count + 1 });
    }


    render() { 
        console.log(this.props)

        return (
        <React.Fragment> 
            <br/>
            {/* { this.state.tags.length === 0 && "Please create new tag!   " } */}
            <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
            <button onClick={() => this.handleIncrement()} className="btn btn-secondary btn-sm">Increment</button>
            <br/>
            <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
        </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }



    formatCount() {
        const  { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;