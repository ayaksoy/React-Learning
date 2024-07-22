import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
import Service from "./pages/Service";
import ServiceDetail from "./pages/ServiceDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>

			<Router>
			<Header />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blog/:id" element={<BlogDetail />} />
					<Route path="/project" element={<Project />} />
					<Route path="/project:id" element={<ProjectDetail />} />
					<Route path="/service" element={<Service />} />
					<Route path="/service:id" element={<ServiceDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			<Footer />
			</Router>

		</>
	);
}

export default App;
