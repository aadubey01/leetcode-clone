import React from 'react';
import Link from 'next/link';
import { useAuthModalStore } from '@/store/authModalStore';
import Image from 'next/image';

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    const openModal = useAuthModalStore((state)=>state.openModal);
    const handleClick = ()=>{
        openModal('login');
    }
    return( <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
    <Link href='/' className='flex items-center justify-center h-20'>
        <Image src='/logo.png' alt='LeetClone' height={300} width={200} />
    </Link>
    <div className='flex items-center'>
        <button className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent transition duration-300 ease-in-out'
        

        onClick={handleClick}
        >
            Sign In

        </button>
    </div>

    </div>
    )
}
export default Navbar;
