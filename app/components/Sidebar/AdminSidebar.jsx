import { SideBar } from ".";
import SidebarItem from "./SidebarItem";

export default function AdminSidebar() {
    return (
        <SideBar>
            <SidebarItem label={'Prescriptions'} link={'/admin'} icon={'../../public/dashboard.svg'}>
            </SidebarItem>
            <SidebarItem label={'Deliveries'} link={'/admin'}>
            </SidebarItem>
            <SidebarItem label={'Settings'} link={'/admin'}></SidebarItem>
            <SidebarItem label={'Logout'} link={'/'}></SidebarItem>
        </SideBar>
    );
};
