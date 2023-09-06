import Navbar from '@/component/navbar/Navbar';
import AuthModel from '@/component/model/authModel';
import React from 'react';
import { authModalstate } from '@/atoms/authModalAtom';
import {useRecoilValue} from "recoil";

type AuthpageProps = {
    
};

const Authpage:React.FC<AuthpageProps> = () => {
    const authModal=useRecoilValue(authModalstate)
    
    return <div className="bg-gradient-to-b from-zinc-400 to-black h-screen relative">
        <div className="max-w-7xl mx-auto">
            <Navbar/>
            <div className='flex items-center justify-center h-[cal(100vh-5rem)] pointer-events-none select-none'>
                <img src="/hero.png" alt="Hero img" />
            </div>
           {authModal.isOpen && <AuthModel/>}
        </div>
    </div>

}
export default Authpage;