// React hook = Special function that allows functional components to use React features without writing class components {React 16.8+}
//              (useState, useEffect, useContext, useReducer, useCallback, and more...)

// useState() = A React hook that allows the creation of a stateful variable 
//              AND a setter function to update its value in the virtual DOM.

//              [name, setName] = useState(initialValue)

//              name = stateful variable (can be any data type)
//              setName = setter function to update the value of name in the virtual DOM
//              initialValue = the initial value of name (can be any data type)  

import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import OnChange from "./OnChange.jsx";
import ObjectUpdate from "./ObjectUpdate.jsx";
import ArrayUpdate from "./ArrayUpdate.jsx";

function App() {

  return (
    <>
      <ArrayUpdate/>
      <ObjectUpdate/>
      <MyComponent/>
      <Counter/>
      <OnChange/>
    </>
  )
}

export default App
