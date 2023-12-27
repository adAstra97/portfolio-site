import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import NotFound from './components/NotFound/NotFound'
import Projects from './components/Projects/Projects'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='projects' element={<Projects/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
