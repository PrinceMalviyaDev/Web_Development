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

    return(
        <button className={styles.button}>Click me</button>
    );
}

export default Button;

// We will use "Modules" styling for this component

// We will create a new folder in we will have:
// Button.jsx
// Button.modules.css