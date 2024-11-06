"use client";
import { SideBar } from "../components/Sidebar";
import SidebarItem from "../components/Sidebar/SidebarItem";
import WelcomeCard from "../components/WelcomeCard";
import MetricCard from "../components/MetricCard";
import ActivityGrowthChart from "../components/ActivityGrowthChart";
import BMICalculator from "../components/BMICalculator";
import DashBoardIcon from "../../public/dashboard.svg";
import MedicationIcon from "../../public/medication.svg";
import ProfileIcon from "../../public/profile.svg";
import SettingsIcon from "../../public/settings.svg";
import LogoutIcon from "../../public/logout.svg";
import UserSidebar from "../components/Sidebar/UserSidebar";

export default function PatientDashboard() {
    return (<div className="w-full flex flex-row h-screen relative">
        <UserSidebar />
        <div className="main-content flex flex-row md:flex-col flex-1 min-h-screen overflow-x-hidden
            overflow-y-auto p-8 flex-wrap pb-[100px]">
            <div className="flex flex-col flex-1 over w-full h-fit max-w-[500px]">
                <WelcomeCard username="User" date="October 30, 2024" />
                <div className="metrics w-full flex flex-row flex-wrap justify-between gap-4">
                    <MetricCard
                        iconSrc={'/blood_sugar.svg'}
                        altText={"Blood sugar"}
                        waveSrc={'/blood_sugar_wave.svg'}
                        waveAltText={'Blood sugar wave'}
                        title="Blood Sugar" value="80 mg/dL" status="Normal" />
                    <MetricCard
                        iconSrc={'/heart_rate.svg'}
                        altText={"Heart rate"}
                        waveSrc={'/heart_rate_wave.svg'}
                        waveAltText={'Heart rate wave'}
                        title="Heart Rate" value="98 bpm" status="Normal" />
                    <MetricCard
                        iconSrc={'/blood_pressure.svg'}
                        altText={"Blood pressure"}
                        waveSrc={'/blood_pressure_wave.svg'}
                        waveAltText={'Blood pressure wave'}
                        title="Blood Pressure" value="102/72 mmHg" status="Normal" />
                </div>
                <ActivityGrowthChart />
            </div>
            <div className="flex-1 w-fit self-end h-fit  flex flex-col">
                <BMICalculator />
            </div>
            {/* <UpcomingDosage /> */}
        </div>
    </div>);
}