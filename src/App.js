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

import Footer from './footer';

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
            
      </Routes>
            <Footer />
    </Router>
  );
}

export default App;
