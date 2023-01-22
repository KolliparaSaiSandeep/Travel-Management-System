import React,{useState,useEffect} from "react";
import Axios from 'axios'
import '../App.css'
import { useNavigate } from 'react-router-dom';


function User(){
    const [Busno,setBusno]=useState('');
    const [buslist,setbuslist]=useState([]);
    const [noofseats,setnoofseats]=useState('');
    const [travelslist,settravelslist]=useState([]);

    useEffect(()=>{
      Axios.get('http://localhost:3001/apians').then((response)=>{
        console.log("use")
        console.log(response.data)
        setbuslist(response.data)
        console.log(setbuslist)
      })
    },[])
    useEffect(()=>{
      Axios.get('http://localhost:3001/checks').then((response)=>{
        settravelslist(response.data)
      })
    },[])
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      navigate("/Final");
    }

    const submitReview=()=>{
        Axios.post("http://localhost:3001/Userhi").then(()=>{
          console.log("HI")
        });
    };
    const check=()=>{
      Axios.post("http://localhost:3001/check",{
        bus_no:Busno,
        noofseats:noofseats
      }).then(()=>{
        alert("checking")
      });
  };

    return (
        <div className="App">
         <h1><b>Buses</b></h1>
         <div className='form'>
         <button class= "justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={submitReview}>
         View
         </button>
         <h1>           </h1>
         <label>Busno</label>
          <input type="text"
          name="Busno"
          onChange={(e)=>{
            setBusno(e.target.value)
          }}/>
          <h1>      </h1>
          <label>No of seats</label>
          <input type="text"
          name="noofseats"
          onChange={(e)=>{
            setnoofseats(e.target.value)
          }}/>
          <h1>       </h1>
          <button class= "justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={check}>
          Book
         </button>

         {buslist.map((val)=>{
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
        <h1><b> Yours selected bus</b></h1>
        {travelslist.map((val)=>{
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
              <td><button class= "justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={routeChange}>Proceed to Payment</button>
          </td>
          </tr>
          </table>})}
          
        </div>
        </div>
  );
}
export default User;
