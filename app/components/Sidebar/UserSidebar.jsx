import { SideBar } from ".";
import SidebarItem from "./SidebarItem";
import DashBoardIcon from "../../../public/dashboard.svg";
import MedicationIcon from "../../../public/medication.svg";
import ProfileIcon from "../../../public/profile.svg";
import SettingsIcon from "../../../public/settings.svg";
import LogoutIcon from "../../../public/logout.svg";

export default function UserSidebar() {
    return (
        <SideBar>
            <SidebarItem label={'My Health'} link={'/dashboard'} icon={'../../public/dashboard.svg'}>
                <DashBoardIcon fill={'#555555'} />
            </SidebarItem>
            <SidebarItem label={'Medications'} link={'/dashboard'}>
                <MedicationIcon fill={'#555555'} />
            </SidebarItem>
            <SidebarItem label={'Profile'} link={'/dashboard'}><ProfileIcon fill={'#555555'} /></SidebarItem>
            <SidebarItem label={'Settings'} link={'/dashboard'}><SettingsIcon fill={'#555555'}/></SidebarItem>
            <SidebarItem label={'Logout'} link={'/'}><LogoutIcon fill={'#555555'}/></SidebarItem>
        </SideBar>
    );
}