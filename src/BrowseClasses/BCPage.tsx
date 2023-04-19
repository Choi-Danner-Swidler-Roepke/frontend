import { useState, useMemo, useEffect } from "react"
import { ClassData, ClassDataFilter } from "../Types"
import { useFetchClasses } from "./useFetchClasses"
import { Table } from "./Table"
import { ControlBar } from "./ControlBar"
import { getUniqueForControlBar } from "./Utils"

export const BCPage: React.FC = () => {
    // init state
    const [params, setParams] = useState<ClassDataFilter>({
        subject: [],
        campus: [],
        days: [],
        time: [],
        instructor: [],
        attribute: []
    })


    // this hook will run every time BCPage rerenders. 
    // aka data is fetched every time params changes.
    const {fetchedData, isLoading, isError}  = useFetchClasses(params)

    const controlBarVals = getUniqueForControlBar(fetchedData)
    // const controlBarVals = useMemo(() => getUniqueForControlBar(fetchedData), [])


    return (
        <div id="content-wrapper" className="h-full w-full flex justify-center items-center">
            <div className="ml-24 bg-slate-300 flex flex-col justify-center items-center h-5/6 w-5/6">
                <ControlBar uniqueVals={controlBarVals} params={params} setParams={setParams} />
                <Table data={fetchedData} />
            </div>
        </div>
    )
}