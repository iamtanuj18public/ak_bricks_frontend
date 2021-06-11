import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import './App.css';
import ContactUs from "./component/ContactUs";
import Dashboard from "./component/Dashboard";
import Footer from "./component/Footer";
import HomePage from "./component/HomePage";
import LoginPage from "./component/LoginPage";
import NavBar from './component/NavBar';
import PandS from "./component/PandS";
import Message from "./component/Message";
import Scrolltotop from "./component/Scrolltotop";
import { Provider } from "./Contextapi";
import Scroll from "./component/Scrolls";
import NotFound from "./component/NotFound";







function App() {
  return ( 
    <Provider> 
      <BrowserRouter>
       <Scrolltotop/>
          <NavBar/>
          <Scroll showBelow={250} />

          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/contact-us" component={ContactUs}/>
            <Route exact path="/pands" component={PandS}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/message/:id" component={Message}/>
            <Route>
           <NotFound />
           </Route>
        

          </Switch>
          <Footer/>
          </BrowserRouter>
    </Provider>
  );
}

export default App;
