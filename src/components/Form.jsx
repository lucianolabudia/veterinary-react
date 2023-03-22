import { useState, useEffect } from 'react';
import { Error } from './Error';


export const Form = ({ patient, setPatient, editPatient }) => {

    const [ name, setName ] = useState('');
    const [ owner, setOwner ] = useState('');
    const [ email, setEmail] = useState('');
    const [ date, setDate ] = useState('');
    const [ symptoms, setSymptoms ] = useState('');

    const [ error, setError ] = useState(false);

    useEffect( () => {
        if ( Object.keys(editPatient).length > 0 ) {
            setName(editPatient.name)
            setOwner(editPatient.owner)
            setEmail(editPatient.email)
            setDate(editPatient.date)
            setSymptoms(editPatient.symptoms)
        } 

    }, [editPatient] );    


    const generateId = () => {
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36);

        return random + date;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validacion del Formulario
        if ( [ name, owner, email, date, symptoms ].includes('') ) {
            console.log('Hay al menos un campo vacio')

            setError(true);
            return;
        }

        setError(false);

        // Objeto de Paciente
        const objectPatient = {
            name, 
            owner, 
            email, 
            date, 
            symptoms,
            id: generateId()
        }

        setPatient([ ...patient, objectPatient ]);

        // Reiniciar el form
        setName('');
        setOwner('');
        setEmail('');
        setDate('');
        setSymptoms('');
    }
    
    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>

            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className='text-lg mt-5 text-center mb-10'>
                Añade Pacientes y {""}
                <span className='text-indigo-600 font-bold'>Administralos</span>
            </p>

            <form 
                onSubmit={ handleSubmit }
                className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'            
            >
                
                { error && <Error><p>Todos los campos son obligatorios</p></Error> }
                
                <div className='mb-5'>
                    <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
                        Nombre Mascota 
                    </label>
                    <input
                        id='mascota'
                        type='text'
                        placeholder='Nombre de la Mascota'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='owner' className='block text-gray-700 uppercase font-bold'>
                        Nombre Propietario
                    </label>
                    <input
                        id='owner'
                        type='text'
                        placeholder='Nombre del Propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={ owner }
                        onChange={ (e) => setOwner(e.target.value) }
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
                        Email
                    </label>
                    <input
                        id='email'
                        type='email'
                        placeholder='Email Contacto Propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='date' className='block text-gray-700 uppercase font-bold'>
                        Alta
                    </label>
                    <input
                        id='date'
                        type='date'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={ date }
                        onChange={ (e) => setDate(e.target.value) }
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='symptoms' className='block text-gray-700 uppercase font-bold'>
                        Sintomas
                    </label>
                    <textarea
                        id='symptoms'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        placeholder='Describe los Sintomas'
                        value={ symptoms }
                        onChange={ (e) => setSymptoms(e.target.value) }
                    />
                </div>

                <input 
                    type="submit" 
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors'
                    value="Agregar Paciente"
                />

            </form>

        </div>
        
    )
}
