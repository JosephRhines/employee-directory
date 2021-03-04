import React from "react";


function EmployeeOrg (props) {
    return (
        
     
        <div className ="container">
            
            
          <div className="row">
              <div className="col-md-2">
                  <p><img src={props.thumbnail} className="thumbnail"></img></p>
              </div>
              <div className="col-md-2">
                  <p>{props.firstName} {props.lastName}</p>
              </div>
              <div className="col-md-2">
                  <p>{props.phone}</p>
              </div>
              <div className="col-md-4">
                  <p>{props.email}</p>
              </div>
              <div className="col-md-2">
                  <p>{props.age}</p>
              </div>
          </div>
          <hr></hr>
        </div>
        
        
        
        
        
              

    )
}

export default EmployeeOrg;