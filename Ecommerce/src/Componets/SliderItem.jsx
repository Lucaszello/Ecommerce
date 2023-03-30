import React from 'react'
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"
import {RxCross2} from "react-icons/rx"
import { useDispatch, useSelector } from 'react-redux'
import { Decrease, Increase, removeCart } from '../features/CartSlice'
const SliderItem = ({ct}) => {
  console.log(ct);
  const {quantity,cart} = useSelector(state => state.cart);

  const dispatch = useDispatch();
  return (
    <div className=' relative border mt-4 p-3 rounded shadow-md font-sans'>
      <span onClick={() => dispatch(removeCart(ct))} className=" cursor-pointer px-4 bg-red-500 text-white py-2 shadow-inner shadow-red-300 absolute top-0 right-0  "><RxCross2 className=' text-lg' /></span>
        <img src={ct.image} alt="" className=" h-24" />
        <div className="mt-3">
          <p className=" text-lg font-bold text-slate-700">{ct.title.substr(0,40)}</p>
          <div className=" mt-3 flex justify-between items-center">

            <p className=" ">$
          
             {(ct.price * ct.quantity).toFixed(2)}
             </p>
            <div className="  flex items-center">
              <button onClick={() => dispatch(Decrease(ct))}  className='h-8 rounded-l shadow-inner shadow-teal-200 active:bg-teal-500  bg-teal-400 px-3 text-white'><AiOutlineMinus/></button>
                <p className="h-8 leading-[32px] text-end pr-2 w-20">{ct.quantity}</p>
              <button onClick={() => dispatch(Increase(ct))} className='h-8 rounded-r bg-teal-400 shadow-inner shadow-teal-200 active:bg-teal-500 px-3 text-white'><AiOutlinePlus/></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SliderItem