import PropTypes from 'prop-types'
function Student(props){
    return(
        <>
            <div className="student">
                <p>My name is {props.name}</p>
                <p>My age is {props.age}</p>
                <p>Am I a student: {props.isStudent ? "Yes":"No"}</p>
            </div>
            <hr></hr>
        </>
    );
}
Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Student.defaultProps = {
    name:"Guest",
    age: 0,
    isStudent: false
}
export default Student;