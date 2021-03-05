import React from "react";
import TimeSlot from "../time-slot";
import './index.css';

interface ICompany {
  currentSlot: { [x: string]: string;} | undefined;
  handleClick:  (x: any, y: string) => void;
  item: {
    id: number;
    name: string;
    time_slots: Array<{
      start_time: string;
      end_time: string;
    }>
  };
  reservedSlot: { [x: string]: string;} | undefined
}

const Company: React.FC<ICompany> = (props) => {
  const {
    currentSlot,
    handleClick,
    item,
    reservedSlot,
  } = props;

  return (
    <div key={item?.id}>
      <h2>{item?.name}</h2>
      <p className="currentSchedule">{currentSlot && currentSlot[item?.name]}</p>
      <TimeSlot
        reservedSlot={reservedSlot}
        companyName={item?.name}
        handleClick={handleClick}
        timeSlots={item?.time_slots}
      />
    </div>
  )
}

export default Company;
