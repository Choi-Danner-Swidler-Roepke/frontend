import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

// Hardcoded events as an example
// Substitute these with data from the classes selected to make a proper schedule
// To do this, add events={events} to the FullCalendar component
// id field is for backend only, title is what shows up on the schedule
const events = [
    {
      id: "1",
      title: 'CS 66: Introduction to Computer Science II',
      startTime: "09:19:00.000",
      startRecur: "2023-08-28", 
      endTime: "11:19:00.000",
      endRecur: "2023-12-28",
      color: "purple",
      daysOfWeek: [2,4]
    },
    {
      id: "2",
      title: 'event 2',
      start: '2023-04-12T13:00:00',
      end: '2023-04-12T18:00:00',
    },
  ];


export const MSPage: React.FC = () => {
    return (
        <div className="flex md:flex-row gap-3 pt-5 px-24 flex-wrap
                        gap-y-10 bg-gray-200 h-0.8 order-1">
            
            {/* This div is the header and subtitle for the page */}
                <div className="flex h-24 flex-wrap order-2 basis-1/2">
                    <h1 className="md:text-5xl text-2xl font-bold md:leading-tight leading-snug text-blue-400">
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
                        events={events}
                    />
                </div> 
        </div>
    )
}