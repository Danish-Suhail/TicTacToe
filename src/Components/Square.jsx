/* eslint-disable react/prop-types */
import {RxCross2} from 'react-icons/rx'
import {GoCircle} from 'react-icons/go'

const Square = (props) => {
    const value = props.value;
  return (
    <div onClick={props.onClick} className=" w-[100px] lg:w-[125px] lg:h-[125px] flex h-[100px] justify-center items-center">
         {value === 'X' ? <RxCross2 className=" text-8xl text-white"/>: value === 'O'?<GoCircle className=" text-7xl text-white"/>: value}
    </div>
  )
}

export default Square
  
