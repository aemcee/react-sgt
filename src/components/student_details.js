// create a class component
// render a div with a h1 that says student details
// in app.js create a route
// make the url be /student-details/1

import React, {Component} from 'react';
import NavLink from './nav_link';
import axios from 'axios';


class StudentDetails extends Component {

    // constructor(props){
    //     super(props);
    // }

    // studentExpand = (props) => {

    //     console.log('Clicked');
    //     return (
    //         <Link to={`/student-details/:${props.id}`}></Link>
    //     )
    // }
    
    state = {
        details: {}
    }

    async componentDidMount(){
        // console.log('student details props.match.params',this.props.match.params.id);
        console.log('student details props',this.props);
        console.log('student detials this.state',this.state);
        const { id } = this.props.match.params;
        const resp = await axios.get('/data/student_details.json');

        // console.log('detials resp in student_details.js',resp)

        let studentDetails = resp.data[id] || false;

        // make bad id false instead of undefined
        // if(!studentDetails){
        //     studentDetails = false;
        // }

        console.log('student Details',studentDetails);

        this.setState({
            details: studentDetails
        });

        console.log('student details props2',this.props);
        console.log('student detials this.state2',this.state);
    }

    render(){

        // alternatively assign an empty object so page is not undefined.
        // const { student = {} } = this.state.details;

        // optional chainning something new to use that is coming down the pipe
        // const student = this.state.details?.student; 
        
        if(this.state.details.classData){
            const { course, description, instructor } = this.state.details.classData;
            const { fullName, phone, email } = this.state.details.student;
            const { studentGrade } = this.state.details;
            console.log('render details', this.state.details.studentGrade);

            return(
                <div>
                    <h1>Student details</h1>
                    <NavLink color="blue darken-2" text="Student Table" to="/"></NavLink>
                    <div>
                        <h6>{`Course: ${course}`}</h6>
                        <ul>
                            <li>
                                {`Description: ${description}`}
                            </li>
                            <li>
                                {`Instructor: ${instructor}`}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6>{`Student: ${fullName}, Grade is: ${studentGrade}`}</h6>
                        <ul>
                            <li>
                                {`Phone: ${phone}`}
                            </li>
                            <li>
                                {`Email: ${email}`}
                            </li>
                        </ul>
                    </div>
    
                </div>
                
            )
        }
        return (
            <div>
                <h1>STUDENT DOES NOT EXIST</h1>
            </div>
        )
        

        // const {  }

        
    }
}

export default StudentDetails;