import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import TripPlanner from "./pages/TripPlanner"


const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/get-started" element={<TripPlanner />}/>
    </Routes>
  )
}

export default App