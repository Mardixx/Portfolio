import './App.css'
import { MovieBrowser } from './components/MovieBrowser'
import { Home } from './components/Home'
import { Collection } from './components/Collection'
import { DarkKitchen } from './components/DarkKitchen'
import { ProjectPlanner } from './components/ProjectPlanner'
import { Header } from './components/Header'
import { AboutMe } from './components/AboutMe'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { Projects } from './components/Projects'
import { ScrollToTop } from './components/ScrollToTop'
import { SuperCapsule } from './components/SuperCapsule'
import { AngularJavaAPIProject } from './components/AngularJavaAPIProject'

function App() {
  return (
    <div className='App'>
      <Header />
      <ScrollToTop />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/MovieBrowser' element={<MovieBrowser />} />
        <Route path='/DarkKitchen' element={<DarkKitchen />} />
        <Route path='/ProjectPlanner' element={<ProjectPlanner />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/SuperCapsule' element={<SuperCapsule />} />
        <Route path='/AngularJavaAPIProject' element={<AngularJavaAPIProject />} />
      </Routes> 
      <Footer />
    </div>
  )
}

export default App
