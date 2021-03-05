
import React, { Component } from "react";
import API from "../components/utils/API";
import Search from "./Search";
import EmployeeOrg from "./EmployeeOrg";
import Titles from "./Titles";

class  EmployeeContainer extends Component {
    state = {
        results: [],
        organized: [],
        search: ""
    }


componentDidMount() {
    this.getEmployees();
};

getEmployees = () => {
    API.search()
    .then(res => {
        console.log(res.data)
        this.setState({ results: res.data.results, organized: res.data.results })})
    
    .catch(err => console.log(err));
};

handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
        [name]: value
    });
};

handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
};

searchEmployee = filter => {
    const copy = this.state.results.filter(result =>{
      let mystring = ""+result.email+result.dob
      return mystring.includes(filter.toLowerCase())
})
    this.setState({
        organized: copy
    })
}
handlesort = (field) => {
    this.setState({
         organized: this.state.organized.sort((a, b) => {
              return a[field]-b[field]
          })
     })
}
render() {
    return (
        <>
        <div className="container">
        <Search value={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
        </div>
        <br></br>
        <div className="container">
            <Titles sort={this.handlesort}/>
        </div>
        <div>
            {this.state.organized.map(emp =>(
               <EmployeeOrg
                 thumbnail={emp.picture.thumbnail}
                 firstName={emp.name.first}
                 lastName={emp.name.last}
                 phone={emp.phone}
                 email={emp.email}
                 age={emp.dob.age}
                 key={emp.id}
                 />
                 ))}
              
        </div>
          </>
            )
        }
        }
             
             export default EmployeeContainer;

               


               
               
            
            
            
       

        