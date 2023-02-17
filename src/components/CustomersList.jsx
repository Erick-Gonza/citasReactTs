import Patient from './Patient'

const CustomersList = () => {
  return (
    <section className="w-full h-screen md:w-1/2 lg:w-3/5 mb-4 md:mb-6 lg:mb-10 md: overflow-y-scroll lg:overflow-y-auto">
      <h2 className="font-black text-2xl text-slate-200 text-center mb-2">
        List of Patients
      </h2>
      <p className="font-semibold pt-2 text-slate-200 text-center text-lg mb-2">
        Manage your {''}
        <span className="text-indigo-600 font-bold text-center">
          Patients & appointments.
        </span>
      </p>
      <Patient
        petName="Ahri"
        ownerName="Erick Gzz"
        email="test@test.com"
        entryDate="02/16/2023"
        symptoms="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum veniam officiis alias cum asperiores praesentium quidem ut explicabo nostrum, eius rerum ab quam aliquam quibusdam quos natus perferendis fugiat commodi."
      />
    </section>
  )
}

export default CustomersList
