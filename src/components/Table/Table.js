import { useTable } from "react-table";
import { React, useMemo } from "react";
import "./table.css";

const Table = () => {


  const data = useMemo(
    () => [
      {
        quantity: "03",
        productId: "1001",
        name: "canvas 3-D",
        date: "2079/3/20",
        status: "verified",
        contact: "9845634281",
        price:"5000"

      },
      {
        quantity: "03",
        productId: "1001023",
        name: "canvas 3-D",
        date: "2079/3/20",
        status: "verified",
        contact: "9845634281",
        price:"5000",


      },
      {
        quantity: "03",
        productId: "1001023",
        name: "canvas 3-D",
        date: "2079/3/20",
        status: "verified",
        contact: "9845634281",       
         price:"5000",
      },
      {
        quantity: "03",
        productId: "1001023",
        name: "canvas 3-D",
        date: "2079/3/20",
        status: "verified",
        contact: "9845634281",
        price:"5000"

      },
      {
        quantity: "03",
        productId: "1001023",
        name: "canvas 3-D",
        date: "2079/3/20",
        status: "verified",
        contact: "9845634281",
        price:"5000"

      },
    ],

    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "Product ID",

        accessor: "productId", // accessor is the "key" in the data
      },
     
     
      {
        Header: " Product Name",

        accessor: "name",
      },
     
      {
        Header: "Date(Y/m/d)",

        accessor: "date",
      },
      {
        Header: "Contact No.",

        accessor: "contact",
      }, 
    
      {
        Header: "Price (NRs)",

        accessor: "price",
      },
      {
        Header: "Quantity",

        accessor: "quantity",
      },
      {
        Header: "Status (N/A)",

        accessor: "status",
      },
      // {
      //   Header: "Total",

      //   accessor: "total",
      // },
  
      
    ],

    []
  );
 

  const {
    getTableProps,

    getTableBodyProps,

    headerGroups,

    rows,

    prepareRow,
  } = useTable({ columns, data });
  /////////////////////////////////////////////////////
  return (
    <div className="Table">
      <div className="heading">
        <h3>Recent Orders</h3>
        <span>Last 48 hour</span>
      </div>
      <table {...getTableProps()}>
        <thead>
        {/* <input type="checkbox" name="" id="check" /> */}
        
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} 
                style={{ width:  "7rem", }}>
                  {column.render("Header")}
                </th> 

              ))}

            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} style={{ width:  "7rem" }}>
                     
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
