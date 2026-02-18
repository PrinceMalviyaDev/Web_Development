import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student.jsx';
import College from './College.jsx';
import UserGreeting from './UserGreeting.jsx';

// HOW TO STYLE REACT COMPONENTS WITH CSS
// --------------------------------------
// (not including external frameworks or preprocessors)

// 1. EXTERNAL
// 2. MODULES
// 3. INLINE

// props = Read-only data that is passed from a parent component to a child component. 
//         It allows components to be reusable and dynamic by providing them with different data. 
//         Props are immutable, meaning that they cannot be changed by the child component. 
//         But they can be used to render dynamic content based on the values passed from the parent component.
//         <Component key = value />

function App() {
  // let student = {
  //   name:"Tinku",
  //   age:22,
  //   isStudent:false
  // }

  let colleges = ['IIT', 'IIM', 'MIT', 'NIT'];
  
  return(
    <>
    <Header/>
    <UserGreeting isLoggedIn={false} username = "Prince"/>
    <Food/>
    <Student name="Prince" age={22} isStudent={true}/>    
    <Student name="Srishti" age={19} isStudent={true}/>   
    {/* <Student student={student}/>   */}
    <Card/>
    <Button/>
    <Footer/>
    <College colleges={colleges}/>
    </>
  );
}

export default App;