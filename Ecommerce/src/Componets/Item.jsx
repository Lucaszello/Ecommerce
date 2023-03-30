import React, { useState } from 'react'
import {FaShoppingCart} from "react-icons/fa"
import {CgDetailsMore} from "react-icons/cg"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/CartSlice'
import Details from './details'
import { Link } from 'react-router-dom'
const Item = ({product}) => {
    const dispatch = useDispatch();
    const [state,setState] = useState(null);
    const addCart= () => {
      dispatch(addToCart(product))
      setState(true)
    }
  return (
    <div className=' mt-2 border shadow-md p-4 rounded'>
        <img src={product.image} alt="" className=" h-40" />
        <div className=" mt-3">
            <h2 className=" text-lg md:text-xl font-bold text-slate-700">{product.title.substr(0,30)}</h2>
            <p className="py-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam ratione magnam delectus illum commodi.</p>
            <div className="flex space-x-3 mt-1">
                <button onClick={() => addCart() } className=' active:bg-teal-600 transition duration-150 active:ring-2 active:ring-teal-300 active:scale-100 hover:scale-105 w-full bg-teal-500 shadow-inner shadow-teal-300 py-2 flex items-center justify-center text-white rounded-md'>Add to Cart <FaShoppingCart className='ml-2' /> </button>
                <Link to={'/details'} state={product}  className=' active:bg-cyan-600 transition duration-150 active:ring-2 active:ring-cyan-300 active:scale-100 hover:scale-105 w-full bg-cyan-500 shadow-inner shadow-cyan-300 py-2 flex items-center justify-center text-white rounded-md'>Detial <CgDetailsMore className='ml-2' /> </Link>
            </div>
        </div>
        
      
        
    </div>
  )
}

export default Item