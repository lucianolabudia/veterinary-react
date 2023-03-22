import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { PatientList } from "./components/PatientList";


function App() {

  const [ patient, setPatient ] = useState([]);
  const [ editPatient, setEditPatient ] = useState({});


  useEffect(() => {
    const getLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPatient(patientsLS);
    }
    getLS();
  }, []);
  

  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify( patient ));
  }, [patient]);
  

  const deletePatient = id => {
    const updatedPatients = patient.filter( editPatient => editPatient.id !== id );
    setPatient(updatedPatients);
  }

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
          deletePatient={ deletePatient }
        />
      </div>     
      
    </div>
  )
}

export default App
