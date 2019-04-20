import React from 'react';
import PropTypes from 'prop-types';

const StudentRow = props => {
    return (
        <tr>
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

export default StudentRow;
