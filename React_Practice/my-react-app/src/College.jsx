
function College({colleges = ['SAIT', 'JIT']}){    // replacement of default props
    return (
        <div>
            {
                colleges.map((college, index)=>(
                    <p key={index}>{college}</p>
                ))
            }
        </div>
    );
}

export default College;