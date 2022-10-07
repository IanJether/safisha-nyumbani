import { useEffect, useState } from "react";
import {
    collection,addDoc
 } from 'firebase/firestore'
import { db } from "../firebase/config";
import { random } from "./random";
import { Link } from "react-router-dom";





const useOutdoor = () => {


    const colRef = collection(db, `${random}`)


    const [hours,setHours] = useState('1 Hour');
    const [hourp,setHourp] = useState(0)

    useEffect(()=>{
        if(hours === '1 Hour'){
            setHourp(100)
        }else
        if(hours === '2 Hours'){
            setHourp(200)
        }else
        if(hours === '3 Hours'){
            setHourp(300)
        }else
        if(hours === '4 Hours'){
            setHourp(400)
        }else
        if(hours === '5 Hours'){
            setHourp(500)
        }else
        if(hours === '6 Hours'){
            setHourp(600)
        }else
        if(hours === '7 Hours'){
            setHourp(700)
        }else
        if(hours === '8 Hours'){
            setHourp(800)
        }else{
            console.log('Cant input this')
        }
    })

    const [gprice,setGprice] = useState (0);
    const [clprice,setCprice] = useState (0);
    const [Oprice,setOprice] = useState (0);
    const [wprice,setWprice] = useState (0);
    const [pprice,setPprice] = useState (0);

    const[butt,setButt] = useState('false');
    const[buttone,setButtone] = useState('false');
    const[buttwo,setButtwo] = useState('false');
    const[butthree,setButthree] = useState('false');
    const[buttfour,setButtfour] = useState('false');

    const handleButton = ()=>{
        if(butt === 'false'){
            document.querySelector(".odbutt").style.color = '#29b949';
            document.querySelector(".odbutt").style.border = '1px solid #29b949';
            document.querySelector(".odbutt").style.backgroundColor = 'rgb(240, 255, 244)';
            setButt('Gardening');
            setGprice(100);

        }else{
            setButt('false');
            setGprice(0);
            document.querySelector(".odbutt").style.color = '#0071a8';
            document.querySelector(".odbutt").style.border = '1px solid #0071a8';
            document.querySelector(".odbutt").style.backgroundColor = '#fff';
        }
    }
    const handleButtonone = ()=>{
         if(buttone === 'false'){
            document.querySelector(".odbuttone").style.color = '#29b949';
            document.querySelector(".odbuttone").style.border = '1px solid #29b949';
            document.querySelector(".odbuttone").style.backgroundColor = 'rgb(240, 255, 244)';
            setButtone('General Cleaning')
            setCprice(100)
         }else{
            setButtone('false');
            setCprice(0);
            document.querySelector(".odbuttone").style.color = '#0071a8';
            document.querySelector(".odbuttone").style.border = '1px solid #0071a8';
            document.querySelector(".odbuttone").style.backgroundColor = '#fff';
         }
    }
    const handleButtontwo = ()=>{
         if(buttwo === 'false'){
            document.querySelector(".odbuttwo").style.color = '#29b949';
            document.querySelector(".odbuttwo").style.border = '1px solid #29b949';
            document.querySelector(".odbuttwo").style.backgroundColor = 'rgb(240, 255, 244)';
            setButtwo('Outside Windows')
            setOprice(100);
         }else{
            setButtwo('false');
            setOprice(0);
            document.querySelector(".odbuttwo").style.color = '#0071a8';
            document.querySelector(".odbuttwo").style.border = '1px solid #0071a8';
            document.querySelector(".odbuttwo").style.backgroundColor = '#fff';
         }
    }
    const handleButtonthree = ()=>{
        if(butthree === 'false'){
            document.querySelector(".odbutthree").style.color = '#29b949';
            document.querySelector(".odbutthree").style.border = '1px solid #29b949';
            document.querySelector(".odbutthree").style.backgroundColor = 'rgb(240, 255, 244)';
            setButthree('Car Washing');
            setWprice(100);
         }else{
            setButthree('false');
            setWprice(0);
            document.querySelector(".odbutthree").style.color = '#0071a8';
            document.querySelector(".odbutthree").style.border = '1px solid #0071a8';
            document.querySelector(".odbutthree").style.backgroundColor = '#fff';
         }
    }
    const handleButtonfour = ()=>{
        if(buttfour === 'false'){
            document.querySelector(".odbuttfour").style.color = '#29b949';
            document.querySelector(".odbuttfour").style.border = '1px solid #29b949';
            document.querySelector(".odbuttfour").style.backgroundColor = 'rgb(240, 255, 244)';
            setButtfour('Pool Cleaning')
            setPprice(100);
         }else{
            setButtfour('false');
            setPprice(0)
            document.querySelector(".odbuttfour").style.color = '#0071a8';
            document.querySelector(".odbuttfour").style.border = '1px solid #0071a8';
            document.querySelector(".odbuttfour").style.backgroundColor = '#fff';
         }
    }


    
     


    return {
        hours,hourp,gprice,clprice,Oprice,wprice,pprice,
        renderoutdoor :( 
        <div className="outdoor">
            <div><p>Clean your garden,windows,pool and Car</p></div>
            <div className="howlong">
                <div><h3>How Long</h3></div>
                <div><p>Select enough hours for your sweepstar to complete all tasks</p></div>
                <div className="howlongselections">
                  
                   <select
                        name="bedrooms" 
                        value={hours}
                        onChange={(e) => {
                            setHours(e.target.value);
                            e.preventDefault();
                        }}
                        id="">
                            <option value="1 Hour">1 Hour</option>
                            <option value="2 Hours">2 Hours</option>
                            <option value="3 Hours">3 Hours</option>
                            <option value="4 Hours">4 Hours</option>
                            <option value="5 Hours">5 Hours</option>
                            <option value="6 Hours">6 Hours</option>
                            <option value="7 Hours">7 Hours</option>
                            <option value="8 Hours">8 Hours</option>
                        </select>
                </div>
            </div>
            <div className="odtasks">
                <div><h3>Select Tasks</h3></div>
                <div><p>What would you like your Sweepstar to do</p></div>
                <div className="odbuttons">
                    <div><button onClick={handleButton} className="odbutt"> Gardening </button></div>
                    <div><button onClick={handleButtonone} className="odbuttone"> General Cleaning</button></div>
                    <div><button onClick={handleButtontwo} className="odbuttwo"> Outside Windows</button></div>
                    <div><button onClick={handleButtonthree} className="odbutthree"> Car washing</button></div>
                    <div><button onClick={handleButtonfour} className="odbuttfour"> Pool Cleaning</button></div>
                </div>
                <div className="submitbutton">
                 
                </div>
            </div>
        </div>
     )};
}
 
export default useOutdoor;