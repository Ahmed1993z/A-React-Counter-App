import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps , prevState){
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
          //ajax call and new data from the server  
        }   
    }

    componentWillUnmount(){
        console.log('Counter - Unmounted');
    }

    render() { 
         console.log('Counter - Rendered');
    return (
        <div>
            <span className={  this.getBadgeClasses()}>{this.formatCount()}
            </span>

            <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment
            </button> 

            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                Delete
            </button>
        </div>
        );
    }

    //the dynamic background of the span
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    //The dynamic content of the span 
    formatCount(){
        const { value  } = this.props.counter ;
        return value === 0 ? 'zero' : value ;
    }


}
 
export default Counter;