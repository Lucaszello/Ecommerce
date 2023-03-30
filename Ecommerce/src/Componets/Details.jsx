import React from 'react'
import { Link, useLocation } from "react-router-dom"
const Details = () => {
    const  {state} = useLocation();
    console.log(state);
    return (
      <div className=" ">    
        <div className=" border py-2 px-4 md:py-3 md:px-5 md:mx-auto gap-4 md:w-1/2 md:flex items-center justify-center mt-8">
          <img src={state?.image} alt="" className=" md:mx-auto h-40" />
          <div className="md:w-2/3">
            <p className=" text-2xl font-bold pb-2">{state?.title}</p>
            <p className="   pb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe rem dolore commodi eum! Minima.</p>
            <Link to={'/'}  className=' active:bg-cyan-600 transition duration-150 active:ring-2 active:ring-cyan-300 active:scale-100 hover:scale-105 w-full bg-cyan-500 shadow-inner shadow-cyan-300 py-2 flex items-center justify-center text-white rounded-md'>Return </Link>

          </div>

        </div>
      </div>
  )
}

export default Details