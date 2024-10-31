import Link from 'next/link';
import './style.css';

const Header = (props) => {
    return (
        <header className="header">
            <div className=' text-[28px] font-bold text-sky-700'>
                AFYA
            </div>
            <div className='self-end my-auto flex flex-row gap-4 text-white'>
                <Link href={''}
                    className='py-2 px-3 rounded-md cursor-pointer border-sky-500 text-sky-950 hover:text-white hover:bg-sky-400'>Home</Link>
                <Link href={'/dashboard'}
                    className='py-2 px-3 rounded-md cursor-pointer border-sky-500 text-sky-950 hover:text-white hover:bg-sky-400'>DashBoard</Link>
            </div>
        </header>)
};

export default Header;
