import {
    collection,addDoc,getDoc,doc,onSnapshot,serverTimestamp
 } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { db } from "../firebase/config";
import { random } from './random';





const Cart = ({hours, hourp, gprice, clprice, Oprice, wprice, pprice,bed,bathnum, bedprice, bednum, bath, bathprice, lprice, oprice, cprice, Wprice, iprice}) => {

    const date = new Date();
    const n = date.toDateString();

    const colRef = collection(db, 'Clients' )


   const [click,setClicked] = useState(false)
   const handleConfirm = () =>{
    if (click === false){
                console.log('iF STATEMENT RUNNING')
                addDoc(colRef , {
                    Bedrooms : bed,
                    Bedprice: bedprice,
                    Bednum: bednum,
                    Bathrooms: bath,
                    Bathprice: bathprice,
                    Bathnum: bathnum,
                    CreatedAt: serverTimestamp(),
                    Lprice : lprice,
                    Oprice : oprice,
                    Cprice : cprice,
                    Wprice : Wprice,
                    Iprice : iprice,
                    Outdoor: hours,
                    outdoorprice: hourp,
                    Gardening: gprice,
                    GeneralCleaning: clprice,
                    OutsideWindows: Oprice,
                    CarWashing: wprice,
                    PoolCleaning: pprice
    
                })
                .then(()=>{
                    console.log('Bedrooms added to firebase');
                    window.location.reload();
                })
                setClicked(true)
            }else{
              console.log('Cant be clicked anymore')
            }
     
   }


    return ( 
        <div className="cart">
           <div className="cart-top">
                <div className="date">
                    <p>Date : <span className='daten'> {n} </span></p>
                </div>
                <p className='rooms'>Rooms</p>
                <div className="fbdisplay">
                        <div className="cartdp">
                            <div className="roomsdis">
                                <div className='rootone root'>
                                    <div><p>{bednum} Bedrooms</p></div>
                                    <div><p>{bedprice}</p></div>
                                </div>
                                <div className='rootone root'>
                                    <div><p>{bathnum} Bathrooms</p></div>
                                    <div><p>{bathprice}</p></div>
                                </div>
                            </div>
                            <div className="extrasdis">
                               <div id='extrap'> <p>Extras</p></div>
                                <div className='rootone root'>
                                    <div><p>Laundry</p></div>
                                    <div><p>{lprice}</p></div>
                                </div>
                                <div className='rootone extraspace root'>
                                    <div><p>Oven</p></div>
                                    <div><p>{oprice}</p></div>
                                </div>
                                <div className='rootone extraspace root'>
                                    <div><p>Cabinets</p></div>
                                    <div><p> {cprice}</p></div>
                                </div>
                                <div className='rootone extraspace root'>
                                    <div><p>Windows</p></div>
                                    <div> <p> {Wprice}</p></div>
                                </div>
                                <div className='rootone extraspace root'>
                                    <div><p>Interior Walls</p></div>
                                    <div> <p> {iprice}</p></div>
                                </div>
                            </div>
                            <div className="outdoordis">
                                <div id='extrapp'><p>Outdoor</p></div>
                                <div><p>{hours}</p></div>
                                <div className="gardening extraspace root">
                                    <div><p>Gardening</p></div>
                                    <div><p>{gprice}</p></div>
                                </div>
                                <div className="gcleaning extraspace root">
                                    <div><p>General Cleaning</p></div>
                                    <div><p>{clprice}</p></div>
                                </div>
                                <div className="oswindows extraspace root">
                                    <div><p>Outside Cleaning</p></div>
                                    <div><p>{Oprice}</p></div>
                                </div>
                                <div className="Car washing extraspace root">
                                    <div><p>Car Washing</p></div>
                                    <div><p>{wprice}</p></div>
                                </div>
                                <div className="Pool Cleaning extraspace root">
                                    <div><p>Pool Cleaning</p></div>
                                    <div><p>{pprice}</p></div>
                                </div>
                            </div>
                            <div className="servicedis root">
                                <div className="pricedis">
                                    <p className='rooms'>Total price</p>
                                </div>
                                <div className="totalpricedis daten">
                                <p>  Ksh : {hourp + bedprice + bathprice + lprice + oprice + cprice + Wprice + iprice + gprice + clprice + Oprice + wprice + pprice}  </p>
                                </div>
                                
                            </div>
                        </div>
                    
                </div>
            </div>
            <div className="cartbutton">
                <button onClick={handleConfirm}>Confirm</button>
            </div>
        </div>
     );
}
 
export default Cart;