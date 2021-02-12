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
import { SongBook } from './pages/SongBook';

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
            <Route exact path="/SongBook" component={SongBook}/>
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
