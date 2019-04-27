import React,{Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import Table from './table';
import AddStudent from './add_student';
import {Route} from 'react-router-dom';
import axios from 'axios';
import StudentDetails from './student_details';


// install react router dom
// setup routing
// create 2 class components
// add student and table
// setup route for table to be displayed on home route /
// addStudent to be displayed on /add-student

// const App = () => (
//     <div className="container">
//         {/* <ul>
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/addstudent">Add Student</Link>
//             </li>
//         </ul> */}
//          <Link to="/">Home</Link>
//          <Link to="/addstudent">Add Student</Link>
//         <Route exact path="/" component={Table}></Route>
//         <Route path="/addstudent" component={AddStudent}></Route>
//     </div>
// );

// this is just for development
let tempId = 100;

class App extends Component {


    constructor(props){
        super(props);

        this.state = {
            studentVariable: null,
        }

        this.createStudent = this.createStudent.bind(this);
    }

    // state = {
    //     studentVariable: null
    // }

    createStudent(student){
        // console.log('App.js Student', student);
        student.id = tempId++;
        student.grade = parseFloat(student.grade);
        this.setState({
            studentVariable: [...this.state.studentVariable,student]
        });
    }

    componentDidMount(){
        this.getStudents();
    }

    getStudents(){
        axios.get("/data/student_grades.json").then((resp)=>{
            // console.log('response',resp.data.studentGrades);

            this.setState({
                studentVariable: resp.data.studentGrades
                // studentVariable: []
            });
        })
    }

    // render(){
    //     return(
    //     <div className="container">
    //         {/* <ul>
    //             <li>
    //                 <Link to="/">Home</Link>
    //             </li>
    //             <li>
    //                 <Link to="/addstudent">Add Student</Link>
    //             </li>
    //         </ul> */}
    //         <Link to="/">Home</Link>
    //         <Link to="/addstudent">Add Student</Link>
    //         <Route exact path="/" component={Table}></Route>
    //         <Route path="/addstudent" component={AddStudent}></Route>
    //     </div>
    //     )
    // }

    render(){

        console.log('app.js this.state',this.state);

        return(
            <div className="container">
                {/* <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/addstudent">Add Student</Link>
                    </li>
                </ul> */}
                {/* <Link to="/">Home</Link>
                <Link to="/add_student">Add Student</Link> */}
                <Route exact path="/" render={(routingProps) => {
                    return <Table {...routingProps} studentVariable={this.state.studentVariable}/>
                }}/>
                <Route path="/add_student" render={(routingProps)=> {
                    return <AddStudent {...routingProps} add={this.createStudent}/>
                }}/>
                {/* <Route path="/student-details" render={() => {
                    return <StudentDetails/>
                }}/> */}
                <Route path="/student-details/:id" component={StudentDetails}/>
            </div>
        )
    }
};

export default App;
