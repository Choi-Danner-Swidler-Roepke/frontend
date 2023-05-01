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
        <div id="controls-wrapper" className="w-full flex bg-green-500" >
            <ul className="">
                <li> <SubjectsFilter    subjects={uniqueVals.subjects}       params={params} setParams={setParams} /> </li>
                <li> <CampusFilter      campuses={uniqueVals.campuses}       params={params} setParams={setParams} /> </li>
                <li> <DaysFilter        days={uniqueVals.days}               params={params} setParams={setParams} /> </li>
                <li> <TimesFilter       times={uniqueVals.times}             params={params} setParams={setParams} /> </li>
                <li> <InstructorsFilter instructors={uniqueVals.instructors} params={params} setParams={setParams} /> </li>
                <li> <AttributesFilter  attributes={uniqueVals.attributes}   params={params} setParams={setParams} /> </li>
                <li><button className="bg-red-400" onClick={clearParams}>Clear Filter</button></li>
            </ul>
        </div>
    )
}