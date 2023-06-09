import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path = '/' component ={LandingPage}/>
      <Route path ='/Home' component ={Home}/>      
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
