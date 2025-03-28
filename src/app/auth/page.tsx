'use client';


import { useAuthModalStore } from '@/store/authModalStore';
import AuthModal from '@/components/Modals/AuthModal';
import { useRecoilValue } from 'recoil';
import Navbar from '@/components/Navbar';
import React from 'react';

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    const isOpen = useAuthModalStore((state)=>state.isOpen);
    return (<div className='h-screen bg-gradient-to-b from-amber-500  to-black relative'>
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
                <img src='/hero.png' alt='Hero img'/>

            </div>
            {isOpen &&<AuthModal/>}
        </div>
    </div>
    );
};
export default page;