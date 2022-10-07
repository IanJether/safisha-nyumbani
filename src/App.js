import Cart from "./components/cart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Indoor from "./components/Indoor";
import Navbar from "./components/Navbar";
import Outdoor from "./components/Outdoor";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import useOutdoor from "./components/Outdoor";
import useIndoor from "./components/Indoor";



function App() {


 const {renderoutdoor, hours, hourp, gprice, clprice, Oprice, wprice, pprice} = useOutdoor()
 const {renderindoor, bed,bathnum, bedprice, bednum, bath, bathprice, lprice, oprice, cprice, Wprice, iprice} = useIndoor();
 

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
                            <button>Indoor</button>
                           <button>Outdoor</button>
                            
                          </div>
                          <div className="homeselectthree line">
                              
                          </div>
                        </div>
                <Switch>
                    <Route exact path="/">
                        {renderindoor}                  
                    </Route>
                    <Route exact path="/outdoor">
                        {renderoutdoor}
                    </Route>
                   
                </Switch>
              </div>
              <div className="appright">
                  <Cart  {...{ hours, hourp, bathnum, gprice, clprice, Oprice, wprice, pprice, bed, bedprice, bednum, bath, bathprice, lprice, oprice, cprice, Wprice, iprice}}/>
              </div>
          </div>
        <Footer/>
        
    </div>
    </Router>
  );
}

export default App;
