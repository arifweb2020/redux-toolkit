import React from 'react'

const Table = ({mydata}) => {
    return (
        <div>
            <tr >
                                    {/* <td>{mydata.id}</td> */}
                                    <td>{mydata.name}</td>
                                    <td>{mydata.email}</td>
                                    <td>{mydata.phone}</td>
                                    </tr>
        </div>
    )
}

export default Table
