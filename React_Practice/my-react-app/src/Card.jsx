import profPic from './assets/prof_pic.jpg';

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profPic} alt="profile picture"/>
            <h2 className="card-title">Prince Malviya</h2>
            <p className="card-text">I am a MERN Stack Developer</p>
        </div>
    );
}

export default Card;