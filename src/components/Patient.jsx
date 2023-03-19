import React from 'react'

export const Patient = () => {

    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: {''}
                <span className='font-normal normal-case'>Igor</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario: {''}
                <span className='font-normal normal-case'>Luciano</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email: {''}
                <span className='font-normal normal-case'>luciano@gmail.com</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Fecha de Alta: {''}
                <span className='font-normal normal-case'>28 Enero 2023</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Sintomas: {''}
                <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Delectus eaque praesentium tempora corrupti aliquam officia 
                nulla harum, odit excepturi blanditiis dolores sed necessitatibus vero vel 
                dolorem facilis ex quam vitae!</span>
            </p>
        </div>
    )
}
