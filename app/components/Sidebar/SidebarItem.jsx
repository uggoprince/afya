import Link from "next/link";
import dynamic from 'next/dynamic';

// const Icon = ({src}) => dynamic(() => import(src), { ssr: false });

const SidebarItem = ({ icon, label, link }) => {
  // const Icon = dynamic(() => import(icon), { ssr: false });
    return (
      <Link href={link} to={link} className="sidebar-item" aria-label={label}>
        {/* <div className="icon">{icon}</div> */}
        {/* <Icon src={icon} width={24} height={24} fill="#e8eaed" /> */}
        <div className="label">{label}</div>
      </Link>
    );
};
  
export default SidebarItem;
