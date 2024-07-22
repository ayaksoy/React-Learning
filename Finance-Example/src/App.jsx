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
import { useEffect, useState } from "react";

function App() {
	const [blog, setBlog] = useState([]);
	const [gallery, setGallery] = useState([]);
	const [project, setProject] = useState([]);
	const [service, setService] = useState([]);
	const fetchBlog = async () => {
		const response = await fetch("http://localhost:3000/blog");
		const data = await response.json();
		setBlog(data);
	};
	const fetchGallery = async () => {
		const response = await fetch("http://localhost:3000/gallery");
		const data = await response.json();
		setGallery(data);
	};
	const fetchProject = async () => {
		const response = await fetch("http://localhost:3000/project");
		const data = await response.json();
		setProject(data);
	};
	const fetchService = async () => {
		const response = await fetch("http://localhost:3000/service");
		const data = await response.json();
		setService(data);
	};

	useEffect(() => {
		fetchBlog();
		fetchGallery();
		fetchProject();
		fetchService();
	}, []);

	const getBlogById = (id) => {
		return blog.find((blog) => blog.id === id);
	};
	const getProjectById = (id) => {
		return project.find((project) => project.id === id);
	};
	const getServiceById = (id) => {
		return service.find((service) => service.id === id);
	};
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="/gallery" element={<Gallery gallery={gallery} />} />
				<Route
					path="/blog"
					element={<Blog blog={blog} getBlogById={getBlogById} />}
				/>
				<Route path="/blog/:id" element={<BlogDetail />} />
				<Route
					path="/project"
					element={
						<Project project={project} getProjectById={getProjectById} />
					}
				/>
				<Route path="/project:id" element={<ProjectDetail />} />
				<Route
					path="/service"
					element={
						<Service service={service} getServiceById={getServiceById} />
					}
				/>
				<Route path="/service:id" element={<ServiceDetail />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
