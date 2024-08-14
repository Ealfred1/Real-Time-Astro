import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import { LandingPage, TeamPage, TeamDetails, BookingPage, MemberPage } from './pages'

const App = () => {

  return (
    <>
      <section>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/member" element={<MemberPage />} />
            <Route path="/team/:teamId" element={<TeamDetails />} />
          </Route>
        </Routes>
      </section>
    </>
  )
}

export default App
