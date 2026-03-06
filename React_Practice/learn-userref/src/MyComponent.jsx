import {useEffect, useRef} from 'react';

function MyComponent(){

    // let [number, setNumber] = useState(0);

    // const ref = useRef("Pizza"); // useRef() returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

    // console.log(ref); // {current: 'Pizza'} - This is the ref object with a current property that holds the value "Pizza".

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    //console.log(inputRef); // {current: null} - This is the ref object with a current property that is initially set to null.

    useEffect(() => {
        console.log("Component Rendered")
        console.log(inputRef1);
    }); // This useEffect will run after every render of the component, logging "Component Rendered" to the console each time.

    function handleClick1() {
        // ref.current++;
        // inputRef.current = inputRef.current + 1;
        // console.log(inputRef.current); // This will log the current value of inputRef.current to the console, which is initially null and can be updated based on user interactions or other logic in the component.

        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";

        inputRef2.current.style.backgroundColor = "white";
        inputRef3.current.style.backgroundColor = "white";
    } 

    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";

        inputRef1.current.style.backgroundColor = "white";
        inputRef3.current.style.backgroundColor = "white";
    } 

    function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";

        inputRef1.current.style.backgroundColor = "white";
        inputRef2.current.style.backgroundColor = "white";
    } 

    return(
        <>
            <button onClick={handleClick1}>
                Click me 1!
            </button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>
                Click me 2!
            </button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>
                Click me 3!
            </button>
            <input ref={inputRef3}/>
        </>
    );
}

export default MyComponent;