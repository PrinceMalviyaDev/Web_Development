// useState() = Re-renders the component when the state value changes.

// useRef() = "Use reference" does not cause re-renders when its value changes.
//            When you want a component to "remember" some information,
//            but you don't want that information to trigger new renders.

//            1. Accessing/Interacting with DOM elements
//            2. Handling focus, animations, and transitions
//            3. Managing Timers and Intervals

import MyComponent from "./MyComponent"
import Stopwatch from "./Stopwatch"
import Timer from "./Timer"

function App() {

  return (
    <>
    {/* <MyComponent/> */}
    {/* <Stopwatch/> */}
    <Timer/>
    </>
  )
}

export default App;
