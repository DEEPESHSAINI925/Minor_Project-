
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/sections/Home'
import Login from './components/layout/Login'
import Register from './components/layout/Register'
import SearchingLawer from './components/sections/SearchingLawer'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/search/lawer' element={<SearchingLawer/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App