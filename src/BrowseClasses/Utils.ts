import { ClassData, ClassDataFilter, ControlBarUniqueVals } from "../Types";

function isFilterEmpty(filter: ClassDataFilter) {
    const emptyFilterLiteral: ClassDataFilter = {
        subject: [],
        campus: [],
        days: [],
        time: [],
        instructor: [],
        attritbute: []
    }

    const filterString = JSON.stringify(filter);
    const emptyFilterString = JSON.stringify(emptyFilterLiteral);

    return filterString === emptyFilterString;
}

function getUniqueForControlBar(data: ClassData[]): ControlBarUniqueVals {
    const uniqueSubjects = [...new Set( data.map((c: ClassData) => c.subject) ) ]
    // campus
    const uniqueCampus = [...new Set( data.map((c: ClassData) => c.campus) ) ]
    // days
    const uniqueDays = [...new Set( data.map((c: ClassData) => c.days) ) ]
    // times
    const uniqueTimes = [...new Set( data.map((c: ClassData) => c.time) ) ]
    // instructors
    const uniqueInstructors = [...new Set( data.map((c: ClassData) => c.instructor) ) ]
    // attributes
    // remove undefined values too since c.attribute is ?
    const uniqueAttributes = [...new Set( data.map((c: ClassData) => c.attritbute)) ].filter(el => el !== undefined) as string[]

    return {
        subjects: uniqueSubjects,
        campuses: uniqueCampus,
        days: uniqueDays,
        times: uniqueTimes,
        instructors: uniqueInstructors,
        attritbutes: uniqueAttributes
    }
}


export {isFilterEmpty, getUniqueForControlBar}