import React from "react";
import {
  groupTimeSlots,
  getTime,
} from '../../utility';
import './index.css';

interface ITimeSlot {
  companyName: string;
  handleClick: (x: any, y: string) => void;
  reservedSlot: { [x: string]: string; } | undefined
  timeSlots: Array<{
    start_time: string;
    end_time: string;
  }>
}

const TimeSlot: React.FC<ITimeSlot> = (props) => {
  const {
    companyName,
    handleClick,
    reservedSlot,
    timeSlots
  } = props;


  const groupedTimeSlot = groupTimeSlots(timeSlots);
  const getDay = reservedSlot && Object.keys(reservedSlot);
  const getSlot = reservedSlot && Object.values(reservedSlot);

  const handleReservation = (day: string, slot: string) => {
    if (String(getSlot) === slot && String(getDay) === day) {
      return true
    }
    return;
  }

  const GroupedTimeSlot = () => (
    <>
      {
        groupedTimeSlot?.map(item => {
          return (
            <div key={item?.day}>
              <h4 className="day">{item?.day}</h4>
              <ul className="timeListContainer">
                {
                  item?.slots?.map((slot: any) => (
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
                  )
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
