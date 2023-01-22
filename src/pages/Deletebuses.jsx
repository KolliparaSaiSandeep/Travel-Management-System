import React,{useState,useEffect} from "react";
import Axios from 'axios'
import '../App.css'
import {useNavigate} from 'react-router-dom';
function Deletebuses(){
    const [Busno,setBusno]=useState('');
    const [Source,setSource]=useState('');
    const [Destination,setDestination]=useState('');
    const [Travelsid,setTravelsid]=useState('');
    const [Seats,setSeats]=useState('');
    const[Price,setPrice]=useState('');
    const [Arrivaltime,setArrivaltime]=useState('');
    const [Buslist,setBuslist]=useState([]);
    const [Date,setDate]=useState('');

    useEffect(()=>{
      Axios.get('http://localhost:3001/Delete').then((response)=>{
        setBuslist(response.data)
        console.log(response.data)
        console.log("HI")
      })
    },[])


    const submitReview=()=>{
        Axios.post("http://localhost:3001/Deletebuses",{
            Busno:Busno,
        }).then(()=>{
          console.log("here")
          setBuslist([{Busno:Busno,Source:Source,Destination:Destination,Travelsid:Travelsid,Price:Price,Seats:Seats,Arrivaltime:Arrivaltime,Date:Date}])
        });
    };
    return (
        <div className="App">
         <h1><b>Delete Bus</b></h1>
         <div className='form'>
          <label>Busno</label>
          <input type="text"
          name="Busno"
          onChange={(e)=>{
            setBusno(e.target.value)
          }}/>
          
          <h1>          </h1>
          <button  className= "justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={submitReview}>Delete Bus</button>
          
          {Buslist.map((val)=>{
            return <table className="card">
            <tr>
              <td><b>Busno:</b>{val.bus_no}</td>
              <td><b>Source:</b>{val.from_station}</td>
              <td><b>Destination:</b>{val.destination}</td>
              <td><b>ArrivalTime:</b>{val.arrival_time}</td>
              <td><b>Seats:</b>{val.seats}</td>
              <td><b>Price:</b>{val.price}</td>
              <td><b>TravelsId:</b>{val.travels_id}</td>
              <td><b>Date:</b>{val.Date}</td>
            </tr>
          </table>
          })}
        </div>
        </div>
  );
}
export default Deletebuses;