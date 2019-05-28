import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Student from '../Student/Student'


export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: [],
      currentClass: ''
    }
  }
  
  componentDidMount(){
    axios
      .get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(response =>{
        this.setState({students: response.data})
      })
  }

  render() {
    <Student currentClass={this.props.match.params.class}/>
    let students = this.state.students.map((student, i)=>(
      <Link to={`/student/${student.id}`} ><h3 key={i}>{student.first_name} {student.last_name}</h3></Link>
    ));
    return (
      <div className="box">
        <Link to='/'><button>Back</button></Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}