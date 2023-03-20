import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./Navbar"
import { BCPage } from "./BrowseClasses/BCPage"
import { MRPage } from "./MajorRequirements/MRPage"
import { RIPage } from "./RegistrationInformation/RIPage"
import { Home } from "./Home"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-classes" element={<BCPage />} />
        <Route path="/major-requirements" element={<MRPage />} />
        <Route path="/registration-information" element={<RIPage />} />
      </Routes>
    </Router>
  )
}

export default App
