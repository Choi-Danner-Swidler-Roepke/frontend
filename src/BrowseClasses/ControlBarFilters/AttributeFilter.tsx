import { ClassDataFilter } from "../../Types"

interface AttributeFilterProps {
    attributes: string[]
    params: ClassDataFilter
    setParams: React.Dispatch<React.SetStateAction<ClassDataFilter>>
}


export const AttributesFilter: React.FC<AttributeFilterProps> = ({attributes, params, setParams}) => {
    // only allows for 1 subject to be selected at a time.

    return (
        <div id="attributesSelectWrapper" className="flex w-full">
            <label htmlFor="AttributesSelect">Attributes: </label>
            <select 
                className="w-1/2"
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