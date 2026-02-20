import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student.jsx';
import College from './College.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import ProfilePicture from './ProfilePicture.jsx';

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

  const fruits = [{id: 1, name: "apple", calories: 52}, 
                  {id: 2, name: "orange", calories: 47}, 
                  {id: 3, name: "banana", calories: 89}, 
                  {id: 4, name: "coconut", calories: 354}, 
                  {id: 5, name: "pineaple", calories: 50}];

  const vegetables = [{id: 6, name: "potatoes", calories: 110}, 
                      {id: 7, name: "celery", calories: 15}, 
                      {id: 8, name: "carrots", calories: 25}, 
                      {id: 9, name: "corn", calories: 63}, 
                      {id: 10, name: "broccoli", calories: 50}];
  
  return(
    <>
    <Header/>
    <UserGreeting isLoggedIn={false} username = "Prince"/>
    <Food/>
    <ProfilePicture/>
    {/* {
      (fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null)
    }
    {
      (vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null)
    } */}

    {
      (fruits.length > 0) && <List items={fruits} category="Fruits"/>    // Short-Circuiting
    }
    {
      (vegetables.length > 0) && <List items={vegetables} category="Vegetables"/>     // Short-Circuiting
    }
    
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