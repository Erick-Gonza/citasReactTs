import { useState } from 'react'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import CustomersList from './components/CustomersList'
import Form from './components/Form'

function App() {
  const [patients, setPatients] = useState()

  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row gap-4 lg:gap-6 px-6 py-4">
        <Form setPatients={setPatients} />
        <CustomersList />
      </main>
      <Footer />
    </>
  )
}

export default App
