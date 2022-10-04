import Cart from "./components/cart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Indoor from "./components/Indoor";
import Navbar from "./components/Navbar";
import Outdoor from "./components/Outdoor";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



function App() {



  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Home/>
          <div className="appcontent">
              <div className="appleft">
                        <div className="homeselect">
                          <div className="homeselectone line">

                          </div>
                          <div className="homeselecttwo">
                            <Link to="/"><button>Indoor</button></Link>
                          <Link to="/outdoor"><button>Outdoor</button></Link>
                              <button>Heavy Lifting</button>
                          </div>
                          <div className="homeselectthree line">
                              
                          </div>
                        </div>
                <Switch>
                    <Route exact path="/">
                        <Indoor/>                   
                    </Route>
                    <Route exact path="/outdoor">
                        <Outdoor/>
                    </Route>
                </Switch>
              </div>
              <div className="appright">
                  <Cart/>
              </div>
          </div>
        <Footer/>
        
    </div>
    </Router>
  );
}

export default App;
