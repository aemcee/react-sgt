import React, {Component} from 'react';
import Input from './input';
import NavLink from './nav_link';

// Buld a form for new students with the following inputs:
// - Name, Course, Grade,
// When submitted console.logs the new student info

class AddStudent extends Component{

    constructor(props){
        super(props);

        this.state = {
            form: {
                name: '',
                course: '',
                grade: ''
            }
        }

    }

    reset = () => {
        this.setState({
            form: {
                name: '',
                course: '',
                grade: ''
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log('Submit Registered',this.state.form);

        // prevent mutating the state
        this.props.add({...this.state.form});

        // can use to redirect without clicking a link???
        this.props.history.push('/');
        this.reset();
    }

    handleInputChange = (event) => {
        const {form} = this.state;
        const {value,name} = event.target;
        // console.log('event.target',event.target.value);
        // console.log('typeof(value)',typeof(value));
        // console.log('form1',form);
        // console.log('this.state1',this.state.form);
       
        form[name]=value;
        // console.log('form[name]',form[name]);
        // console.log('{...form}',{...form});
        // console.log('form2',form);
        // console.log('this.state2',this.state.form);
        this.setState({
            form: {...form}
        });
    }

    renderForm(){

        const {name,course,grade} = this.state.form;

        // console.log('student',student);

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    {/* <div className="input-field col s12">
                        <input onChange={this.handleInputChange} value={name} name="name" type="text" autoComplete="off" id="std"></input>
                        <label htmlFor="std">Input Student</label>
                    </div> */}
                    {/* <Input onChange={this.handleInputChange} value={student} name={`${props.form}`} type="text" autoComplete="off" id="std"></Input> */}
                    <Input onChange={this.handleInputChange} value={name} name="name" type="text" autoComplete="off" id="std" label="Input Student"></Input>
                </div>
                <div className="row">
                    {/* <div className="input-field col s12">
                        
                        <input onChange={this.handleInputChange} value={course} name="course" type="text" autoComplete="off" id="crse"></input>
                        <label htmlFor="crse">Input Course</label>
                    </div> */}
                    <Input onChange={this.handleInputChange} value={course} name="course" type="text" autoComplete="off" id="crse" label="Input Course"></Input>
                </div>
                <div className="row">
                    {/* <div className="input-field col s12">
                    
                        <input onChange={this.handleInputChange} value={grade} name="grade" type="text" autoComplete="off" id="grd"></input>
                        <label htmlFor="grd">Input Grade</label>
                    </div> */}
                    <Input onChange={this.handleInputChange} value={grade} name="grade" type="number" autoComplete="off" id="grd" label="Input Grade"></Input>
                </div>
                <div>
                    <button className="btn">Add Student</button>
                    <button className="btn" type="button" onClick={this.reset}>Clear Form</button>
                </div>
            </form>
        )
    }

    render(){

        console.log('addstudent render this.props',this.props);
        console.log('add student render value of this',this);
        return (
            <div className="center">
                <h1>Add Student</h1>
                <NavLink color="blue darken-2" text="Student Table" to="/"></NavLink>
                {this.renderForm()}
            </div>
        )
    }
}

export default AddStudent;