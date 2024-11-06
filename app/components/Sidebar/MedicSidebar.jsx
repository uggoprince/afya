import { SideBar } from ".";
import SidebarItem from "./SidebarItem";

export default function MedicSidebar() {
    return (
        <SideBar>
            <SidebarItem label={'Prescriptions'} link={'/medic'} icon={'../../public/dashboard.svg'}>
            </SidebarItem>
            <SidebarItem label={'Requests'} link={'/medic/requests'}>
            </SidebarItem>
            <SidebarItem label={'Patients'} link={'/medic/patients'}></SidebarItem>
            {/* <SidebarItem label={'Inventories'} link={'/medic'}></SidebarItem> */}
            <SidebarItem label={'Settings'} link={'/medic'}></SidebarItem>
            <SidebarItem label={'Logout'} link={'/'}></SidebarItem>
        </SideBar>
    );
};
