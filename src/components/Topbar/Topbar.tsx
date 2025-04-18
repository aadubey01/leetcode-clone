'use client';

import { auth } from '@/firebase/firebase';
import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Logout from '../Buttons/Logout';
import { useAuthModalStore } from '@/store/authModalStore';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';
import Timer from '../Timer/Timer';

type TopbarProps = {
    problemPage?:boolean;
};

const Topbar:React.FC<TopbarProps> = ({problemPage}) => {

    const [user] =useAuthState(auth);

    const setAuthModalState = useAuthModalStore((state)=>state.openModal);
    
    return (<nav className='relative flex items-center w-full shrink-0 h-[50px] px-5 bg-dark-layer-1 text-dark-gray-7'>
        <div className={`flex w-full justify-between items-center ${!problemPage ? "max-w-[1200px] mx-auto":""}`}>
            <Link href='/'>
            <img src='/logo-full.png' alt='logo' className='h-full'/>
            </Link>

            {problemPage &&(
                <div className='flex items-center gap-4 flex-1 justify-center'>
                    <div 
                    className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'>
                        <FaChevronLeft/>
                    </div>
                    <Link
                    href='/'
                    className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'>
                        <div>
                            <BsList/>
                        </div>
                        <p>Problem List</p>
                    </Link>
                    <div className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'>
                        <FaChevronRight />
                    </div>
                </div>
            )}




            <div className='flex items-center space-x-4 flex-1 justify-end'>
                <div>
                    <a
                    href='#'
                    target='_blank'
                    rel='nonreferrer'
                    className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'>
                        Premium
                    </a>
                    
                </div>
                {!user && (
                <Link href="/auth" onClick={()=>setAuthModalState('login')}>
                    <button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded'>Sign In</button>
                    </Link>
                    ) }
                    {problemPage && <Timer/>}
                    {user && (
                        <div className='cursor-pointer group relative'>
                            <img src='/avatar.png' alt='user Profile img' className='w-8 h-8 rounded-full'/>
                            <div
								className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out'
							>
								<p className='text-sm'>{user.email}</p>
							</div>
                        </div>
                    )}
                  { user && <Logout/>}
                
            </div>
        </div>
      
        <Link href="#"></Link>
        </nav>
    );
}
export default Topbar;