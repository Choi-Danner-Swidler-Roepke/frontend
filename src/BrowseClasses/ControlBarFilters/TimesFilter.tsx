import { ClassDataFilter } from "../../Types"

interface TimesFilterProps {
    times: string[]
    params: ClassDataFilter
    setParams: React.Dispatch<React.SetStateAction<ClassDataFilter>>
}


export const TimesFilter: React.FC<TimesFilterProps> = ({times, params, setParams}) => {
    // only allows for 1 subject to be selected at a time.

    return (
        <div id="timesSelectWrapper">
            <label htmlFor="timesSelect">Time: </label>
            <select id="timesSelect" 
                onChange={(event) => {
                    setParams({...params, time: event.target.value}) 
                    }
                }
            >

                <option value="">All</option>
                {times.map((time) => {
                    return <option key={time} value={time}>{time}</option>
                })}

            </select>

        </div>
    )
}