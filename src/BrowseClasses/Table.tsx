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
          { Header: 'Subject',        accessor: 'subject'   },
          { Header: 'Title',          accessor: 'title'     },
          { Header: 'Course Number',  accessor: 'number'    },
          { Header: 'CRN',            accessor: 'crn'       },
          { Header: 'Campus',         accessor: 'campus'    },
          { Header: 'Days',           accessor: 'days'      },
          { Header: 'Start',          accessor:  'start_time'},
          { Header: 'End',            accessor:  'end_time'},
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
     <div className='w-full shadow-2xl text-black p-2  bg-gray-700 rounded-lg'>

      <table {...getTableProps()} className="w-full border-collapse">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                    className='bg-neutral-200 border border-neutral-300, w-1/12'
                >
                  {column.render('Header')}
                </th>
              ))}
              {/* checkbox column */}
              <th className='bg-neutral-200 border border-neutral-300 w-1/12'>Add Class</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} className={`border border-neutral-300 ${index % 2 === 0 ? 'bg-neutral-50' : 'bg-neutral-200'} hover:bg-cyan-50`}>
              
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className='border-x border-x-neutral-300'
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
                {/* checkbox functionality for each row */}
                <td 
                    className='border-x border-x-neutral-300'
                >
                  <input type="checkbox"
                    className='w-full'
                    onChange={() => toggleClass(data[index])}
                    checked={isChecked(data[index].id)}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
     </div>
   )
}