import React from "react";

function Student(props){
return(

    <div>
        <h2>Student Detail</h2>
        <p>Name:{props.name}</p>
        <p>Course:{props.course}</p>
        <p>Age:{props.age}</p>
        <hr />
        
    </div>
);

}
export default Student;