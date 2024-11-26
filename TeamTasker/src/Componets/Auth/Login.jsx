import React, { useState } from 'react'

export default function Login({handleLogin}) {
const [email,setemail]=useState('');
const [password,setpassword]=useState('');

const submitHandler=(Event)=>{
    Event.preventDefault();
    console.log("Email is :=",email);
    console.log("Password is:=",password);
    handleLogin(email,password);
    setemail("");
    setpassword("");
}

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form onSubmit={submitHandler}

                 className='flex flex-col items-center justify-center'>
                    <input value={email} onChange={(e)=>{setemail(e.target.value)}} required className=' outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 text-xl rounded-full' type="email" placeholder='Enter Your email' />
                    <input value={password} onChange={(e)=>{setpassword(e.target.value)}} required className=' outline-none bg-transparent mt-3 placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 text-xl rounded-full' type="password" placeholder='Enter your password' />
                    <button className='text-white outline-none mt-7 hover:bg-emerald-700 font-semibold text-lg py-2 placeholder:text-white border-none bg-emerald-600 px-8 w-full  rounded-full'>Log in</button>
                </form>
            </div>
        </div>
    )
}
