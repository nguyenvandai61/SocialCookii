import './App.css';
import Admin from './components/Admin'
import HomePage from './components/Homepage/Homepage';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import EditPersonalInfo from './components/EditPersonalInfo/EditPersonalInfo';
import Headers from './components/Header/Header'
import DetailPost from './components/DetailPost/DetailPost';
import Friend from './components/Friend/Friend';
import AdditionalBtns from './components/AdditonalBtns/AdditionalBtns';
import AddPost from './components/AddPost/AddPost';
import Login from './components/Login/Login';
import Masonry from './components/Masonry/Masonry';
import Register from './components/Register/Register';
import UserManager from  './components/Admin/Users/UserManager';
import EditUser from './components/Admin/Users/EditUser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Headers />
            <Masonry />
            <AdditionalBtns />
          </Route>
          <Route path="/personalInfo">
            <Headers />
            <PersonalInfo />
            <AdditionalBtns />
          </Route>
          <Route path="/editPersonalInfo">
            <Headers />
            <EditPersonalInfo />
            <AdditionalBtns />
          </Route>
          <Route path="/addPost">
            <Headers />
            <AddPost />
            <AdditionalBtns />
          </Route>
          <Route path="/detailPost">  
            <Headers />
            <DetailPost />
            <AdditionalBtns />
          </Route>
          <Route path="/post/:id">  
            <Headers />
            <DetailPost />
            <AdditionalBtns />
          </Route>
          <Route path="/friends">
            <Headers />
            <Friend />
            <AdditionalBtns />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route path="/admin/user/edit">
            <EditUser />
          </Route>
          <Route path="/admin/user">
            <UserManager />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
