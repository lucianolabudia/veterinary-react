import { Patient } from './Patient';


export const PatientList = ({ patient, setEditPatient }) => {

    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

            { patient && patient.length ? (
                <>
                    <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Administra tus {''}
                        <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
                    </p>
        
                    { patient.map( patient => (
                        <Patient
                            key={ patient.id }
                            patient={ patient }
                            setEditPatient={ setEditPatient }
                        />
                    )) }

                </>

            ) : (
                <>
                    <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Comienza agregando pacientes {''}
                        <span className='text-indigo-600 font-bold'>y apareceran en este lugar</span>
                    </p>
                </>
            ) }            

        </div>
    )
}
