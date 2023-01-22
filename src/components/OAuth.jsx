import React from 'react'
import {FcGoogle} from "react-icons/fc"
export default function OAuth() {
        return(
            <button
            className='flex items-center justify-center w-full bg-red-700 text-white mt-5 mb-5'>
            <FcGoogle className="mx-2"/>
            Continue with Google
            </button>
        )
    }

