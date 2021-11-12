import React from 'react'

function Count(props) {
    return (
        <div className="counter">
            <br />
            Count: {props.count}
            <br /><br />
            <button onClick={props.increment}>Increment</button>
            &nbsp;&nbsp;
            <button onClick={props.decrement}>Decrement</button>
        </div>
    )
}

export default Count
