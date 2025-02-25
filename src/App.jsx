import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import GetStarted from "./pages/GetStarted"


const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/get-started" element={<GetStarted />}/>
    </Routes>
  )
}

export default App