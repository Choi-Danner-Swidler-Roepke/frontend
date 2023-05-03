interface ClassData {
  id: number;
  crn: number;
  subject: string;
  course: number;
  section: number;
  campus: string;
  credit: number;
  title: string;
  days: string;
  start_time: string;
  end_time: string;
  capacity: number;
  actual: number;
  remaining: number;
  waitlistCapacity: number;
  waitlistActual: number;
  waitlistRemaining: number;
  xlCap: number;
  xlActual: number;
  xlRemaining: number;
  instructor: string;
  location: string;
  attribute: string;
  term: string;
}

interface ScheduleData {
  title: string;
  startTime: string;
  startRecur: string;
  endTime: string;
  endRecur: string;
  color: string;
  daysOfWeek: [number];
}

// this needs updated to reflect api
interface ClassDataFilter {
  // crn: number
  subject: string;
  // course: number
  // section: number
  campus: string;
  // credit: number
  // title: string
  days: string;
  time: string;
  // capacity: number
  // actual: number
  // remaining: number
  // waitlistCapacity: number
  // waitlistActual: number
  // waitlistRemaining: number
  // xlCap: number
  // xlActual: number
  // xlRemaining: number
  instructor: string;
  // location: string
  attribute: string;
  // term: string
}

interface ControlBarUniqueVals {
  subjects: string[];
  campuses: string[];
  days: string[];
  times: string[];
  instructors: string[];
  attributes: string[];
}
// type ClassesData = ClassData[]

export type { ClassData, ScheduleData, ClassDataFilter, ControlBarUniqueVals };
