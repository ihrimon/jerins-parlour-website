import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './Pages/Navigation/Navigation';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
// import NotFound from './Pages/NotFound/NotFound';
import NotFound from './Pages/NotFound/NotFound';
import Admin from './Pages/Admin/Admin';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
