import logo from './Pictures/Logo.png';

const Navbar = () => {
    return ( 
        <div className="navbar">
          <div className="navleft">
               <div className="navlogo">
                    <img src={require('./Pictures/Logo2.png')} alt="Logo" />
               </div>
          </div>
          <div className="navright">
               <div className="navnum">
                    <p>+254112516877</p>
               </div>
               <div className="navserv">
                    <p>SERVICES</p>
               </div>
               <div className="navhelp">
                    <p>HELP</p>
               </div>
               <div className="navbook">
                    <button>BOOK A SERVICE</button>
               </div>
          </div>
        </div>
     );
}
 
export default Navbar;
