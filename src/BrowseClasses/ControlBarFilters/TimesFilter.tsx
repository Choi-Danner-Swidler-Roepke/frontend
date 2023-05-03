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
            <label htmlFor="timesSelect" className="underline decoration-cyan-500 font-bold">Time: </label>
            <select id="timesSelect" 
                className="w-full bg-neutral-50 text-black outline-none rounded-sm focus:outline-cyan-600 focus:ring-cyan-600 focus:border-blue-500"
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