import './App.scss';
import {Route , Switch} from 'react-router-dom';
import Login from './components/auth/login/Login';
import Signup from './components/auth/signup/Signup';
import Navbar from './components/navBar/Navbar';

function App() {
  return (
    <div className="App">
    {/* <Switch>
    <Route exact path='/' component={Login}/>
    <Route path='/Signup' component={Signup}/>
    </Switch> */}
    <Navbar />
    </div>
  );
}

export default App;
