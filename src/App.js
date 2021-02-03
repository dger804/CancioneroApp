import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Navigation} from './components/Navigation'
import { BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Home } from './pages/Home.js'
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Register" component={Register}/>
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
