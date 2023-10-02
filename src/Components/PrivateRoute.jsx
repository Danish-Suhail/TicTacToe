import {React} from 'react'
import {NavLink} from 'react-router-dom'

const PrivateRoute = () => {

    return(
        <div>
            <h1 className='text-white text-xl my-10'>Please enter the names of the players.</h1>
            <NavLink to= '/'><button className="bg-[#0074a6] py-1 px-12 text-2xl border rounded-md text-white">Home Page</button></NavLink>
        </div>
    )

}

export default PrivateRoute