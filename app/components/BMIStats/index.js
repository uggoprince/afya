import React from 'react';
import './style.css';

const BMIStats = ({ height, weight, bmi, status }) => {
  return (
    <div className="bmi-stats">
      <h3 className="section-title">BMI Calculator</h3>
      <div className='flex flex-row justify-between gap-2'>
        <div className="stat-row">
            <div className="stat bg-[#F8DEBD] rounded flex-1 items-center">
            <span className="stat-label">Height</span>
            <span className="stat-value text-center">{height} cm</span>
            </div>
            <div className="stat bg-[#D0FBFF] rounded flex-1 items-center">
            <span className="stat-label">Weight</span>
            <span className="stat-value">{weight} kg</span>
            </div>
        </div>

        <div className="bg-[#4A4949] rounded flex flex-col p-3 gap-2 flex-1">
            <div className='text-[12px]'>Body Mass Index(BMI)</div>
            <div className="bmi-value text-[12px]">
                <span>{bmi}</span>
                <span className={`bmi-status ${status.toLowerCase()}`}>{status}</span>
            </div>
            <div className="bmi-chart">
                {/* A placeholder for the BMI chart */}
                <div className="bmi-chart-bar" style={{ width: `${(bmi / 40) * 100}%` }} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default BMIStats;
