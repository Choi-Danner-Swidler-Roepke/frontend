import { classes } from "./fakeData"
import { Table } from "./Table"

export const BCPage: React.FC = () => {

    console.log(classes)
    // classes will be fetched here and passed to Table

    return (
        <div className="bg-slate-300 flex justify-center items-center h-full w-full">
            <Table data={classes} />
        </div>
    )
}