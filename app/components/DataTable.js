import React from "react";
import CheckboxInput from "@/app/components/inputs/CheckboxInput";

const DataTable = ({
                     items,
                     headers,
                     TableRow,
                     pageSize: PageSize = 10,
                     paginationDetails,
                     setSearchParam,
                     setSelectAll
                   }) => {
  return (
    (<>
      <div className="flex flex-col overflow-x-auto relative sm:rounded-lg py-2">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-4 whitespace-nowrap">
                      <div className="flex items-center max-w-fit">
                        <CheckboxInput setState={setSelectAll} label='selectAll' extraClasses='hidden'/>
                      </div>
                    </th>
                    {headers.map((item, index)=>{
                      return(<th
                        key={index}
                        scope="col"
                        className="py-3 px-4 whitespace-nowrap"
                      >
                        <div className="flex items-center max-w-fit">
                          {item}
                        </div>
                      </th>)
                    })}
                    <th
                      key='Actions'
                      scope="col"
                      className="px-3 py-3.5  whitespace-nowrap hidden sm:block  text-left font-chivo text-wwlBlack bg-wwlWhite sm:pl-6 transition-colors duration-300"
                    >
                      <div className="flex items-center">
                        Actions
                      </div>
                    </th>

                  </tr>
                  </thead>
                  <tbody
                    className="divide-y divide-wwlGray200 sm:divide-wwlGreenTransparent bg-wwlWhite">
                  {items.map((item, index) => (
                    <TableRow key={item._id} item={item} index={index}/>))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      </div>
      {/*<Pagination*/}
      {/*  currentPage={Number(paginationDetails.currentPage)}*/}
      {/*  totalCount={paginationDetails.totalCount}*/}
      {/*  pageSize={PageSize}*/}
      {/*  onPageChange={(page) => {*/}
      {/*    setSearchParam({page});*/}
      {/*  }}*/}
      {/*/>*/}
    </>)
  )
}


export default DataTable;