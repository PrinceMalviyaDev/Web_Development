
function Student(props){
    return(
        <div className="student">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// function Student({student}){
//     return(
//         <div className="student">
//             <p>Name : {student.name}</p>
//             <p>Age : {student.age}</p>
//             <p>Student : {student.isStudent ? "Yes" : "No"}</p>
//         </div>
//     );
// }

// function Student({name, age, isStudent}){
//     return(
//         <div className="student">
//             <p>Name : {name}</p>
//             <p>Age : {age}</p>
//             <p>Student : {isStudent ? "Yes" : "No"}</p>
//         </div>
//     );
// }

export default Student;