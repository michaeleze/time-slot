const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] // Days of the week;

export const getDay = (arg: string)  => new Date(arg).getDay(); // Format date - get day

const formatMinute = (time: string) => new Date(time).getUTCMinutes() === 0 ? '00' : new Date(time).getUTCMinutes();

export const getTime = (start: string, end: string)  => `${new Date(start).getUTCHours()}:${formatMinute(start)} - ${new Date(start).getUTCHours()}:${formatMinute(end)}`; // Format date - get hours

export const groupTimeSlots = (timeSlots: any) => {
  // Filter Days of the weeks
  const getDate = (arg: any, num: number) => arg.filter((item: any) => getDay(item.start_time) && getDay(item.end_time) === num);

  // Group Day and Slots
  const date = days.reduce((total: any, curr: string) => {
    const currentIndex = days.indexOf(curr);
    const currentItem  = days[currentIndex];
    const timeSlot = getDate(timeSlots,currentIndex);

    const dates = { day: currentItem, slots: timeSlot};

    return [...total,  dates];
  },[]);

  const newSlots = date.filter(item => item.day !== 'Sunday' && item.day !==  'Saturday') //  Remove weekends;

  return newSlots // New grouped time slot;
}

// export const removeduplicateDays = (param: Array<string>) => {
//   const getUniqueEntry = param.reduce((total:any,curr:string) => [...total, ...Object.keys(curr)],[]);
//
//   return getUniqueEntry && Array.from(new Set(getUniqueEntry));
// }
//
// export const removeduplicateTimes = (param: Array<string>) => {
//   const getUniqueEntry = param.reduce((total:any,curr:string) => [...total, ...Object.values(curr)],[]);
//
//   return getUniqueEntry && Array.from(new Set(getUniqueEntry));
// }
