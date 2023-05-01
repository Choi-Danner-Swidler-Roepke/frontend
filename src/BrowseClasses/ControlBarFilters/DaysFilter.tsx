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
            <label htmlFor="DaysSelect">Days: </label>
            <select id="DaysSelect" 
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