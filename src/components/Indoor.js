import { useEffect, useState } from "react";
import {
     collection,addDoc,serverTimestamp,deleteDoc
  } from 'firebase/firestore'
import { db } from "../firebase/config";
import { random } from "./random";
import { Link } from "react-router-dom";




const useIndoor = () => {

  

    
    const colRef = collection(db, `${random}`)

    const [bed,setBed] = useState('Bedrooms');
    const [bath,setBath] = useState('Bathrooms');
    const [bedprice,setBedprice] = useState(0);  
    const [bednum,setBednum] = useState(0); 
    const [bathprice,setBathprice] = useState(0);  
    const [bathnum,setBathnum] = useState(0); 

   useEffect(()=>{

    if(bed === '1 Bedroom'){
        setBedprice(100)
        setBednum(1)
    }else if(bed === '2 Bedrooms'){
        setBedprice(150)
        setBednum(2)
    }
    else if(bed === '3 Bedrooms'){
        setBedprice(200)
        setBednum(3)
    }
    else if(bed === '4 Bedrooms'){
        setBedprice(250)
        setBednum(4)
    }
    else if(bed === '5 Bedrooms'){
        setBedprice(300)
        setBednum(5)
    }
    else if(bed === '6 Bedrooms'){
        setBedprice(350)
        setBednum(6)
    } else{
       setBed('0 Bedrooms')
       setBedprice(0)
       setBednum(0)
    }

   })
   useEffect(()=>{

    if(bath === '1 Bathroom'){
        setBathprice(100)
        setBathnum(1)
    }else if(bath === '2 Bathrooms'){
        setBathprice(150)
        setBathnum(2)
    }
    else if(bath === '3 Bathrooms'){
        setBathprice(200)
        setBathnum(3)
    }
    else if(bath === '4 Bathrooms'){
        setBathprice(250)
        setBathnum(4)
    }
    else if(bath === '5 Bathrooms'){
        setBathprice(300)
        setBathnum(5)
    }
    else if(bath === '6 Bathrooms'){
        setBathprice(350)
        setBathnum(6)
    } else{
        setBath('0 Bathrooms')
        setBathprice(0)
        setBathnum(0)
    }

   })

    const[lprice,setLprice] = useState(0);
    const[oprice,setOprice] = useState(0);
    const[cprice,setCprice] = useState(0);
    const[Wprice,setWprice] = useState(0);
    const[iprice,setIprice] = useState(0);


    const[butt,setButt] = useState('false');
    const[buttone,setButtone] = useState('false');
    const[buttwo,setButtwo] = useState('false');
    const[butthree,setButthree] = useState('false');
    const[buttfour,setButtfour] = useState('false');
    const handleButton = ()=>{
        if(butt === 'false'){
            document.querySelector(".butt").style.color = '#29b949';
            document.querySelector(".butt").style.border = '1px solid #29b949';
            document.querySelector(".butt").style.backgroundColor = 'rgb(240, 255, 244)';
            setButt('Laundry')
            setLprice(100)

        }else{
            setButt('false');
            setLprice(0)
            document.querySelector(".butt").style.color = '#0071a8';
            document.querySelector(".butt").style.border = '1px solid #0071a8';
            document.querySelector(".butt").style.backgroundColor = '#fff';
        }
    }
    const handleButtonone = ()=>{
         if(buttone === 'false'){
            document.querySelector(".buttone").style.color = '#29b949';
            document.querySelector(".buttone").style.border = '1px solid #29b949';
            document.querySelector(".buttone").style.backgroundColor = 'rgb(240, 255, 244)';
            setButtone('Oven')
            setOprice(100)
         }else{
            setButtone('false');
            setOprice(0)
            document.querySelector(".buttone").style.color = '#0071a8';
            document.querySelector(".buttone").style.border = '1px solid #0071a8';
            document.querySelector(".buttone").style.backgroundColor = '#fff';
         }
    }
    const handleButtontwo = ()=>{
         if(buttwo === 'false'){
            document.querySelector(".buttwo").style.color = '#29b949';
            document.querySelector(".buttwo").style.border = '1px solid #29b949';
            document.querySelector(".buttwo").style.backgroundColor = 'rgb(240, 255, 244)';
            setButtwo('Cabinets')
            setCprice(100)
         }else{
            setButtwo('false');
            setCprice(0)
            document.querySelector(".buttwo").style.color = '#0071a8';
            document.querySelector(".buttwo").style.border = '1px solid #0071a8';
            document.querySelector(".buttwo").style.backgroundColor = '#fff';
         }
    }
    const handleButtonthree = ()=>{
        if(butthree === 'false'){
            document.querySelector(".butthree").style.color = '#29b949';
            document.querySelector(".butthree").style.border = '1px solid #29b949';
            document.querySelector(".butthree").style.backgroundColor = 'rgb(240, 255, 244)';
            setButthree('Windows')
            setWprice(100)
         }else{
            setButthree('false');
            setWprice(0)
            document.querySelector(".butthree").style.color = '#0071a8';
            document.querySelector(".butthree").style.border = '1px solid #0071a8';
            document.querySelector(".butthree").style.backgroundColor = '#fff';
         }
    }
    const handleButtonfour = ()=>{
        if(buttfour === 'false'){
            document.querySelector(".buttfour").style.color = '#29b949';
            document.querySelector(".buttfour").style.border = '1px solid #29b949';
            document.querySelector(".buttfour").style.backgroundColor = 'rgb(240, 255, 244)';
            setButtfour('Interior Walls')
            setIprice(100)
         }else{
            setButtfour('false');
            setIprice(0)
            document.querySelector(".buttfour").style.color = '#0071a8';
            document.querySelector(".buttfour").style.border = '1px solid #0071a8';
            document.querySelector(".buttfour").style.backgroundColor = '#fff';
         }
    }
    


    return {
        bed,bedprice,bednum,bath,bathprice,bathnum,lprice,oprice,cprice,Wprice,iprice,
        renderindoor:( 
        <div className="Indoor">
            <div className="indoortoppart">
                <div><p>Book trusted, reliable home cleaners</p></div>
                <div className="indoorabout">
                    <h3>About Your Clean</h3>   
                </div>
                <div className="ioselects">
                <div className="ioselectone">
                        <label htmlFor="bedrooms">Number of Bedrooms</label> <br />
                        <select
                        name="bedrooms" 
                        value={bed}
                        onChange={(e) => {
                            setBed(e.target.value);
                            e.preventDefault();
                        }}
                        id="">
                            <option value="Bedrooms">Bedrooms</option>
                            <option value="1 Bedroom">1 Bedroom</option>
                            <option value="2 Bedrooms">2 Bedrooms</option>
                            <option value="3 Bedrooms">3 Bedrooms</option>
                            <option value="4 Bedrooms">4 Bedrooms</option>
                            <option value="5 Bedrooms">5 Bedrooms</option>
                            <option value="6 Bedrooms">6 Bedrooms</option>
                        </select>
                </div>
                <div className="ioselectone">
                        <label htmlFor="bathrooms">Number of Bathrooms</label> <br />
                        <select 
                        name="bathrooms" 
                        value={bath}
                        onChange={(e) => setBath(e.target.value)}
                        id="">
                            <option value="Bathrooms">Bathrooms</option>
                            <option value="1 Bathroom">1 Bathroom</option>
                            <option value="2 Bathrooms">2 Bathrooms</option>
                            <option value="3 Bathrooms">3 Bathrooms</option>
                            <option value="4 Bathrooms">4 Bathrooms</option>
                            <option value="5 Bathrooms">5 Bathrooms</option>
                            <option value="6 Bathrooms">6 Bathrooms</option>
                        </select>
                </div>
                </div>
                <div className="ioextras">
                    <div><h3>Extras</h3></div>
                    <div><p>select your extra tasks below</p></div>
                    <div className="extrabutton">
                       <div> <button className="butt" onClick={handleButton}>Laundry</button></div> 
                       <div> <button className="buttone" onClick={handleButtonone}>Oven</button></div> 
                       <div> <button className="buttwo" onClick={handleButtontwo}>Cabinets</button></div> 
                       <div> <button className="butthree" onClick={handleButtonthree}> Windows</button></div> 
                       <div> <button className="buttfour" onClick={handleButtonfour} id="lastwall">Interior Walls</button> </div> 
                    </div> 
                </div>
            </div>
            <div className="iosubmitbutton">

                <div><Link to="/outdoor"><button>GO TO OUTDOOR</button></Link></div>
            </div>
        </div>
     )};
}
 
export default useIndoor ;

