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
        <div id="content-wrapper" className="flex md:flex-row gap-3 pt-5 px-24 flex-wrap gap-y-10 bg-gray-200 h-0.8 order-1">
            {/* This div is the header and subtitle for the page */}
                <div className="flex h-24 flex-wrap order-2 basis-1/2">
                    <h1 className="md:text-5xl text-2xl w-full font-bold md:leading-tight leading-snug text-cyan-600">
                        Browse Classes
                    </h1>
                    <h2 className="text-black md:w-2/3 md:py-1 leading-relaxed justify-start">
                        View and select classes for next semester
                    </h2>
                </div> 

            <div className="mx-24 bg-slate-300 flex flex-col justify-center items-center h-5/6 w-5/6 order-3 basis-full">
                <ControlBar uniqueVals={controlBarVals} params={params} setParams={setParams} />
                <Table data={fetchedData} />
            </div>
        </div>
    )
}