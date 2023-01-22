import React from 'react'
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';

export default function Adminpageone() {
    let navigate  = useNavigate();
    const routeChange = () =>{ 
      navigate("/Viewtickets");
    }
    const routeChangeone = () =>{ 
      navigate("/Addbuses");
    }
    const routeChangetwo = () =>{ 
      navigate("/Deletebuses");
    }
    const routeChangethree = () =>{ 
      navigate("/Adddriver");
    }
  return (
    <div>
    <button class= "justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={routeChange}>VIEW TICKETS</button>
    <button class= "justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={routeChangeone}>ADD BUSES</button>
    <button class= "justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={routeChangetwo}>DELETE BUSES</button>
    <button class= "justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={routeChangethree}>ADD DRIVER</button>
    </div>
  )
}
