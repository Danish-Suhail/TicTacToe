import React from 'react'
import {GiTicTacToe} from 'react-icons/gi'

const NavBar = () => {
  return (
    <div className="bg-[#0074a6] flex justify-center items-center">
    <div className=" text-white flex justify-center items-center text-4xl lg:text-6xl py-6 lg:py-2">
    <p>Tic Tac Toe</p> <GiTicTacToe className='mx-4'/></div>
    </div>
  )
}

export default NavBar