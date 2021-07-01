import React from 'react'
import {AgGridColumn, AgGridReact} from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const Userdetails = () => {
    const usersdata = JSON.parse(localStorage.getItem("users_data"));
    console.log(usersdata); 
    return (
                    <div className="ag-theme-alpine w-full h-screen">
                       <AgGridReact
                           rowData={usersdata}>
                           <AgGridColumn field="phone_number" sortable={ true }></AgGridColumn>
                           <AgGridColumn field="Real_name" sortable={ true }></AgGridColumn>
                           <AgGridColumn field="email" sortable={ true }></AgGridColumn>
                           <AgGridColumn field="bank_acc" sortable={ true }></AgGridColumn>
                           <AgGridColumn field="ifsc" sortable={ true }></AgGridColumn>
                           <AgGridColumn field="coins" sortable={ true }></AgGridColumn>    
                       </AgGridReact>
                   </div>
                    )
}
export default Userdetails
