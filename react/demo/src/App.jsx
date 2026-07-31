import { useState } from "react";
import Student from "./Student";

//parent class 
function App() {

 return (
    <div>
     <Student name="Adnan" course="Java Full Stack" age={25}/>
          <Student name="Trupti" course="React Full Stack" age={24}/>

    </div>
  );
}

export default App;