const Patient = ({ petName, ownerName, email, entryDate, symptoms }) => {
  return (
    <section className="bg-slate-100 shadow-lg rounded-sm px-4 py-6 mb-4">
      <p className="font-bol mb-2 text-gray-700 uppercase font-bold">
        Name:{''}
        <span className="px-2 normal-case font-normal">{petName}</span>
      </p>

      <p className="font-bol mb-2 text-gray-700 uppercase font-bold">
        Owner's Name:{''}
        <span className="px-2 normal-case font-normal">{ownerName}</span>
      </p>

      <p className="font-bol mb-2 text-gray-700 uppercase font-bold">
        Email:{''}
        <span className="px-2 normal-case font-normal">{email}</span>
      </p>

      <p className="font-bol mb-2 text-gray-700 uppercase font-bold">
        Entry Date:{''}
        <span className="px-2 normal-case font-normal">{entryDate}</span>
      </p>

      <p className="font-bol mb-2 text-gray-700 uppercase font-bold">
        Symptoms:{''}
        <span className="px-2 normal-case font-normal">{symptoms}</span>
      </p>
    </section>
  )
}

export default Patient
