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
            <label htmlFor="SubjectFilter">Subject: </label>
            <select id="SubjectFilter"
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