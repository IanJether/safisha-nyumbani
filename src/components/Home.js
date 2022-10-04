import { Link } from 'react-router-dom';



const Home = () => {
    return ( 
        <div className="Home">
            <div className="hometop">
                
                <div className="inputdiv">
                    <div><h2>Let us take care of your home</h2></div>
                    <div ><h3>So you can enjoy doing the things you love</h3></div>
                    <div className="inputbar">
                        <button className="whichserv"> Which service are you looking for ? </button>
                        <button className="books">BOOK A SERVICE</button>
                    </div>
                    <div className="hometoph3" ><h4>4.7/5 avg. Customer Rating</h4></div>
                    {/* <div><span></span> <p>Over 300 Reviews</p> </div> */}
                </div>

            </div>
            {/* <div className="homeselect">
                <div className="homeselectone line">

                </div>
                <div className="homeselecttwo">
                   <Link to="/indoor"><button>Indoor</button></Link>
                <Link to="/outdoor"><button>Outdoor</button></Link>
                    <button>Heavy Lifting</button>
                </div>
                <div className="homeselectthree line">
                    
                </div>
            </div> */}
        </div>
     );
}
 
export default Home;