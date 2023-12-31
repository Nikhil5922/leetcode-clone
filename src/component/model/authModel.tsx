import React, { useEffect } from "react";
import Signup from './signup';
import Login from './login';
import {IoClose} from "react-icons/io5"
import ResetPassword from './ResetPassword';
import { authModalstate } from '@/atoms/authModalAtom';
import { useRecoilValue, useSetRecoilState } from "recoil";



type authModelProps = {
    
};

const authModel:React.FC<authModelProps> = () => {
    const authModal=useRecoilValue(authModalstate);
    const closeModal = useCloseModal();
    
    return (
        <>
	<div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70'  onClick={closeModal}></div>
	<div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
		<div className='relative w-full h-full mx-auto flex items-center justify-center'>
			<div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6'>
				<div className='flex justify-end p-2'>
					<button
						type='button'
						className='bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white' onClick={closeModal}
					>
						<IoClose className="h-5 w-5" />
                        
					</button>
				</div>
                  {authModal.type==="Login" ? <Login/> : authModal.type==="register" ? <Signup/> : <ResetPassword/>}
			</div>
		</div>
	</div>
	</>
    );
}
export default authModel;
function useCloseModal() {
	const setAuthModal = useSetRecoilState(authModalstate);

	const closeModal = () => {
		setAuthModal((prev) => ({ ...prev, isOpen: false, type: "Login" }));
	};

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeModal();
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, []);

	return closeModal;
}