import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import { LandingPage, TeamPage } from './pages'

const App = () => {

  return (
    <>
      <section>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/teams" element={<TeamPage />} />
          </Route>
        </Routes>
      </section>
    </>
  )
}

export default App
