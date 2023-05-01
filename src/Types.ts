interface ClassData {
    crn: number
    subject: string
    course: number
    section: number
    campus: string
    credit: number
    title: string
    days: string
    start_time: string
    end_time: string
    capacity: number
    actual: number
    remaining: number
    waitlistCapacity: number
    waitlistActual: number
    waitlistRemaining: number
    xlCap: number
    xlActual: number
    xlRemaining: number
    instructor: string
    location: string
    attribute: string
    term: string
}

// this needs updated to reflect api 
interface ClassDataFilter {
    // crn: number
    subject: string
    // course: number
    // section: number
    campus: string
    // credit: number
    // title: string
    days: string
    time: string
    // capacity: number
    // actual: number
    // remaining: number
    // waitlistCapacity: number
    // waitlistActual: number
    // waitlistRemaining: number
    // xlCap: number
    // xlActual: number
    // xlRemaining: number
    instructor: string
    // location: string
    attribute: string
    // term: string
}

interface ControlBarUniqueVals {
        subjects: string[],
        campuses: string[],
        days: string[],
        times: string[],
        instructors: string[],
        attributes: string[]
}
// type ClassesData = ClassData[]

export type { ClassData, ClassDataFilter, ControlBarUniqueVals }