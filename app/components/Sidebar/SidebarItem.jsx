import Link from "next/link";

const SidebarItem = ({ icon, label, link }) => {
    return (
      <Link href={link} to={link} className="sidebar-item" aria-label={label}>
        <div className="icon">{icon}</div>
        <span className="label">{label}</span>
      </Link>
    );
};
  
export default SidebarItem;
