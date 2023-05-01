import { ClassData, ClassDataFilter, ControlBarUniqueVals } from "../Types";

const emptyFilterLiteral: ClassDataFilter = {
    subject: "",
    campus: "",
    days: "",
    time: "",
    instructor: "",
    attribute: ""
}

function filterData(data: ClassData[], filter: ClassDataFilter): ClassData[] {
    let filtered: ClassData[]

    // filter by subject
    filtered = data.filter((c: ClassData) => {
        if (filter.subject !== "") return c.subject == filter.subject
        else return c
    })

    // filter by instructor
    filtered = filtered.filter((c: ClassData) => {
        if (filter.instructor !== "") return c.instructor == filter.instructor
        else return c
    })

    // filter by campus
    filtered = filtered.filter((c: ClassData) => {
        if (filter.campus !== "") return c.campus == filter.campus
        else return c
    })

    // filter by day
    filtered = filtered.filter((c: ClassData) => {
        if (filter.days !== "") return c.days == filter.days
        else return c
    })

    // filter by day
    filtered = filtered.filter((c: ClassData) => {
        if (filter.time !== "") return `${c.start_time}-${c.end_time}` == filter.time
        else return c
    })

    // filter by attribute
    filtered = filtered.filter((c: ClassData) => {
        if (filter.attribute !== "") return c.attribute == filter.attribute
        else return c
    })

    return filtered
}

function isFilterEmpty(filter: ClassDataFilter) {
    const filterString = JSON.stringify(filter);
    const emptyFilterString = JSON.stringify(emptyFilterLiteral);

    return filterString === emptyFilterString;
}

function getUniqueForControlBar(data: ClassData[]): ControlBarUniqueVals {
    // unique subjects NEVER CHANGES. Other values do though.

    const uniqueSubjects = ['CS', 'MATH', 'STAT', 'IS', 'AI', 'PHIL', 'PSY', 'NCIS', 'ACTS' ]
    // campus
    const uniqueCampus = [...new Set( data.map((c: ClassData) => c.campus) ) ]
    // days
    const uniqueDays = [...new Set( data.map((c: ClassData) => c.days) ) ]
    // times
    const uniqueTimes = [...new Set( data.map((c: ClassData) => `${c.start_time}-${c.end_time}`) ) ]
    // instructors
    const uniqueInstructors = [...new Set( data.map((c: ClassData) => c.instructor) ) ]
    // attributes
    // remove undefined values too since c.attribute is ?
    const uniqueAttributes = [...new Set( data.map((c: ClassData) => c.attribute)) ].filter(el => el !== undefined) as string[]

    return {
        subjects: uniqueSubjects,
        campuses: uniqueCampus,
        days: uniqueDays,
        times: uniqueTimes,
        instructors: uniqueInstructors,
        attributes: uniqueAttributes
    }
}


export {emptyFilterLiteral, filterData, isFilterEmpty, getUniqueForControlBar}