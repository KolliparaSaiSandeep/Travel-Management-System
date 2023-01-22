import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function Home() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate("/User");
  }
  return (
    <button class= "justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={routeChange}>
         BOOK TICKETS
    </button>
  )
}
