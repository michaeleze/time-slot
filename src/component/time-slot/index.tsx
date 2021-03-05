import React from "react";
import {groupTimeSlots, getTime} from '../../utility';
import './index.css';

const TimeSlot = (props: any) => {
  const {
    bookedTime,
    companyName,
    handleClick,
    timeSlots
  } = props;
  const groupedTimeSlot = groupTimeSlots(timeSlots);

  const GroupedTimeSlot = () => (
    <>
      {
        groupedTimeSlot.map(item => (
          <div key={item?.day}>
            <h4 className='day'>{item?.day}</h4>
            <ul>
              {
                item?.slots?.map((slot: any) => {
                  //const checkUnavailableTime = bookedTime.find((time: string) => time === String(getTime(slot?.start_time, slot?.end_time)));

                  return (
                    <li className="timeList" key={slot?.start_time}>
                      <button
                        className="timeSlot"
                        name={companyName}
                        // disabled = {Boolean(checkUnavailableTime)}
                        onClick={handleClick}
                        value={String(getTime(slot?.start_time, slot?.end_time))}
                      >
                        {getTime(slot?.start_time, slot?.end_time)}
                      </button>
                    </li>

                  )
                })
              }
            </ul>
          </div>
        ))
      }
    </>
  );

  return <GroupedTimeSlot />;
};

export default TimeSlot
