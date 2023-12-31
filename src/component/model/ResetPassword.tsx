import React from 'react';

type ResetPasswordProps = {

};

const ResetPassword:React.FC<ResetPasswordProps> = () => {
    
    return (
        <form className='space-y-6 px-6 pb-4' >
        <h1 className='text-xl font-medium text-white'>Reset Password</h1>
        <p className='text-white text-sm font-base'>Forgotten your password enter your email address below, and we will send you and email allowing you to reset it.</p>
        <div>
            <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
                Your Email
            </label>
            <input
               
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
    
        <button
            type='submit'
            className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
        '
        >
           Reset Password
        </button>
        </form> 
    );
}
export default ResetPassword;