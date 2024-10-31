import { SideBar } from "../components/Sidebar";
import SidebarItem from "../components/Sidebar/SidebarItem";
import WelcomeCard from "../components/WelcomeCard";
import MetricCard from "../components/MetricCard";
import ActivityGrowthChart from "../components/ActivityGrowthChart";
import BMICalculator from "../components/BMICalculator";

export default function Home() {
    return (<div className="w-full flex flex-row overflow-hidden">
        <SideBar>
            <SidebarItem link={'/'} />
            <SidebarItem link={'/'} />
            <SidebarItem link={'/'} />
            <SidebarItem link={'/'} />
        </SideBar>
        <div className="main-content flex flex-col lg:flex-row flex-1 h-screen overflow-y-auto">
            <div className="flex flex-col flex-1 overflow-x-hidden w-full h-fit">
                <WelcomeCard username="User" date="October 30, 2024" />
                <div className="metrics w-full grid grid-flow-col">
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
            <div className="flex-1 w-fit self-end h-full  flex flex-col">
                <BMICalculator />
            </div>
            {/* <UpcomingDosage /> */}
        </div>
    </div>);
}