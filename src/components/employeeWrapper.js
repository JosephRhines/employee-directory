
import React, { Component } from "react";
import API from "../components/utils/API";
import Search from "./Search";

class  EmployeeContainer extends Component {
    state = {
        results: [],
        search: ""
    }


componentDidMount() {
    this.searchEmployee();
};

searchEmployee = () => {
    API.search()
    .then(res => {
        console.log(res.data)
        this.setState({ results: res.data.results })})
    
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

render() {
    return (
        <>
        <div>
            <Search value={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}
            
            />
            
        </div>
        <div>
            {this.state.results.map(emp =>(
                <p>{emp.name.first}</p>
               
               
            ))}
           </div>
        </>
       

        
    )
}
}

export default EmployeeContainer;