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

function App() {
	return (
		<>
			<Header />
			<NotFound />
			<Footer />
		</>
	);
}

export default App;
