import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { PatientList } from "./components/PatientList";


function App() {

  const [ patient, setPatient ] = useState([]);
  const [ editPatient, setEditPatient ] = useState({});

  return (
    <div className="container mx-auto mt-20">
      <Header /> 

      <div className="mt-12 md:flex">

        <Form 
          patient={ patient }
          setPatient={ setPatient }
          editPatient={ editPatient }  
          setEditPatient={ setEditPatient }        
        />

        <PatientList 
          patient={ patient }
          setEditPatient={ setEditPatient }
        />
      </div>     
      
    </div>
  )
}

export default App
