"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './style.css';
import { useEffect, useState } from 'react';

const Header = (props) => {
    const pathname = usePathname();
    const constainsMedic = pathname.includes('/medic');
    return (
        <header className="header">
            <div className=' text-[28px] font-bold text-sky-700'>
                AFYA
            </div>
            <div className='self-end my-auto flex flex-row gap-4 text-white'>
                <Link href={'/'}
                    className='py-2 px-3 rounded-md cursor-pointer 
                    border-sky-500 text-sky-950 hover:text-white hover:bg-sky-400'>Home</Link>
                {!constainsMedic && <Link href={'/dashboard'}
                    className='py-2 px-3 rounded-md cursor-pointer 
                    border-sky-500 text-sky-950 hover:text-white hover:bg-sky-400'>DashBoard</Link>}
                {pathname !== '/dashboard' && !constainsMedic && <><Link href={'/'}
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
