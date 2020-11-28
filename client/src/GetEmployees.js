import React from 'react'

export default function GetEmployees(props) {

    return (
        <>
          <div className="col-4 col-lg-2"></div>
          <div className="col-8 col-lg-3">
            <input placeholder="Search By Name" {...props} />
          </div>
          <div className="d-none d-lg-block col-lg-7"></div>
        </>
      );
    }


    
  
 