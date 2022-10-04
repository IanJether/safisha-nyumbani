import {
    collection,addDoc,getDoc,doc,onSnapshot
 } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { db } from "../firebase/config";
import { random } from './random';





const Cart = () => {

    const date = new Date();
    const n = date.toDateString();
    const [datas,setData] = useState([]);


    const colRef = collection(db, `${random}` )

   useEffect(()=>{
    onSnapshot(colRef, (snapshot) => {
        let services = []
        snapshot.docs.forEach((doc) => {
            services.push({...doc.data(),id: doc.id})
        })
        setData(services)
      })
   },[])

   const handleConfirm = () =>{

        alert('Your Service Order has been confirmed, Kindly allow for 30 minutes for arrival of personnel')

        window.location.reload();


   }


    return ( 
        <div className="cart">
           <div className="cart-top">
                <div className="date">
                    <p>Date : <span className='daten'> {n} </span></p>
                </div>
                <p className='rooms'>Rooms</p>
                <div className="fbdisplay">
                {datas.map((items) => 
                        <div id={items.id} className="cartdp">
                            <div className="roomsdis">
                                <div className='rootone root'>
                                    <div>{items.Bedrooms}</div>
                                    <div>{items.Bedprice}/=</div>
                                </div>
                                <div className='rootone root'>
                                    <div>{items.Bathrooms}</div>
                                    <div>{items.Bathprice}/=</div>
                                </div>
                            </div>
                            <div className="extrasdis">
                               <div id='extrap'> <p>Extras</p></div>
                                <div className='rootone root'>
                                    <div><p>Laundry</p></div>
                                    <div><p>{items.Lprice}/=</p></div>
                                </div>
                                <div className='rootone root'>
                                    <div><p>Oven</p></div>
                                    <div><p>{items.Oprice}/=</p></div>
                                </div>
                                <div className='rootone root'>
                                    <div><p>Cabinets</p></div>
                                    <div><p> {items.Cprice}/= </p></div>
                                </div>
                                <div className='rootone root'>
                                    <div><p>Windows</p></div>
                                    <div> <p> {items.Wprice}/= </p></div>
                                </div>
                                <div className='rootone root'>
                                    <div><p>Interior Walls</p></div>
                                    <div> <p> {items.Iprice}/= </p></div>
                                </div>
                               
                            </div>
                            <div className="servicedis root">
                            <div className="pricedis">
                                <p className='rooms'>Total price</p>
                            </div>
                            <div className="totalpricedis daten">
                               <p>  Ksh : {items.Bathprice + items.Bedprice + items.Cprice + items.Iprice + items.Lprice + items.Oprice + items.Wprice} /= </p>
                            </div>
                                
                            </div>
                        </div>
                    )} 
                </div>
            </div>
            <div className="cartbutton">
                <button onClick={handleConfirm}>Confirm</button>
            </div>
        </div>
     );
}
 
export default Cart;