import { useState, useMemo, useEffect } from "react"
import { ClassData, ClassDataFilter, ControlBarUniqueVals } from "../Types"
import { Table } from "./Table"
import { ControlBar } from "./ControlBar"
import { emptyFilterLiteral, filterData, getUniqueForControlBar, isFilterEmpty } from "./Utils"
import { useRecoilState } from "recoil"
import { classState } from "../recoil/classData"

export const BCPage: React.FC = () => {
    // data state
    const [immutableFetchedData, setImmutableFetchedData] = useRecoilState(classState)
    const [selectedData, setSelectedData] = useState<ClassData[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    // controlBar values
    const [controlBarVals, setControlBarVals] = useState<ControlBarUniqueVals | null>(null)

    // params state
    const [params, setParams] = useState<ClassDataFilter>(emptyFilterLiteral)

    // ON PAGE INIT, fetch data to put in global state.
    useEffect(() => {
        async function getData(){
            try {
                const response = await fetch('https://fhzfdbup3c.execute-api.us-east-1.amazonaws.com/dev/new')
                const resData = await response.json()

                setImmutableFetchedData(resData)
                setSelectedData(resData)
                setControlBarVals(getUniqueForControlBar(resData))
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])
    
    // WHEN PARAMS CHANGE, filter data accordingly. JSON.stringify(params) notices changes in params list properties, that would otherwise be missed (because list reference never changes)
    useEffect(() => {
        // if filter is empty, reset data to all. else, filter it
        if (isFilterEmpty(params)) {
            setSelectedData(immutableFetchedData)
        } else {
            console.log('filtering')
            const filteredData = filterData(immutableFetchedData, params)
            setSelectedData(filteredData)
        }
    }, [params])
    
    // WHEN SELECTED SUBJECT CHANGES, update the values in the control bar.
     useEffect(() => {
        if (selectedData) {
            // first reset all the selects to be blank, excluding the subject select dropdown
            const selects = document.querySelectorAll('select')
            const slicedSelects = Array.from(selects).slice(1)
            slicedSelects.forEach((select) => {
                select.selectedIndex = 0
            }); 
            setParams({...emptyFilterLiteral, subject: selects[0].value}) // ew this is gross code

            // init for new subject
            const filteredData = filterData(immutableFetchedData, params)
            setControlBarVals(getUniqueForControlBar(filteredData))
            console.log('params.subejct chanbged')
        }
     }, [params.subject])

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

            <div className="mx-24 bg-slate-300 flex flex-col justify-center items-center h-5/6 w-5/6 order-3 basis-full outline-dashed outline-4">
                {selectedData && controlBarVals &&
                    <>
                        <ControlBar uniqueVals={controlBarVals} params={params} setParams={setParams} /> 
                        <Table data={selectedData} />
                    </>
                }
            </div>
        </div>
    )
}