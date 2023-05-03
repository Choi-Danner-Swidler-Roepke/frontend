import { useTable, Column, useSortBy } from 'react-table'
import { useMemo } from "react"
import { ClassData } from '../Types'
import { useRecoilState } from 'recoil'
import { checkedData } from '../recoil/classData'

interface TableProps {
    data: ClassData[]
}

export const Table: React.FC<TableProps> = ({data}) => {

  // checkbox things
  const [checkedClasses, setCheckedClasses] = useRecoilState(checkedData)

  function isChecked(id: number): boolean {
    // check if course is in checkedClasses by scanning for a matching id.
    let checked = false
    checkedClasses.forEach(course => {
      if (course.id == id) checked = true
    });

    return checked
  }

  function toggleClass(c: ClassData): void {
    // updates the checkedClasses state list by either adding or removing class to the state.
    const newState = [...checkedClasses]
    const currentlyChecked = isChecked(c.id)
    if (currentlyChecked) {
      // if it is there already, remove it.
      const index = newState.indexOf(c)
      newState.splice(index, 1)
    } else {
      // otherwise add class to list
      newState.push(c)
    }
    
    setCheckedClasses(newState)
  }


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
          { Header: 'Instructor',     accessor: 'instructor'},
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
              {/* checkbox column */}
              <th className='bg-neutral-200'>Add Class</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
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
                {/* checkbox functionality for each row */}
                <td><input type="checkbox"
                  onChange={() => toggleClass(data[index])}
                  checked={isChecked(data[index].id)}
                /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
     </div>
   )
}