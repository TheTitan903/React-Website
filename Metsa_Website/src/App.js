import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home_page'
import Initiatives_page from './pages/Initiatives_page'
const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
            <Route index element = {<Home/>}/>
            <Route path = "/home" element = {<Home/>}/>
            <Route path = "/initiatives" element = {<Initiatives_page/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
