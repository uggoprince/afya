"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './style.css';
import { useEffect, useState } from 'react';

const Header = (props) => {
    // const path = window.location.pathname;
    // const router = useRouter();
    // if (!router.isReady) {
    //     return null; // or a loading indicator if desired
    // }
    const pathname = usePathname();
    console.log(pathname);
    return (
        <header className="header">
            <div className=' text-[28px] font-bold text-sky-700'>
                AFYA
            </div>
            <div className='self-end my-auto flex flex-row gap-4 text-white'>
                <Link href={'/'}
                    className='py-2 px-3 rounded-md cursor-pointer 
                    border-sky-500 text-sky-950 hover:text-white hover:bg-sky-400'>Home</Link>
                {pathname !== "/medic" && <Link href={'/dashboard'}
                    className='py-2 px-3 rounded-md cursor-pointer 
                    border-sky-500 text-sky-950 hover:text-white hover:bg-sky-400'>DashBoard</Link>}
                {pathname !== '/dashboard' && pathname !== '/medic' && <><Link href={'/'}
                    className='py-2 px-3 rounded-md cursor-pointer 
                    border-sky-500 text-sky-950 hover:text-white hover:bg-sky-400'>Testimonials</Link>
                <Link href={'/'}
                    className='py-2 px-3 rounded-md cursor-pointer 
                    border-sky-500 text-sky-950 hover:text-white hover:bg-sky-400'>About Us</Link>
            <Link href={'/medic'}
                    className='py-2 px-3 
                    rounded-md cursor-pointer 
                    border-sky-500
                    text-white 
                    bg-sky-400'>Medic Sign In</Link></>}
            </div>
        </header>)
};

export default Header;
