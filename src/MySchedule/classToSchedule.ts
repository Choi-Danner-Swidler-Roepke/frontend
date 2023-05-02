import { ClassData, ScheduleData } from "../Types";

export const classToSchedule = (classData: ClassData): ScheduleData => {
  const days: [number] = [0];
  classData.days.split("").forEach((el) => {
    if (el === "M") days.push(1);
    if (el === "T") days.push(2);
    if (el === "W") days.push(3);
    if (el === "R") days.push(4);
    if (el === "F") days.push(5);
  });
  days.filter((el) => el !== 0);
  return {
    title: classData.title,
    startTime: classData.start_time,
    startRecur: "2023-08-28",
    endTime: classData.end_time,
    endRecur: "2023-12-28",
    color: "purple",
    daysOfWeek: days,
  };
};
