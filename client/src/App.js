import './App.css';
import HomePage from './components/Homepage/Homepage';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import EditPersonalInfo from './components/EditPersonalInfo/EditPersonalInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DetailPost from './components/DetailPost/DetailPost';
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
          <Route path="/editPersonalInfo">
            <EditPersonalInfo />
          </Route>
          <Route path="/detailPost">
            <DetailPost/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
