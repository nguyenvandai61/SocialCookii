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
import searchUser from './components/SearchUser/SearchUser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import SearchUser from './components/SearchUser/SearchUser';
import Layout from './components/Layout/Layout';
let children = {
  "/": Masonry,
  "/searchUser/q=:searchValue": SearchUser,
  "/personalInfo": PersonalInfo,
  "/editPersonalInfo": EditPersonalInfo,
  "/addPost": AddPost,
  "/post/:id": DetailPost,
  "/friends": Friend,
}
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {
            Object.entries(children).map((child) => {
              const key = child[0], children = child[1];
              if (key == "/") {
                return <Route exact path={key}>
                  <Layout children={children} />
                </Route>
              }
              return (
                <Route path={key}>
                  <Layout children={children} />
                </Route>
              )
            })
          }
        </Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Router>

    </div>
  );
}

export default App;
