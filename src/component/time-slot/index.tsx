import React from "react";
import { groupTimeSlots, getHours } from '../../utility';

const TimeSlot = (props: any) => {
  const { timeSlots } = props;
  const groupedTimeSlot = groupTimeSlots(timeSlots);

  return (
    <>
      <h4>Day</h4>
      <ul>
        {
          groupedTimeSlot.map(item => (
            <li>
              <p>{item?.day}</p>
              <button>{getHours(item?.start)} - {getHours(item?.end)}</button>
            </li>
          ))
        }
      </ul>
    </>
  )
};

export default TimeSlot
