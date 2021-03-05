import React, {useState} from "react";
import TimeSlot from "../time-slot";
import './index.css';

const Company = (props: any) => {
  const { bookedTime, handleClick, item } = props;

  return (
    <div key={item?.id}>
      <h2>{item?.name}</h2>
      <p className="currentSchedule">{bookedTime[item?.name]}</p>
      <TimeSlot
        bookedTime={bookedTime}
        companyName = {item?.name}
        handleClick={handleClick}
        timeSlots={item?.time_slots}
      />
    </div>
  )
}

export default Company;
