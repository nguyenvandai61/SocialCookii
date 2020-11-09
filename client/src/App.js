import './App.css';
import HomePage from './components/Homepage/Homepage';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">  
            <HomePage/>
          </Route>
          <Route path="/personalInfo">
            <PersonalInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
