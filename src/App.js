import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

import ScrollToTop from "./ScrollTop";
import Home from "./Home";
import Project1 from "./project1";
import Project2 from "./project2";
import Project3 from "./project3";
// import Project4 from "./project4";
// import Project5 from "./project5";
// import Project6 from "./project6";
import Footer from './footer';

// import Project7 from "./project7";
// import Project8 from "./project8";
// Project Page Component
const ProjectPage = ({ num }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-200 text-black">
      <h1 className="text-4xl font-bold">Project {num}</h1>
      <p className="mt-4">Details about Project {num} go here...</p>
      <Link to="/" className="mt-6 text-blue-500 underline">
        Back to Home
      </Link>
    </div>
  );
};

// Wrapper to extract :num param
const ProjectPageWrapper = () => {
  const { num } = useParams();
  return <ProjectPage num={num} />;
};

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:num" element={<ProjectPageWrapper />} />
         <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
            <Route path="/project3" element={<Project3 />} />
              {/* <Route path="/project4" element={<Project4 />} />
                <Route path="/project5" element={<Project5 />} />
                  <Route path="/project6" element={<Project6 />} /> */}
                    {/* <Route path="/project7" element={<Project7 />} />
                      <Route path="/project8" element={<Project8 />} /> */}
                        {/* <Route path="/footer" element={<Footer />} /> */}
                        
        {/* <Route path="/" element={<Projects />} /> */}
      </Routes>
            <Footer />
    </Router>
  );
}

export default App;
