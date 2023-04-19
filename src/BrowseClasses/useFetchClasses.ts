import { useEffect, useState } from "react";
import { ClassData, ClassDataFilter } from "../Types";
import { isFilterEmpty } from "./Utils";

interface  FetchClassesReturn{
    fetchedData: ClassData[]
    isLoading: boolean
    isError: string
}

// this is giving me issues.
// why is it re rendering so many times??
const useFetchClasses = (filterParams: ClassDataFilter): FetchClassesReturn => {
    const hasNoParams = isFilterEmpty(filterParams)
    hasNoParams ? console.log('getData') : console.log('getFilterdData')

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setError] = useState<string>("")
    const [fetchedData, setFetchedData] = useState<ClassData[]>([])

    // if filterParams, then post request
    // else get request
    useEffect(() => {
        async function getData(){
            try {
                setIsLoading(true)
                const response = await fetch('https://fhzfdbup3c.execute-api.us-east-1.amazonaws.com/dev/new')
                const resData = await response.json()

                setFetchedData(resData)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        async function getFilteredData(){
            try {
                setIsLoading(true)
                const response = await fetch('https://fhzfdbup3c.execute-api.us-east-1.amazonaws.com/dev/new/filter', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(filterParams)
                })
                const resData = await response.json()

                setFetchedData(resData)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }

        }

        if (hasNoParams) {
            getData()
        } else {
            console.log(filterParams)
            getFilteredData()
        }
    }, [filterParams])

    return {fetchedData, isLoading, isError}
}

export {useFetchClasses}