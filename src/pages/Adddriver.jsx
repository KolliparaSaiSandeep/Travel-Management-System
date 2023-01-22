import React,{useState,useEffect} from "react";
import Axios from 'axios'
import '../App.css'
import {useNavigate} from 'react-router-dom';
function Addbuses(){
    const [drivername,setdrivername]=useState('');
    const [driverage,setdriverage]=useState('');
    const [driverexperience,setdriverexperience]=useState('');
    const [driverbloodgroup,setdriverbloodgroup]=useState('');
    const [bus_no,setbus_no]=useState('');
    const [Buslist,setBuslist]=useState([]);
    

    useEffect(()=>{
      Axios.get('http://localhost:3001/Adddriversq').then((response)=>{
        setBuslist(response.data)
        console.log("HI")
      })
    },[])


    const submitReview=()=>{
        Axios.post("http://localhost:3001/Adddriver",{
            bus_no:bus_no,
            drivername:drivername,
            driverage:driverage,
            driverexperience:driverexperience,
            driverbloodgroup:driverbloodgroup,
            
        }).then(()=>{
          setBuslist([...Buslist,{bus_no:bus_no,drivername:drivername,driverage:driverage,driverexperience:driverexperience,driverbloodgroup:driverbloodgroup}])
        });
    };
    return (
        <div className="App">
         <h1><b>Add BusDriver</b></h1>
         <div className='form'>
          <label>Busno</label>
          <input type="text"
          name="bus_no"
          onChange={(e)=>{
            setbus_no(e.target.value)
          }}/>
          <label>Driver name:</label>
          <input
          type="text"
          name="drivername"
          onChange={(e)=>{setdrivername(e.target.value);}}/>
          <h1>       </h1>
          <label>Driver age:</label>
          <input
          type="text"
          name="driverage"
          onChange={(e)=>{setdriverage(e.target.value);}}/>
          <label>Driver experience:</label>
          <input
          type="text"
          name="driverexperience"
          onChange={(e)=>{setdriverexperience(e.target.value);}}/>
          <h1>        </h1>
          <label>Driver Bloodgroup:</label>
          <input
          type="text"
          name="driverbloodgroup"
          onChange={(e)=>{setdriverbloodgroup(e.target.value);}}/>
          <h1>            </h1>
          <button  className= "justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={submitReview}>Add Bus Driver</button>
          
          {Buslist.map((val)=>{
            return <table className="card">
            <tr>
              <td><b>Busno:</b>{val.bus_no}</td>
              <td><b>Driver name:</b>{val.drivername}</td>
              <td><b>Driver age:</b>{val.driverage}</td>
              <td><b>Driver Experience:</b>{val.driverexperience}</td>
              <td><b>Driver Bloodgroup:</b>{val.driverbloodgroup}</td>
            </tr>
          </table>
          })}
        </div>
        </div>
  );
}
export default Addbuses;