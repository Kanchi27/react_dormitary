import React from 'react';
import {STUDENTS} from '../studentsList';

// `joiningDate` && `validityDate` format "yyyy-mm-dd"



function Search(props) {
  const [studentName,setStudentName] = React.useState("");
  const [joiningDate,setJoiningDate] = React.useState("");

  const  checkValidity = (joiningDate, validityDate) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const [year, month, day] = joiningDate.split('-');
    const [yyyy, mm, dd] = validityDate.split('-');
    const maxValid = new Date(yyyy, mm - 1, dd);
    const selected = new Date(year, month - 1, day);
    return (maxValid >= selected) && (maxValid >= today);
  }
  const handleStudentName = (e) => {
      setStudentName(e.target.value);
  };
  const handleDate = (e) => {
    setJoiningDate(e.target.value);
  };
  const addStudent = () => {
    console.log(studentName);
    let index = STUDENTS.findIndex(student => student.name === studentName);
    if(index===-1){
      props.error(`Sorry ${studentName} is not a verified student`);
    }else{
      const flag = checkValidity(joiningDate ,STUDENTS[index].validityDate);
      console.log(flag);
      if(flag){
        props.studentList(studentName);
      }else{
        props.error(`Sorry ${studentName}'s validity has Expired!`);
      }
    }
    
  }
	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
          <input id="studentName"
              data-testid="studentName"
              type="text"
              onChange={handleStudentName}
              className="mr-30 mt-10"/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
          <input id="joiningDate"
          data-testid="joiningDate"
          type="date"
          onChange={handleDate}
          className="mr-30 mt-10"/>
				</div>
			</label>
      <button type="button"
      data-testid="addBtn"
        onClick={addStudent}
      className="small mb-0">Add</button>
		</div>
	);
}

export default Search;
