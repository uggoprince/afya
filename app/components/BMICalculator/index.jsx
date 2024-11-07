import React from 'react';
import BMIStats from '../BMIStats';
import Image from 'next/image';
// import BMIStats from './BMIStats';
// import BodyMeasurements from './BodyMeasurements';
// import './BMICalculator.css';
import Capsule from "../../../public/capsule.svg";
import NotificationIcon from "../../../public/NotificationIcon.svg";
import Avatar from "../../../public/MaskGroup.svg";
import { Progress } from 'antd';

const BMICalculator = () => {
  return (
    <div className="bmi-calculator">
      <div className='bg-[#EAEFE7] text-sky-950 py-2 px-4 flex flex-row justify-center items-center gap-4'>
        <div>Your Prescription is Almost Done</div>
        {/* <ProgressWheel width="50" height="50" /> */}
        <Progress type="circle" percent={90} size={'small'} strokeWidth={20} />
        <div className='flex flex-col'>
          <span>6/7</span>
          <Capsule width="20" height="20" />
        </div>
      </div>
      <div className='flex flex-col py-2 px-4 gap-2  mt-2'>
        <div className='flex flex-row items-center justify-between'>
          <span className='text-[#AE0A22] font-bold'>{'UPCOMING PRESCRIPTION'}</span>
          <NotificationIcon className="cursor-pointer" width={30} height={20} />
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='border-sky-400 border-[1px] rounded-lg text-sky-950 p-3 flex flex-row'>
          <div className='flex flex-row'>
            {'2 tablets, Aspirin 500mg | Afternoon dose - 3pm | After Meal'}
          </div>
          <div className='align-top ml-auto self-start cursor-pointer'>{`...`}</div>
        </div>
        <div className='border-sky-400 border-[1px] rounded-lg text-sky-950 p-3 flex flex-row'>
          <div className='flex flex-row'>
            {'2 tablets, Folic Acid | Afternoon dose- 3pm | After Meal'}
          </div>
          <div className='align-top ml-auto self-start cursor-pointer'>{`...`}</div>
        </div>
      </div>

      <div className='flex flex-col py-2 px-4 gap-2  mt-2'>
        <div className='flex flex-row items-center justify-between'>
          <span className='text-[#AE0A22] font-bold'>{'UPCOMING APPOINTMENTS'}</span>
          <NotificationIcon className="cursor-pointer" width={30} height={20} />
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <div className='border-sky-400 border-[1px] rounded-lg gap-3 text-sky-950 p-3 flex flex-row'>
          <Avatar className="cursor-pointer" width={40} height={20} />
          <div className='flex flex-row font-bold'>
            {'Dr. Mary Monday'}
          </div>
          <div className='align-top ml-auto self-start cursor-pointer'>{'Tuesday, October 24'}</div>
        </div>
      </div>
      {/* <BMIStats height={'170'} weight={'72'} bmi={'24.9'} status={'You are healthy'} />
      <div className='flex flex-row justify-between gap-3 p-4'>
        <div className='flex flex-col gap-2'>
            <div className='bg-white rounded flex-1 px-2 text-[#C4C4C4] text-center content-center'>
                <div>Chest (in)</div>
                <div className='text-[#000000]'>44.5</div>
            </div>
            <div className='bg-white rounded flex-1 px-2 text-[#C4C4C4] text-center content-center'>
                <div>Waist</div>
                <div className='text-[#000000]'>34</div>
            </div>
            <div className='bg-white rounded flex-1 px-2 text-[#C4C4C4] text-center content-center'>
                <div>Hip</div>
                <div className='text-[#000000]'>42</div>
            </div>
        </div>
        <Image src={'/human.svg'} width={80} height={300} alt='human' />
      </div> */}
    </div>
  );
};

export default BMICalculator;
