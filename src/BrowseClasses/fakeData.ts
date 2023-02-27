export interface ClassData {
    crn: number
    subject: string
    course: number
    credit: number
    title: string
    days: string
    instructor: string
}

export const classes: ClassData[] = [
    {
        crn: 11704,
        subject: 'CS',
        course: 65,
        credit: 3,
        title: 'INTRO TO CS I',
        days: 'TR',
        instructor: 'Md Alimoor Reza'
    },

    
    {
        crn: 9180,
        subject: 'CS',
        course: 65,
        credit: 3,
        title: 'INTRO TO CS I',
        days: 'TR',
        instructor: 'Timothy Matthew Urness'
    },

    {
        crn: 12868,
        subject: 'CS',
        course: 66,
        credit: 3,
        title: 'INTRO TO CS II',
        days: 'MW',
        instructor: 'Eric Donald Manley'
    },

    {
        crn: 3458,
        subject: 'CS',
        course: 66,
        credit: 3,
        title: 'INTRO TO CS II',
        days: 'TR',
        instructor: 'Andrei Nikolai Migunov'
    },

    {
        crn: 10638,
        subject: 'CS',
        course: 167,
        credit: 3,
        title: 'MACHINE LEARNING',
        days: 'TR',
        instructor: 'Mereidth Kay Moore'
    },

    {
        crn: 11708,
        subject: 'CS',
        course: 139,
        credit: 3,
        title: 'THEORY OF COMPUTATION',
        days: 'TR',
        instructor: 'Andrei Nikolia Migunov'
    }
]
