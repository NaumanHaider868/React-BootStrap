import './App.css';
// import {Navbar,Container} from 'react-bootstrap';
import Counter from './componets/Counter';
import Register from './componets/Register';
import UserList from './componets/UserList';
import Login from './componets/Login';
import _Navbar from './componets/_Navbar';
import _Sidebar from './componets/_Sidebar';

function App() {
  return (
    <div className="App">
        {/* <Navbar bg='dark' expand='sm' variant='dark'>
          <Container>
            <Navbar.Brand href='/' >React BootStrap</Navbar.Brand>
          </Container>
        </Navbar> */}
        {/* <Counter/> */}
        {/* <Register/> */}
        {/* <UserList/> */}
        {/* <Login/> */}
        <_Navbar/>
        <_Sidebar/>
    </div>
  );
}

export default App;
