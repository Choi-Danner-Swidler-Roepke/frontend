import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRecoilState } from "recoil";
import { checkedData, scheduleData } from "../recoil/classData";
import { classToSchedule } from "./classToSchedule";
import { ScheduleData } from "../Types";

// Hardcoded events as an example
// Substitute these with data from the classes selected to make a proper schedule
// To do this, add events={events} to the FullCalendar component
// id field is for backend only, title is what shows up on the schedule

export const MSPage: React.FC = () => {
  const [classData, setClassData] = useRecoilState(checkedData);
  const [scheduledData, setSechduledData] = useRecoilState(scheduleData);
  useEffect(() => {
    async function getData() {
      try {
        const data = classData;
        let target: any = [];
        classData.forEach((el) => {
          target.push(classToSchedule(el));
        });
        setSechduledData(target);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [classData]);
  return (
    <div className="flex md:flex-row gap-3 pt-5 px-24 flex-wrap gap-y-10 bg-gray-200 h-0.8 order-1">
      {/* This div is the header and subtitle for the page */}
      <div className="flex h-24 flex-wrap order-2 basis-1/2">
        <h1 className="md:text-5xl text-2xl font-bold md:leading-tight leading-snug text-cyan-600">
          My Schedule
        </h1>
        <h2 className="text-black md:w-2/3 md:py-1 leading-relaxed justify-start">
          Visualize your next-semester schedule
        </h2>
      </div>
      {/* This div is the schedule component */}
      <div className="flex drop-shadow-md w-screen order-2 overflow-y-scroll">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="timeGridWeek"
          initialDate="2023-08-28"
          weekends={false}
          height={"auto"}
          aspectRatio={3}
          slotMinTime={"06:00:00"}
          slotMaxTime={"22:00:00"}
          allDaySlot={false}
          events={scheduledData}
        />
      </div>
    </div>
  );
};
