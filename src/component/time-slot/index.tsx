import React, {useState} from "react";
import {groupTimeSlots, getTime} from '../../utility';
import './index.css';

const TimeSlot = (props: any) => {
  const {handleClick, timeSlots} = props;
  const groupedTimeSlot = groupTimeSlots(timeSlots);

  return (
    <>
      {
        groupedTimeSlot.map(item => (
          <div key={item?.day}>
            <p className='day'>{item?.day}</p>
            <ul>
              {
                item?.slots?.map((slot: any) => (
                  <li className="timeList" key={slot?.start_time}>
                    <button
                      className="timeSlot"
                      onClick={handleClick}
                      value={String(getTime(slot?.start_time, slot?.end_time))}
                    >
                      {getTime(slot?.start_time, slot?.end_time)}
                    </button>
                  </li>

                ))
              }
            </ul>
          </div>
        ))
      }
    </>
  )
};

export default TimeSlot
