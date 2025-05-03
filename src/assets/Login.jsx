import React from 'react'
import img from '../images/playersgenshin.png'

export default function Login() {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='flex w-1/2 bg-gradient-to-b from-white/0 to-[#6a7282] p-6 rounded-lg'>
                <img src={img} alt="Genshin Impact" className='w-1/2 mr-12'/>
                <div className='w-1/2 flex items-center justify-center'>
                    <form className='flex flex-col items-center justify-center w-full'>
                        <div className='flex flex-col mb-4 gap-y-4 w-full'>
                            <label className='text-white font-semibold tracking-wider text-2xl'>Username</label>
                            <input type="text" className='text-xl border-2 border-white rounded-md p-2 mb-4 hover:scale-105 hover:duration-300' placeholder='example@gmail.com' />
                        </div>

                        <div className='flex flex-col mb-4 gap-y-4 w-full'>
                            <label className='text-white font-semibold tracking-wider text-2xl'>Password</label>
                            <input type="text" className='text-xl border-2 border-white rounded-md p-2 mb-4 hover:scale-105 hover:duration-300' placeholder='**********' />
                        </div>

                        <button type="submit" className='bg-blue-500 text-xl hover:bg-blue-800 font-semibold tracking-wide text-white rounded-md p-2 w-full hover:scale-105 hover:duration-300'>Ingresar Ahora</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
