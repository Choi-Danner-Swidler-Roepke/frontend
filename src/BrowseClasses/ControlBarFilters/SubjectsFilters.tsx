import { useEffect, useState } from "react"
import { ClassDataFilter } from "../../Types"

interface SubjectsFilterProps {
    subjects: string[]
    params: ClassDataFilter
    setParams: React.Dispatch<React.SetStateAction<ClassDataFilter>>
}


export const SubjectsFilter: React.FC<SubjectsFilterProps> = ({subjects, params, setParams}) => {
    // only allows for 1 subject to be selected at a time.

    console.log(subjects)

    return (
        <>
            {/* <div id="checkbox-group">

                <input type="checkbox" name="MATH" value="MATH" />
                <label htmlFor="MATH">Math</label>

                <input type="checkbox" name="CS" value="CS" />
                <label htmlFor="CS">CS</label>
            </div> */}
            
            <select name="Subject" 
                onChange={(event) => {
                    // setSelectedValue(event.target.value)
                    setParams({...params, subject:[event.target.value] })
                }}

            >
                {subjects.map((sub) => {
                    return <option value={sub}>{sub}</option>
                })}
                
            </select>
        </>
    )
}