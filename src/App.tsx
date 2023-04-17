import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Top_Navbar } from "./Top_Navbar"
import { Navbar } from "./Navbar"
import { BCPage } from "./BrowseClasses/BCPage"
import { MRPage } from "./MajorRequirements/MRPage"
import { RIPage } from "./RegistrationInformation/RIPage"
import { MSPage } from "./MySchedule/MSPage"
import { Home } from "./Home"

function App() { //Substitute <Top_Navbar/> with <Navbar/> to change the top navigation bar to the side navigation bar
  return (
    <Router>
      <Top_Navbar/> 
      <Routes>
        <Route path="/"                         element={<Home />} />
        <Route path="/browse-classes"           element={<BCPage />} />
        <Route path="/major-requirements"       element={<MRPage />} />
        <Route path="/registration-information" element={<RIPage />} />
        <Route path="/my-schedule"              element={<MSPage />} />
      </Routes>
    </Router>
  )
}

export default App
