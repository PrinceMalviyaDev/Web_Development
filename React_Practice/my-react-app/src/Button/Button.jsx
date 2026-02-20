import styles from './Button.module.css';

function Button(){

    // Inline styling

    // const styles = {
    //     backgroundColor: "hsl(200, 100%, 50%)",
    //     color: "white",
    //     padding: "10px 20px",
    //     borderRadius: "5px",
    //     border: "none",
    //     cursor: "pointer",
    //     display: "block"
    // }

    // return(
    //     <button style={styles}>Click me</button>
    // );

    // const handleClick = () => console.log("Ouch!");

    // let count = 0;

    // const handleClick = (name) => {
    //     if (count < 3){
    //         count++;
    //         console.log(`Ouch! ${name} has clicked the button ${count} times.`);
    //     } else {
    //         console.log(`Ouch! ${name} has clicked the button too many times!`);
    //     }
    // }

    const handleClick = (e) => e.target.textContent = "Ouch!";

    return(
        <button onDoubleClick = {(e) => handleClick(e)} className={styles.button}>Click me</button>
    );
}

export default Button;

// We will use "Modules" styling for this component

// We will create a new folder in we will have:
// Button.jsx
// Button.modules.css