import React from 'react';
import BMIStats from '../BMIStats';
import Image from 'next/image';
// import BMIStats from './BMIStats';
// import BodyMeasurements from './BodyMeasurements';
// import './BMICalculator.css';
import ProgressWheel from "../../../public/progress_wheel.svg";
import { Progress } from 'antd';

const BMICalculator = () => {
  return (
    <div className="bmi-calculator">
      <div className='bg-[#EAEFE7] text-sky-950 p-2 flex flex-row justify-center items-center gap-4'>
        <div>Your Prescription is Almost Done</div>
        {/* <ProgressWheel width="50" height="50" /> */}
        <Progress type="circle" percent={90} size={'small'} strokeWidth={20} />

        <div>
          <div>{''}</div>
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
