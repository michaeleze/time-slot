import React from "react";
import TimeSlot from "../time-slot";
import './index.css';

const Company: React.FC<any> = (props) => {
  const {
    currentReservation,
    handleClick,
    item,
    reservedSlot,
  } = props;

  return (
    <div key={item?.id}>
      <h2>{item?.name}</h2>
      <p className="currentSchedule">{'currentReservation[item?.name]'}</p>
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
