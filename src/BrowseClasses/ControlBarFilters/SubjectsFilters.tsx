import { useEffect, useState } from "react"
import { ClassDataFilter } from "../../Types"

interface SubjectsFilterProps {
    subjects: string[]
    params: ClassDataFilter
    setParams: React.Dispatch<React.SetStateAction<ClassDataFilter>>
}


export const SubjectsFilter: React.FC<SubjectsFilterProps> = ({subjects, params, setParams}) => {
    // only allows for 1 subject to be selected at a time.

    return (
        <div id="subjectSelectWrapper">
            <label htmlFor="SubjectFilter" className="underline decoration-cyan-500 font-bold">Subject: </label>
            <select id="SubjectFilter"
                className="w-full bg-neutral-50 text-black outline-none rounded-sm focus:outline-cyan-600 focus:ring-cyan-600 focus:border-blue-500"
                onChange={(event) => {
                    setParams({...params, subject:event.target.value })
                }}
                defaultValue="All"

            >
                <option value="">All</option>
                {subjects.map((sub) => {
                    return <option key={sub} value={sub}>{sub}</option>
                })}
                
            </select>
        </div>
    )
}