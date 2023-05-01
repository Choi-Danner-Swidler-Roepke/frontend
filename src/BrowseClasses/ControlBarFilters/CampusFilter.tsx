import { ClassDataFilter } from "../../Types"

interface CampusFilterProps {
    campuses: string[]
    params: ClassDataFilter
    setParams: React.Dispatch<React.SetStateAction<ClassDataFilter>>
}


export const CampusFilter: React.FC<CampusFilterProps> = ({campuses, params, setParams}) => {
    // only allows for 1 subject to be selected at a time.

    return (
        <div id="campusSelectWrapper">
            <label htmlFor="CampusSelect">Campus: </label>
            <select id="CampusSelect" 
                onChange={(event) => {
                    setParams({...params, campus: event.target.value}) 
                    }
                }
            >

                <option value="">All</option>
                {campuses.map((camp) => {
                    return <option key={camp} value={camp}>{camp}</option>
                })}

            </select>

        </div>
    )
}