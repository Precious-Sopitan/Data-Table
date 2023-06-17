import React from "react";
const Table = ({ fulldata }) => {
  return (
    <div className= ' w-screen h-screen flex justify-center items-center bg-blue-900' >
    <div className= ' w-[75%] h-[75%] flex justify-center bg-blue-400'>
      <table className='tg'>
        <thead>
          <tr className='heading'>
            <td>Serial No</td>
            <td>FullName</td>
            <td>Phone Number</td>
            <td>Email Address</td>
            <td>Street</td>
          </tr>
        </thead>
        {fulldata.map((data, index) => (
          <>
            <tbody>
              <tr key={data.id}>
                <td>{index}</td>
                <td>{data.name}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>
                  {data.address?.street} 
                 
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </div>
    </div>
  );
};
export default Table;