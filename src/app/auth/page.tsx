'use client';


import { useAuthModalStore } from '@/store/authModalStore';
import AuthModal from '@/components/Modals/AuthModal';
// import { useRecoilValue } from 'recoil';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import React, { useEffect,useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';


type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    const isOpen = useAuthModalStore((state)=>state.isOpen);
    const[user,loading,error] = useAuthState(auth);
    const [pageLoading,setPageLoading] = useState(true);

    const router = useRouter()

    useEffect(()=>{
        if(user){
            router.push('/')
        }
        if(!loading && !user){setPageLoading(false)}
    },[user,router,loading])

    if(pageLoading) return null;



    return (<div className='h-screen bg-gradient-to-b from-amber-500  to-black relative'>
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
                < Image src='/hero.png' alt='Hero img' width={700} height={700}/>

            </div>
            {isOpen &&<AuthModal/>}
        </div>
    </div>
    );
};
export default page;