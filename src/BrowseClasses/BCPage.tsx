import { Table } from "./Table"
import { useGetAllClasses } from "../useClasses"

export const BCPage: React.FC = () => {
    const {data, isLoading, isError} = useGetAllClasses()

    return (
        <div id="content-wrapper" className="bg-gradient-to-b from-cyan-500 to-blue-500 h-full w-full flex justify-center items-center">
            <div className="bg-slate-300 flex justify-center items-center h-5/6 w-5/6">
                <Table data={data} />
            </div>
        </div>
    )
}