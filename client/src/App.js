// import Errors from './Pages/Errors'
import {Route, Switch} from "react-router";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import './App.css';
import ContactList from './Components/ContactList';
import { addContact } from './Redux/actions/actionsContact';
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path="/(add_contact|edit_contact)" component={addContact} />
        {/* <Route  path="/*" component={Errors}/> */}
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;