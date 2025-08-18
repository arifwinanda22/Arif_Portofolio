import './App.css'
import Home from './pages/Home.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import DetailPortfolio from './pages/DetailPortfolio.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Experience from './pages/Experience.jsx'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio/:id' element={<DetailPortfolio />} />
        <Route path='/page-not-found' element={<PageNotFound />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App
