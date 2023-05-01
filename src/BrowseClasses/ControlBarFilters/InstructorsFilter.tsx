import { ClassDataFilter } from "../../Types"

interface InstructorsFilterProps {
    instructors: string[]
    params: ClassDataFilter
    setParams: React.Dispatch<React.SetStateAction<ClassDataFilter>>
}


export const InstructorsFilter: React.FC<InstructorsFilterProps> = ({instructors, params, setParams}) => {
    // only allows for 1 subject to be selected at a time.

    return (
        <div id="instructorsSelectWrapper">
            <label htmlFor="InstructorSelect">Instructor: </label>
            <select id="InstructorSelect" 
                onChange={(event) => {
                    setParams({...params, instructor: event.target.value}) 
                    }
                }
            >

                <option value="">All</option>
                {instructors.map((ins) => {
                    return <option key={ins} value={ins}>{ins}</option>
                })}

            </select>

        </div>
    )
}