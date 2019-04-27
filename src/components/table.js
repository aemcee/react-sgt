import React, {Component} from 'react';
// import 'materialize-css/dist/css/materialize.min.css';
// import axios from 'axios';
import StudentRow from './student_row';
import NavLink from './nav_link';

// In Table, create a getStudents method
// Use axios to call the dummy data file. 
// - GET request to the URL "/data/student_grades.json"
// Call getStudent once the componet is added to the DOM
// In the render method loop over student data to build rows

class Table extends Component{

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         studentVariable: [],
    //     }

    // }

    // // state = {
    // //     studentVariable: null
    // // }

    // componentDidMount(){
    //     this.getStudents();
    // }

    goToDetails(id){
        // console.log('id',id);
        // console.log('this of goToDetails',this);
        // console.log('this.props',this.props);
        // console.log('this.props.history before',this.props.history);
        this.props.history.push(`/student-details/${id}`);
        // console.log('this.props.history after',this.props.history);
    }

    renderTable(){

        console.log('renderTable this.props',this.props);
        const {studentVariable} = this.props;

        if(!studentVariable){
            return <h1 className="center">Loading Student Data</h1>
        }

        if(!studentVariable.length){
            return <h1 className="center">No Student Data</h1>
        }

        const studentTemp = studentVariable.map((value,index) => {
            console.log('student variable value',value);
            // console.log('index',index);
            
            return (
                // <tr key={index}>
                //     <td>{value.id}</td>
                //     <td>{value.name}</td>
                //     <td>{value.course}</td>
                //     <td>{value.grade}</td>
                // </tr>  
                <StudentRow key={value.id} {...value} seeDetails={() => this.goToDetails(value.id)} />
                // <StudentRow key={value.id} {...value}  />
            )
        })

        return (
            <table className="striped student-table">
            <thead  className="#01579b light-blue darken-4">
                <tr className="white-text">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                    <td>0</td>
                    <td>Bob</td>
                    <td>Applied Mathematics</td>
                    <td>75</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Craig</td>
                    <td>Applied Mathematics</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Greg</td>
                    <td>Applied Mathematics</td>
                    <td>100</td>
                </tr> */}
                {studentTemp}
            </tbody>
        </table>
        )

    }

    // getStudents(){
    //     axios.get("/data/student_grades.json").then((resp)=>{
    //         console.log('response',resp.data.studentGrades);

    //         this.setState({
    //             studentVariable: resp.data.studentGrades
    //             // studentVariable: []
    //         });
    //     })
    // }

    render(){
        return (
            <div className="center">
                <h1>Student Grade Table</h1>
                <NavLink color="blue darken-2" text="Add Student" to="/add_student"/>
                {this.renderTable()}
            </div>
        )
    }
}

export default Table;