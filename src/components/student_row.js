import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from'react-router-dom';
// import StudentDetails from './student_details';
// import { link } from 'fs';
import {Route,Link} from'react-router-dom';

const StudentRow = props => {

    console.log('student row props',props);

    return (
        // <tr onClick={() => props.history.push(`/student-details/${props.id}`)}>
        //     <td>{props.id}</td>
        //     <td>{props.name}</td>
        //     <td>{props.course}</td>
        //     <td>{props.grade}</td>
        // </tr>  
    <tr className="student-row" onClick={props.seeDetails}>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.course}</td>
        <td>{props.grade}</td>
    </tr>  
    )
}

StudentRow.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    grade: PropTypes.number
}

StudentRow.defaultProps = {
    grade: 0
}

export default withRouter(StudentRow);
// export default StudentRow;
