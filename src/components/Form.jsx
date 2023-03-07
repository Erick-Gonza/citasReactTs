import { useState } from 'react'

const Form = ({ addPatient }) => {
  const [error, setError] = useState(false)
  const [data, setData] = useState({
    petName: '',
    ownerName: '',
    email: '',
    entryDate: '',
    symptoms: ''
  })

  const handleChange = e => {
    setData({
      ...data,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (
      !data.petName ||
      !data.ownerName ||
      !data.email ||
      !data.entryDate ||
      !data.symptoms
    ) {
      setError(true)
      return
    }

    setError(false)
    addPatient(data)
  }

  return (
    <section className='w-full h-full md:w-1/2 lg:w-2/5 mb-4 md:mb-6 lg:mb-10'>
      <h2 className='font-black text-center text-2xl text-slate-200'>
        Tracking of Patients
      </h2>
      <section className='text-center text-lg md:text-xl mb-2'>
        <p className='font-semibold pt-4 text-slate-200'>
          Add Patients & <span className='text-indigo-600'>Manage them</span>
        </p>
      </section>

      <form
        className='bg-slate-100 shadow-lg px-4 py-6 rounded-sm'
        onSubmit={handleSubmit}
      >
        {error && (
          <p className='bg-red-100 border-r-4 border-red-500 text-red-700 p-4 mb-4'>
            <strong className='font-bold'>Error!</strong>
            <span className='block'>Please fill all the fields</span>
          </p>
        )}
        <section className='mb-2'>
          <label htmlFor='petName' className='block font-bold mb-2'>
            Pet's Name
          </label>
          <input
            type='text'
            id='petName'
            placeholder="Pet's Name"
            className='border-2 w-full p-2 rounded-md placeholder-gray-500'
            onChange={e => handleChange(e)}
          />
        </section>

        <section className='mb-2'>
          <label htmlFor='ownerName' className='block font-bold mb-2'>
            Owner's Name
          </label>
          <input
            type='text'
            id='ownerName'
            placeholder="Owner's Name"
            className='border-2 w-full p-2 rounded-md placeholder-gray-500'
            onChange={e => handleChange(e)}
          />
        </section>

        <section className='mb-2'>
          <label htmlFor='email' className='block font-bold mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            placeholder="Owner's Email Address"
            className='border-2 w-full p-2 rounded-md placeholder-gray-500'
            onChange={e => handleChange(e)}
          />
        </section>

        <section className='mb-2'>
          <label htmlFor='entryDate' className='block font-bold mb-2'>
            Entry Date
          </label>
          <input
            type='date'
            id='entryDate'
            className='border-2 w-full p-2 rounded-md placeholder-gray-500'
            onChange={e => handleChange(e)}
          />
        </section>

        <section className='mb-2'>
          <label htmlFor='symptoms' className='block font-bold mb-2'>
            Symptoms
          </label>
          <textarea
            id='symptoms'
            className='border-2 w-full p-2 rounded-md placeholder-gray-500 resize-none'
            cols={30}
            rows={5}
            placeholder="Pet's Symptoms description"
            onChange={e => handleChange(e)}
          />
        </section>

        <input
          type='submit'
          className='bg-gray-900 text-white font-bold uppercase px-3 py-2 w-full rounded-md mt-4 hover:bg-gray-700 cursor-pointer transition-colors duration-300'
          value='Add Patient'
        />
      </form>
    </section>
  )
}

export default Form
