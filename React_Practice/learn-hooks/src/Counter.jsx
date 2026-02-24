// updater function = updater function is a function that allows you to update the state based on the previous state. 
//                    It is useful when you want to safely update the state based on the current state, 
//                    such as incrementing or decrementing a counter.
//                   The updater function takes the previous state as an argument and returns the new state.
//                   The syntax for using the updater function with useState is as follows:

// const [state, setState] = useState(initialState);
// setState(prevState => {
//     // calculate new state based on prevState
//     return newState;
// });

//                   Allow for safe updates to state when the new state depends on the previous state, preventing potential issues with stale state values in asynchronous updates or event handlers.

import React, {useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {

        // Uses the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update.
        // React batches together state updates for performance reasons.
        // NEXT state becomes the CURRENT state after an update.

        // setCount(count + 1);  // 0 + 1
        // setCount(count + 1);  // 0 + 1
        // setCount(count + 1);  // 0 + 1

        // UPDATE   =  1

// ---------------------------------------------------------

        // Using the updater function to ensure that each update is based on the most recent state value, even when multiple updates are queued.

        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line).
        // During the next render, it will call them in same order.

        setCount(prevCount => prevCount + 1);  // 0 + 1
        setCount(prevCount => prevCount + 1);  // 1 + 1
        setCount(prevCount => prevCount + 1);  // 2 + 1

        // UPDATE   =  3
    }

    const decrement = () => {
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <>
        <div className = "counter-container">
            <p className = "count-display">{count}</p>
            <button className = "counter-button" onClick={decrement}>Decrement</button>
            <button className = "counter-button" onClick={reset}>Reset</button>
            <button className = "counter-button" onClick={increment}>Increment</button>
        </div>
        </>
    )
}

export default Counter;