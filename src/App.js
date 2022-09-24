// import './App.css';
import {Navbar,Container} from 'react-bootstrap';
import Counter from './componets/Counter';
import Register from './componets/Register';
import UserList from './componets/UserList';

function App() {
  return (
    <div className="App">
        <Navbar bg='dark' expand='sm' variant='dark'>
          <Container>
            <Navbar.Brand href='/' >React BootStrap</Navbar.Brand>
          </Container>
        </Navbar>
        {/* <Counter/> */}
        {/* <Register/> */}
        <UserList/>
    </div>
  );
}

export default App;
