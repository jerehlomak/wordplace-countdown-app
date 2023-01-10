import React, { useState, useContext } from 'react'
import { FormContext } from '../Context/FormContext'

const Form = () => {
    const { hours, minutes, seconds, setHours, setMinutes, setSeconds, setShowCountDown } = useContext(FormContext)
  return (
    <div className='flex gap-4'>
        <label className='block font-bold text-xl text-gray-700'>
            Hours: 
            <input 
                type='number'
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value))}
                className='form-input mt-1 block w-32 outline-none pl-3'
            />
        </label>
        <label className='block font-bold text-xl text-gray-700'>
            Minutes: 
            <input 
                type='number'
                value={minutes}
                onChange={(e) => setMinutes(parseInt(e.target.value))}
                className='form-input mt-1 block w-32 outline-none pl-3'
            />
        </label>
        <label className='block font-bold text-xl text-gray-700'>
            Seconds: 
            <input 
                type='number'
                value={seconds}
                onChange={(e) => setSeconds(parseInt(e.target.value))}
                className='form-input mt-1 block w-32 outline-none pl-3'
            />
        </label>
        <button 
            className='px-4 font-semibold rounded-md bg-blue-400'
            onClick={() => {
                setShowCountDown(true)
            }}
        >
            Submit
        </button>
    </div>
  )
}

export default Form