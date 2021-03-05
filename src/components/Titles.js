import React from "react";

function Titles(props){
 return(

<div className="row">
                <div className="col-md-2">
                    <p><strong>Image</strong></p>
                </div>
              <div className="col-md-2">
                  <p><strong>Name</strong></p>
              </div>
              <div className="col-md-2">
                  <p><strong>Phone</strong></p>
              </div>
              <div className="col-md-4">
                  <p><strong>Email</strong></p>
              </div>
              <div className="col-md-2"onClick={() => props.sort("age")}>
                  <p><strong>Age</strong></p>
              </div>

            </div>
 )}
export default Titles;