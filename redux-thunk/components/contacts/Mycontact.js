import React from 'react'
import { useSelector } from 'react-redux';

const Mycontact = () => {

    const mycontacts = useSelector(state => state.ContactReducer);

    console.log(mycontacts);
    return (
        <div className="container">
           
            <table className="table">
                <thead>
                    <tr>
                        <th><div className="form-check">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" value="" style={{ marginTop: "-11px" }} />
                            </label>
                        </div></th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mycontacts.map((users)=>{
                            return <tr >
                                    <td>{users.id}</td>
                                    <td>{users.name}</td>
                                    <td>{users.phone}</td>
                                    <td>{users.email}</td>
                                    </tr>

                            
                        })
                    }
                  
                </tbody>
            </table>
        </div>
    )
}

export default Mycontact
