
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import './css/custom.css';

import {
  BrowserRouter as Router,
  Route,
  Switchnpcd
} from "react-router-dom";


function App() {
  return (

    <Router>
      <Header />
      <div className='d-flex height100'>
        <Sidebar />
        <div className='bodyContent'>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>


  );

}


export default App;
