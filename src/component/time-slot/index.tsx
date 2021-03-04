import React, {useState} from "react";
import {groupTimeSlots, getTime} from '../../utility';
import './index.css';

const TimeSlot = (props: any) => {
  const [state, setState] = useState();
  const {timeSlots} = props;
  const groupedTimeSlot = groupTimeSlots(timeSlots);

  return (
    <>
      {
        groupedTimeSlot.map(item => (
          <>
            <p className='day'>{item?.day}</p>
            <ul>
              {
                item?.slots?.map((slot: any) => (
                  <li className="timeList">
                    <button className="timeSlot">
                      {getTime(slot?.start_time, slot?.end_time)}
                    </button>
                  </li>

                ))
              }
            </ul>
          </>
        ))
      }
    </>
  )
};

export default TimeSlot
