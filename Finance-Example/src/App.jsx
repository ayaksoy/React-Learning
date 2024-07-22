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

function App() {
	return (
		<>
			<Header />
			<ProjectDetail />
			<Footer />
		</>
	);
}

export default App;
