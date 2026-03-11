import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  GsapFrom,
  GsapFromTo,
  GsapScrollTrigger,
  GsapStagger,
  GsapText,
  GsapTimeline,
  GsapTo,
  Home,
  Practice1,
  Practice2,
  Practice3,
  Practice4,
  Practice5,
  Project,
} from "./pages";

const App = () => {
  return (
    <div className=" min-h-screen w-full">
      <Router>
        <Routes>
          <Route path="/gsapto" element={<GsapTo />} />
          <Route path="/gsapfrom" element={<GsapFrom />} />
          <Route path="/gsapfromto" element={<GsapFromTo />} />
          <Route path="/gsaptimeline" element={<GsapTimeline />} />
          <Route path="/gsapstagger" element={<GsapStagger />} />
          <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
          <Route path="/gsaptext" element={<GsapText />} />
          <Route path="/prac1" element={<Practice1 />} />
          <Route path="/prac2" element={<Practice2 />} />
          <Route path="/prac3" element={<Practice3 />} />
          <Route path="/prac4" element={<Practice4 />} />
          <Route path="/prac5" element={<Practice5 />} />
          <Route path="/AmmiProject" element={<Project />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
