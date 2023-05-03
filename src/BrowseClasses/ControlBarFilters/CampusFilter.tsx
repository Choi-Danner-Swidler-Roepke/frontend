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
            <label htmlFor="CampusSelect" className="underline decoration-cyan-500 font-bold">Campus: </label>
            <select id="CampusSelect" 
                className="w-full bg-neutral-50 text-black outline-none rounded-sm focus:outline-cyan-600 focus:ring-cyan-600 focus:border-blue-500"
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