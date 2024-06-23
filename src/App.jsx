import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'

function App() {
  return(
    <>
        <Header/>
        <Card/>
        <Card/>
        <Student name={"Allu"} age={32} isStudent={false}/>
        <Student name={"Baigan"} age={78} isStudent={true}/>
        <Student/>
        <UserGreeting isLoggedin = {false} userName = {"BroCode"}/>
        <UserGreeting isLoggedin = {true} userName = {"CodeRode"}/>
        <Footer/>
    </>
  );
};

export default App
