import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import NotFound from "./NotFound";
import Particles from "./Particles";
import "./index.css"


import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />

				{/* fallback route */}
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
	
		</>
  );
}

export default App;
