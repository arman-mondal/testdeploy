import React from 'react';
import img3 from "../images/finger_scan.png"

function Popup(props) {
  return (props.trigger) ? (
    <div className='w-[400px] h-[400px] bg-white border-sky-600 flex justify-evenly relative shadow-2xl'>
        <div className='w-[280px]'><img src={img3} alt="" /></div>
    <div className='absolute top-80 flex justify-evenly gap-6'>
        <button className='px-5 py-2 rounded-lg  bg-gradient-to-r from-orange-400 to-red-400 text-white font-semibold'>Scan</button>
        <button className='px-5 py-2 bg-purple-500 rounded-md text-white font-semibold' onClick={() => props.setTrigger(false)}>Cancel</button>
        {props.children}
        <button className='px-5 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-blue-700 text-white font-semibold'>Verify</button>
    </div>
    </div>
  ) : "";
}

export default Popup