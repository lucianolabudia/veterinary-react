import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { PatientList } from "./components/PatientList";


function App() {

  const [ patient, setPatient ] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header /> 

      <div className="mt-12 md:flex">

        <Form 
          patient={ patient }
          setPatient={ setPatient }          
        />

        <PatientList />
      </div>     
      
    </div>
  )
}

export default App
