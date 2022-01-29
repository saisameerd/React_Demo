import { Component } from "react";
import "./index.css"

class Counter extends Component{
    state = {count:0}
    onIncrement = () => {
      this.setState((prevState) => ({count:prevState.count + 1}))
    }
    onDecrement = () => {
        this.setState((prevState) => ({count:prevState.count - 1}))
      }
    render (){
        const {count} = this.state;
        return (<div>
            <h2>Count</h2>
            <p>{count}</p>
            <button onClick={this.onIncrement}>Increase</button>
            <button onClick={this.onDecrement}>Decrease</button>
        </div>
        )
        
    }
}

export default Counter
