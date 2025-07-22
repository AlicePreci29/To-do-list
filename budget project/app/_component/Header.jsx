import React from 'react'
import Image from "next/image";


function Header(){
    return(
        <div className='p-5 flex justify-between items-center border shadow-sm'>
            <image src={'./logo.svg'} alt='logo' width={160} height={100}/>
            <Button>Get Started!</Button>
        </div>
    )
}

export default Header