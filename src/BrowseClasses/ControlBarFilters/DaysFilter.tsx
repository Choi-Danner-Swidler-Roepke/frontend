import { ClassDataFilter } from "../../Types"

interface DaysFilterProps {
    days: string[]
    params: ClassDataFilter
    setParams: React.Dispatch<React.SetStateAction<ClassDataFilter>>
}


export const DaysFilter: React.FC<DaysFilterProps> = ({days, params, setParams}) => {
    // only allows for 1 subject to be selected at a time.

    return (
        <div id="daysSelectWrapper">
            <label htmlFor="DaysSelect" className="underline decoration-cyan-500 font-bold">Days: </label>
            <select id="DaysSelect" 
                className="w-full bg-neutral-50 text-black outline-none rounded-sm focus:outline-cyan-600 focus:ring-cyan-600 focus:border-blue-500"
                onChange={(event) => {
                    setParams({...params, days: event.target.value}) 
                    }
                }
            >

                <option value="">All</option>
                {days.map((day) => {
                    return <option key={day} value={day}>{day}</option>
                })}

            </select>

        </div>
    )
}