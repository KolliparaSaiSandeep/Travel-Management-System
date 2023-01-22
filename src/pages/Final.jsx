import React,{useState,useEffect} from "react";
import Axios from 'axios'
import '../App.css'
import {useNavigate} from 'react-router-dom';
function Addbuses(){
    const [fullname,setfullname]=useState('');
    const [age,setage]=useState('');
    const [phno,setphno]=useState('');
    const [gender,setgender]=useState('');
    const [cardno,setcardno]=useState('');
    const [passengerlist,setpassengerlist]=useState([]);
 

    useEffect(()=>{
      Axios.get('http://localhost:3001/passenger').then((response)=>{
        setpassengerlist(response.data)
        console.log("HI")
      })
    },[])
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      alert("Booking successful")
    }

    const submitReview=()=>{
        Axios.post("http://localhost:3001/passengeradd",{
            fullname:fullname,
            age:age,
            phno:phno ,
            gender:gender ,
            cardno:cardno,       
        }).then(()=>{
          setpassengerlist([...passengerlist,{ fullname:fullname,age:age,phno:phno ,gender:gender ,cardno:cardno,}])
        });
    };
    return (
        <div className="App">
         <h1><b>Passenger Details</b></h1>
         <div className='form'>
          <label>Fullname</label>
          <input type="text"
          name="fullname"
          onChange={(e)=>{
            setfullname(e.target.value)
          }}/>
          <label>Age:</label>
          <input
          type="text"
          name="age"
          onChange={(e)=>{setage(e.target.value);}}/>
          <h1>       </h1>
          <label>Phone number:</label>
          <input
          type="text"
          name="phno"
          onChange={(e)=>{setphno(e.target.value);}}/>
          <label>Card no:</label>
          <input
          type="text"
          name="cardno"
          onChange={(e)=>{setcardno(e.target.value);}}/>
          <h1>        </h1>
          <label>Gender:</label>
          <input
          type="text"
          name="gender"
          onChange={(e)=>{setgender(e.target.value);}}/>
          <h1>        </h1>
           <button  className= "justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={submitReview}>Add</button>
           <h1>              </h1>
           <button class= "justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={routeChange}>Ticket</button>
          {passengerlist.map((val)=>{
            return <table className="card">
            <tr>
              <td><b>Fullname:</b>{val.fullname}</td>
              <td><b>Age:</b>{val.age}</td>
              <td><b>Phone:</b>{val.phno}</td>
              <td><b>Cardno:</b>{val.cardno}</td>
              <td><b>Gender:</b>{val.gender}</td>
            </tr>
           
          </table>
          
          })}
        </div>
        </div>
  );
}
export default Addbuses;