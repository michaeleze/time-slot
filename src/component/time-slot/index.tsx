import React from "react";
import {
  groupTimeSlots,
  getTime,
  removeduplicateDays,
  removeduplicateTimes
} from '../../utility';
import './index.css';

const TimeSlot: React.FC<any> = (props) => {
  const {
    companyName,
    handleClick,
    reservedSlot,
    timeSlots
  } = props;

  const groupedTimeSlot = groupTimeSlots(timeSlots);
  const getkeys = removeduplicateDays(reservedSlot);
  const getvalues = removeduplicateTimes(reservedSlot);

  const handleReservation = (day: string, slot: any) => {
    const findDay = getkeys?.find(item => item === day);
    const findSlot = getvalues?.find(item => item === slot);

    if (findDay && findSlot) {

      console.log('true');
      return true
    }

    console.log(findDay, day, getvalues, findSlot );
    console.log('false');
  }

  const GroupedTimeSlot = () => (
    <>
      {
        groupedTimeSlot.map(item => {
          return (
            <div key={item?.day}>
              <h4 className="day">{item?.day}</h4>
              <ul className="timeListContainer">
                {
                  item?.slots?.map((slot: any) => {
                    return (
                      <li className="timeList" key={slot?.start_time}>
                        <button
                          className="timeSlot"
                          name={item?.day}
                          disabled={handleReservation(item?.day, String(getTime(slot?.start_time, slot?.end_time)))}
                          onClick={(event) => handleClick(event, companyName)}
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
          )
        })
      }
    </>
  );

  return <GroupedTimeSlot/>;
};

export default TimeSlot
