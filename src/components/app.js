import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.scss';
import Table from './table';
import AddStudent from './add_student';
import {Route, Link} from 'react-router-dom';


// install react router dom
// setup routing
// create 2 class components
// add student and table
// setup route for table to be displayed on home route /
// addStudent to be displayed on /add-student

const App = () => (
    <div className="container">
        {/* <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/addstudent">Add Student</Link>
            </li>
        </ul> */}
         <Link to="/">Home</Link>
         <Link to="/addstudent">Add Student</Link>
        <Route exact path="/" component={Table}></Route>
        <Route path="/addstudent" component={AddStudent}></Route>
    </div>
);

export default App;
