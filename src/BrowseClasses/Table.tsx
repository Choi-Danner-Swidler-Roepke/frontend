import { useTable, Column, useSortBy } from 'react-table'
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
            { Header: 'CRN',            accessor: 'crn'       },
            { Header: 'Subject',        accessor: 'subject'   },
            { Header: 'Title',          accessor: 'title'     },
            { Header: 'Campus',         accessor: 'campus'    },
            { Header: 'Course Number',  accessor: 'number'    },
            { Header: 'Days',           accessor: 'days'      },
            { Header: 'Instructor',     accessor: 'instructor'}
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
     <div className='w-full shadow-2xl'>

      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                    className='bg-neutral-200'
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} className="bg-neutral-50 hover:bg-neutral-100 border overflow-auto">
              
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="border px-2 shadow-xl"
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
     </div>
   )
}