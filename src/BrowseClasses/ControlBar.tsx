import { ClassDataFilter, ControlBarUniqueVals } from "../Types"
import { SubjectsFilter } from "./ControlBarFilters"

interface TableControlsProps {
    uniqueVals: ControlBarUniqueVals
    params: ClassDataFilter
    setParams: React.Dispatch<React.SetStateAction<ClassDataFilter>>
}


export const ControlBar: React.FC<TableControlsProps> = ({uniqueVals, params, setParams}) => {


    return (
        <div id="controls-wrapper" className="w-full">
            <ul className="flex justify-around">
                <SubjectsFilter subjects={uniqueVals.subjects} params={params} setParams={setParams} />
                <li>Campus</li>
                <li>Days</li>
                <li>Times</li>
                <li>Instructors</li>
                <li>Attributes</li>
            </ul>
        </div>
    )
}