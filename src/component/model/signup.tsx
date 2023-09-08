import { authModalstate } from '@/atoms/authModalAtom';
import { auth} from '@/firebase/firebase';
import React, { useState } from 'react';
import {useSetRecoilState} from "recoil";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
type signupProps = {
    
};

const signup:React.FC<signupProps> = () => {
    const setAuthModalstate=useSetRecoilState(authModalstate)
    const handleClick=()=>{
        setAuthModalstate((prev)=> ({...prev,type:"Login"}));
    }
    const [inputs,setinputs]=useState({email:'', Name:'',password:''});
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const handleChangeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setinputs((prev)=>({...prev ,[e.target.name]: e.target.value}));
    };
    const handleRegister=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }
    return (
        <form className='space-y-6 px-6 pb-4'  onSubmit={handleRegister}>
    <h3 className='text-xl font-medium text-white'>Register to Leetclone</h3>
    <div>
        <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
            Email
        </label>
        <input
        onChange={handleChangeInput}
           
            type='email'
            name='email'
            id='email'
            className='
    border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
    bg-gray-300 border-gray-500 placeholder-gray-400 text-black
'
            placeholder='name@company.com'
        />
    </div>
    <div>
        <label htmlFor='username' className='text-sm font-medium block mb-2 text-gray-300'>
            Name
        </label>
        <input
           
            type='username'
            name='username'
            id='username'
            className='
    border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
    bg-gray-600 border-gray-500 placeholder-gray-400 text-white
'
            placeholder='Ram kapoor'
        />
    </div>
    <div>
        <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
            Your Password
        </label>
        <input
           
            type='password'
            name='password'
            id='password'
            className='
    border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
    bg-gray-300 border-gray-500 placeholder-gray-400 text-black
'
            placeholder='*******'
        />
    </div>

    <button
        type='submit'
        className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
        text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
    '
    >
       Register
    </button>
    <div className='text-sm font-medium text-gray-300'>
        Already have an account Registered?{" "}
        <a href='#' className='text-blue-700 hover:underline' onClick={handleClick}>
            Log in
        </a>
    </div>

    </form> 
    );

}
export default signup;