import { useEffect, useState } from "react";
import { ClassData } from "./Types";

interface GetAllClassesReturn {
    data: ClassData[]
    isLoading: boolean
    isError: string
}

const useGetAllClasses = (): GetAllClassesReturn => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setError] = useState<string>("")
    const [data, setData] = useState<ClassData[]>([])

    // fetch data
    useEffect(() => {
        async function fetchData(){
            try {
                setIsLoading(true)
                const response = await fetch('http://18.191.134.148:8080/')
                const fetchedData = await response.json()

                setData(fetchedData)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return {data, isLoading, isError}
}

export {useGetAllClasses}