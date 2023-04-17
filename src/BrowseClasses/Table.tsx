import { useTable, Column, useSortBy, useSortBy } from 'react-table'
import { useMemo } from "react"
import { ClassData } from '../Types'

interface TableProps {
    data: ClassData[]
}

export const Table: React.FC<TableProps> = ({data}) => {
    // Header: Visible label of table columns
    // Accessor: Corresponding definition in Types.ts
    const columns: Column[] = useMemo(
        () => [
            { Header: 'CRN',            accessor: 'crn'         },
            { Header: 'Subject',        accessor: 'subject'     },
            { Header: 'Title',          accessor: 'title'       },
            { Header: 'Course Number',  accessor: 'course'      },
            { Header: 'Days',           accessor: 'days'        },
            { Header: 'Instructor',     accessor: 'instructor'  }
        ],
        []
    )

     const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data }, useSortBy)

return (
  
     <table {...getTableProps()} className="bg-blue-500 shadow-xl rounded-lg w-full h-full">
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map((column:any) => (
               <th
                 {...column.getHeaderProps(column.getSortByToggleProps())}
                  className='bg-neutral-200'
               >
                 {column.render('Header')}
                 <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : "↕️"}
                 </span>
               </th>


             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map((row, i) => {
           prepareRow(row)
           // Properties of the rows
           return (
             <tr {...row.getRowProps()} className="bg-neutral-50 hover:bg-neutral-100 border">
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     className="border px-3 shadow-xl"
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
}