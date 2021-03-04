import React from "react"



function Search(props){
return (
<div><form className="d-flex">
<input className="form-control me-2" 
       type="search" 
       placeholder="Search" 
       aria-label="Search"
       onChange={props.handleInputChange}
       value={props.value}
       name="search"
       
       />
<button onClick={props.handleFormSubmit}className="btn btn-outline-success" type="submit">Search</button>
</form> 
</div>

);



}

export default Search;

