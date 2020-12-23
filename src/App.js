import './App.scss';
import {Route , Switch} from 'react-router-dom';
import Login from './components/auth/login/Login';
import Signup from './components/auth/signup/Signup';
import Home from './components/homepage/Home';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/' component={Login}/>
    <Route path='/Signup' component={Signup}/>
    <Route path='/Home' component={Home}/>
    </Switch>
    </div>
  );
}

export default App;
