interface ClassData {
    crn: number
    subject: string
    course: number
    section: number
    campus: string
    credit: number
    title: string
    days: string
    time: string
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
    attritbute?: string
    term: string
    data: string
}

// type ClassesData = ClassData[]

export type { ClassData }