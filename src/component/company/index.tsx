import React from "react";
import TimeSlot from "../time-slot";
import './index.css';

const Company: React.FC<any> = (props) => {
  const { reseveredSlot, handleClick, item } = props;

  console.log(reseveredSlot)

  return (
    <div key={item?.id}>
      <h2>{item?.name}</h2>
      <p className="currentSchedule">{reseveredSlot[item?.name]}</p>
      <TimeSlot
        bookedTime={reseveredSlot}
        companyId={item?.id}
        handleClick={handleClick}
        timeSlots={item?.time_slots}
      />
    </div>
  )
}

export default Company;
