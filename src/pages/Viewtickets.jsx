import React,{useState,useEffect} from "react";
import Axios from 'axios'
import '../App.css'
import { useNavigate } from 'react-router-dom';
function App(){
    const [travels_name,settravels_name]=useState('');
    const [travels_id,settravels_id]=useState('');
    const [travelslist,settravelslist]=useState([]);

    useEffect(()=>{
      Axios.get('http://localhost:3001/api/get').then((response)=>{
        console.log("use")
        settravelslist(response.data)
      })
    },[])

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    navigate("/Addbuses");
  }
  const routeChangeone = () =>{ 
    navigate("/Deletebuses");
  }
  const routeChangetwo = () =>{ 
    navigate("/Adddriver");
  }
    const submitReview=()=>{
        Axios.post("http://localhost:3001/Viewtickets",{
            travels_name:travels_name,
            travels_id:travels_id
            
        }).then(()=>{
          settravelslist([...travelslist,{Travelsname:travels_name,Travelsid:travels_id}])
        });
    };
    return (
        <div className="App">
         <h1><b>Add travels</b></h1>
         <div className='form'>
          <label>travels name:</label>
          <input type="text"
          name="travels_name"
          onChange={(e)=>{
            settravels_name(e.target.value)
          }}/>
          <label>travels_id</label>
          <input
          type="text"
          name="travels_id"
          onChange={(e)=>{settravels_id(e.target.value);}}/>
          <h1>      </h1>
          <button  className= "justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={submitReview}>Submit</button>
          <h1>       </h1>
          <button class= "justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={routeChange}>
            ADD BUSES
          </button>
          <h1>       </h1>
          <button class= "justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={routeChangeone}>
            DELETE BUSES
          </button>
          <h1>        </h1>
          <button class= "justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={routeChangetwo}>
            Add Driver
          </button>
          {travelslist.map((val)=>{
            return <table>
            <tr>
              <td><b>Travels name:</b>{val.travels_name}</td>
              <td><b>Travels id:</b>{val.travels_id}</td>
            </tr>
          </table>
          })}
        </div>
        </div>
  );
}
export default App;
