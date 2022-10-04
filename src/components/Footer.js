

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footersosho">
                <div className="footerlogo">
                    <img src={require('./Pictures/Logo2.png')} alt="Logo" />
                </div>
                <div className="footerinstagram">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="footertop">
                <div className="footerone">
                    <div><p>CONTACT US</p></div>
                    <div><p>ABOUT US</p></div>
                    <div><p>BLOG</p></div>
                    <div><p>CAREERS</p></div>
                    <div><p>APPLY</p></div>
                </div>
                <div className="footertwo">
                    <div><p>HELP</p></div>
                    <div><p>LOCATION</p></div>
                    <div><p>PRIVACY POLICY</p></div>
                </div>
                <div className="footerthree">
                    <div><p>NEED HELP </p></div>
                    <div><span></span></div>
                </div>
            </div>
            <div className="footerbottom">
                <div className="footerlogos">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="footercopyright">
                   <p> 2022 safisha ltd, all rights reserved <span></span> </p>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;

