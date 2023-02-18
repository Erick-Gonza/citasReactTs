import Patient from './Patient'

const CustomersList = ({ patients }) => {
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
      {patients.length === 0 ? (
        <p className="text-center text-lg text-slate-200">
          There are no patients yet.
        </p>
      ) : null}
      {patients.map((patient) => (
        <Patient
          petName={patient.petName}
          ownerName={patient.ownerName}
          email={patient.email}
          entryDate={patient.entryDate}
          symptoms={patient.symptoms}
          key={patient.petName}
        />
      ))}
    </section>
  )
}

export default CustomersList
