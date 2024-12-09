import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='items-center flex justify-between p-5 border-b'>
            <Image className=' invert' src={'/logo.svg'} alt="logo" width={220} height={220}/>
            <div className='items-center flex justify-between gap-2 border p-2 rounded-md'>
                <div className=' rounded-full overflow-hidden border w-7 h-7 relative' >
                <Image className=' absolute' src={'/profile-img.jpg'} alt="profile-img" fill />
                </div>
                <p className=' text-black text-lg font-bold'>Shaffi</p>
            </div>
        </nav>
    )
}

export default Navbar
