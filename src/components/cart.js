import {
    collection,addDoc,getDoc,doc,onSnapshot,serverTimestamp
 } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { db } from "../firebase/config";
import { random } from './random';






const Cart = ({buttt,butttone,butttwo,buttthree,butttfour,butt, buttone, buttwo, butthree, buttfour,hours, hourp, gprice, clprice, Oprice, wprice, pprice,bed,bathnum, bedprice, bednum, bath, bathprice, lprice, oprice, cprice, Wprice, iprice}) => {

    const date = new Date();
    const n = date.toDateString();

    const colRef = collection(db, 'Clients' );
    const history = useHistory();


   const [click,setClicked] = useState(false)
   const handleConfirm = () =>{
    alert('Your service order has been placed, Please allow 30 minutes for arrival of personell');
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
                    history.push('/');
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
                                    <div><p>{bed}&nbsp;&nbsp;&nbsp; {bath} </p></div>
                                </div>
                            </div>
                            <div className="extrasdis">
                               <div id='extrap'> <p>Extras</p></div>
                                <div className='rootone root'>
                                    <div><p>{butt}&nbsp;&nbsp;&nbsp;{buttone}&nbsp;&nbsp;&nbsp;{buttwo}&nbsp;&nbsp;&nbsp;{butthree}&nbsp;&nbsp;&nbsp;{buttfour}</p></div>
                                </div>
                            </div>
                            <div className="outdoordis">
                                <div id='extrapp'><p>Outdoor</p></div>
                                <div><p>{hours}</p></div>
                                <div className="gardening extraspace root">
                                    <div><p>{buttt}&nbsp;&nbsp;&nbsp;{butttone}&nbsp;&nbsp;&nbsp;{butttwo}&nbsp;&nbsp;&nbsp;{buttthree}&nbsp;&nbsp;&nbsp;{butttfour}</p></div>
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