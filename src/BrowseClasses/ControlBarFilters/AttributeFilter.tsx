import { ClassDataFilter } from "../../Types"

interface AttributeFilterProps {
    attributes: string[]
    params: ClassDataFilter
    setParams: React.Dispatch<React.SetStateAction<ClassDataFilter>>
}


export const AttributesFilter: React.FC<AttributeFilterProps> = ({attributes, params, setParams}) => {
    // only allows for 1 subject to be selected at a time.

    return (
        <div id="attributesSelectWrapper" className="w-full">
            <label htmlFor="AttributesSelect" className="underline decoration-cyan-500 font-bold">Attributes: </label>
            <select 
                className="w-full bg-neutral-50 text-black outline-none rounded-sm focus:outline-cyan-600 focus:ring-cyan-600 focus:border-blue-500"
                id="AttributesSelect" 
                onChange={(event) => {
                    setParams({...params, attribute: event.target.value}) 
                    }
                }
            >

                <option value="">All</option>
                {attributes.map((attr) => {
                    return <option key={attr} value={attr}>{attr}</option>
                })}

            </select>

        </div>
    )
}