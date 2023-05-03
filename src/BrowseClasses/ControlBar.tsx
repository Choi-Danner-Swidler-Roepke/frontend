import { ClassDataFilter, ControlBarUniqueVals } from "../Types"
import {SubjectsFilter, AttributesFilter, CampusFilter, DaysFilter, InstructorsFilter, TimesFilter} from "./ControlBarFilters"
import { emptyFilterLiteral } from "./Utils"

interface TableControlsProps {
    uniqueVals: ControlBarUniqueVals
    params: ClassDataFilter
    setParams: React.Dispatch<React.SetStateAction<ClassDataFilter>>
}


export const ControlBar: React.FC<TableControlsProps> = ({uniqueVals, params, setParams}) => {
    function clearParams() { 
        setParams(emptyFilterLiteral)
        const selects = document.querySelectorAll('select');
        selects.forEach((select) => {
            select.selectedIndex = 0;
        });
    }
    
    return (
        <div id="wrapper" className="w-full p-2 border-2 bg-gray-700 rounded-lg mb-4 shadow-xl text-white sticky">
            <ul className="w-full max-w-full flex bg-gray-700 rounded-lg">
                <li className="w-1/6 mx-1"> <SubjectsFilter    subjects={uniqueVals.subjects}       params={params} setParams={setParams} /> </li>
                <li className="w-1/6 mx-1"> <CampusFilter      campuses={uniqueVals.campuses}       params={params} setParams={setParams} /> </li>
                <li className="w-1/6 mx-1"> <DaysFilter        days={uniqueVals.days}               params={params} setParams={setParams} /> </li>
                <li className="w-1/6 mx-1"> <TimesFilter       times={uniqueVals.times}             params={params} setParams={setParams} /> </li>
                <li className="w-1/6 mx-1"> <InstructorsFilter instructors={uniqueVals.instructors} params={params} setParams={setParams} /> </li>
                <li className="w-1/6 mx-1"> <AttributesFilter  attributes={uniqueVals.attributes}   params={params} setParams={setParams} /> </li>
                <li className="w-1/6 mx-1"> <button className="bg-red-700 w-full h-full rounded-md hover:bg-red-500" onClick={clearParams}>Clear Filter</button></li>
            </ul>
        </div>
    )
}