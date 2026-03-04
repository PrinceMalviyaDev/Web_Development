// useEffect(function, [dependencies]);

import {useEffect, useState} from 'react';

function Component(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    // function handleResize(){
    //     setWidth(window.innerWidth);
    //     setHeight(window.innerHeight);
    // }

    useEffect(() => {
        
        function handleResize(){
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} * ${height}`;
    }, [width, height]);

    return (
        <>
        <p>Window Width: {width}</p>
        <p>Window Height: {height}</p>
        </>
    )
}

export default Component;